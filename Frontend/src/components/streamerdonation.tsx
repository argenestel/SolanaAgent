import React, { useEffect, useState } from "react";
import { useAnchorWallet, useConnection } from "@solana/wallet-adapter-react";
import { Program, AnchorProvider, setProvider } from "@coral-xyz/anchor";
import { PublicKey, SystemProgram, LAMPORTS_PER_SOL } from "@solana/web3.js";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Loader2, Check, MessageCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";

const PROGRAM_ID = new PublicKey(
  "9XxWe9kREj3pbVcZbsy32TijqTZZuppCYxdrvDqZoLw3",
);

const StreamerDonations = () => {
  const { connection } = useConnection();
  const wallet = useAnchorWallet();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [streamerAccount, setStreamerAccount] = useState(null);
  const [donations, setDonations] = useState([]);
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState(0.1);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    if (wallet) {
      const provider = new AnchorProvider(connection, wallet, {
        commitment: "confirmed",
      });
      setProvider(provider);

      // Check if current wallet is admin/streamer
      const checkAdmin = async () => {
        try {
          const program = new Program(idl, PROGRAM_ID);
          const accounts = await program.account.streamerAccount.all();
          const isStreamer = accounts.some(
            (acc) =>
              acc.account.owner.toString() === wallet.publicKey.toString(),
          );
          setIsAdmin(isStreamer);
          if (isStreamer) {
            setStreamerAccount(accounts[0]);
          }
        } catch (err) {
          console.error("Error checking admin status:", err);
        }
      };

      checkAdmin();
      fetchDonations();
    }
  }, [wallet, connection]);

  const fetchDonations = async () => {
    if (!wallet) return;

    try {
      const program = new Program(idl, PROGRAM_ID);
      const allDonations = await program.account.donation.all();
      setDonations(
        allDonations.sort((a, b) => b.account.timestamp - a.account.timestamp),
      );
    } catch (err) {
      console.error("Error fetching donations:", err);
      setError("Failed to fetch donations");
    }
  };

  const initializeStreamer = async () => {
    if (!wallet) return;

    setLoading(true);
    setError(null);

    try {
      const program = new Program(idl, PROGRAM_ID);
      await program.methods
        .initializeStreamer()
        .accounts({
          streamerAccount: wallet.publicKey,
          owner: wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      setIsAdmin(true);
      await fetchDonations();
    } catch (err) {
      console.error("Error initializing streamer:", err);
      setError("Failed to initialize streamer account");
    } finally {
      setLoading(false);
    }
  };

  const sendDonation = async () => {
    if (!wallet || !streamerAccount) return;

    setLoading(true);
    setError(null);

    try {
      const program = new Program(idl, PROGRAM_ID);
      const donationAmount = amount * LAMPORTS_PER_SOL;

      await program.methods
        .sendDonation(message, donationAmount)
        .accounts({
          donationAccount: PublicKey.findProgramAddressSync(
            [Buffer.from("donation"), wallet.publicKey.toBuffer()],
            program.programId,
          )[0],
          streamerAccount: streamerAccount.publicKey,
          streamer: streamerAccount.account.owner,
          donor: wallet.publicKey,
          systemProgram: SystemProgram.programId,
        })
        .rpc();

      setMessage("");
      setAmount(0.1);
      await fetchDonations();
    } catch (err) {
      console.error("Error sending donation:", err);
      setError("Failed to send donation");
    } finally {
      setLoading(false);
    }
  };

  const markAsRead = async (donationPubkey) => {
    if (!wallet || !isAdmin) return;

    setLoading(true);
    setError(null);

    try {
      const program = new Program(idl, PROGRAM_ID);
      await program.methods
        .markAsRead(donationPubkey)
        .accounts({
          donationAccount: donationPubkey,
          streamerAccount: streamerAccount.publicKey,
          owner: wallet.publicKey,
        })
        .rpc();

      await fetchDonations();
    } catch (err) {
      console.error("Error marking as read:", err);
      setError("Failed to mark donation as read");
    } finally {
      setLoading(false);
    }
  };

  if (!wallet) {
    return (
      <div className="text-center p-4">
        Please connect your wallet to continue
      </div>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle>Streamer Donations</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {!streamerAccount && !isAdmin ? (
          <div className="text-center">
            <Button
              onClick={initializeStreamer}
              disabled={loading}
              className="bg-purple-500 hover:bg-purple-600"
            >
              {loading ? (
                <Loader2 className="size-4 animate-spin mr-2" />
              ) : null}
              Initialize Streamer Account
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            {!isAdmin && (
              <div className="space-y-4">
                <Input
                  type="text"
                  placeholder="Your message..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  maxLength={280}
                  className="w-full"
                />
                <div className="flex gap-2">
                  <Input
                    type="number"
                    min="0.1"
                    step="0.1"
                    value={amount}
                    onChange={(e) => setAmount(Number(e.target.value))}
                    className="w-32"
                  />
                  <Button
                    onClick={sendDonation}
                    disabled={loading || !message || amount <= 0}
                    className="bg-green-500 hover:bg-green-600"
                  >
                    {loading ? (
                      <Loader2 className="size-4 animate-spin mr-2" />
                    ) : null}
                    Send {amount} SOL
                  </Button>
                </div>
              </div>
            )}

            <div className="space-y-2">
              <h3 className="font-semibold">Recent Donations</h3>
              {donations.map((donation) => (
                <div
                  key={donation.publicKey.toString()}
                  className="p-3 bg-card rounded-lg border border-border"
                >
                  <div className="flex justify-between items-start">
                    <div className="space-y-1">
                      <div className="text-sm font-medium">
                        From: {donation.account.donor.toString().slice(0, 4)}...
                        {donation.account.donor.toString().slice(-4)}
                      </div>
                      <div className="text-sm">{donation.account.message}</div>
                      <div className="text-xs text-muted-foreground">
                        {new Date(
                          donation.account.timestamp * 1000,
                        ).toLocaleString()}
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-sm font-medium">
                        {donation.account.amount / LAMPORTS_PER_SOL} SOL
                      </span>
                      {isAdmin && !donation.account.read && (
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => markAsRead(donation.publicKey)}
                          className="h-8 w-8 p-0"
                        >
                          <MessageCircle className="size-4" />
                        </Button>
                      )}
                      {donation.account.read && (
                        <Check className="size-4 text-green-500" />
                      )}
                    </div>
                  </div>
                </div>
              ))}

              {donations.length === 0 && (
                <div className="text-center text-muted-foreground p-4">
                  No donations yet
                </div>
              )}
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StreamerDonations;
