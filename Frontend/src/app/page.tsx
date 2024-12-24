"use client";
//@ts-nocheck
import { useEffect, useRef, useState } from "react";
import {
  Heart,
  Gift,
  Share2,
  Send,
  Sparkles,
  Users,
  ThumbsUp,
  Smile,
  Settings,
  Volume2,
  Wallet,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat-bubble";
import { Badge } from "@/components/ui/badge";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import {
  LAMPORTS_PER_SOL,
  PublicKey,
  Transaction,
  SystemProgram,
} from "@solana/web3.js";

export default function Home() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  const [balance, setBalance] = useState(0);

  const [streamMessages, setStreamMessages] = useState([
    { id: 1, user: "Alex123", message: "Great stream! 💖", amount: 5 },
    { id: 2, user: "Sarah_89", message: "Keep it up! 🎉", amount: 10 },
    {
      id: 3,
      user: "Emma_Joy",
      message: "Love the new content! 💝",
      amount: 15,
    },
  ]);

  const [donationInput, setDonationInput] = useState("");
  const [donationAmount, setDonationAmount] = useState(1);
  const [likeCount, setLikeCount] = useState(0);
  const [viewerCount, setViewerCount] = useState(1234);
  const [videoId, setVideoId] = useState("iYkiJtchbYs");
  const [isChatVisible, setIsChatVisible] = useState(true);

  const streamMessagesEndRef = useRef(null);

  // Fetch wallet balance
  useEffect(() => {
    if (publicKey) {
      const fetchBalance = async () => {
        const walletBalance = await connection.getBalance(publicKey);
        setBalance(walletBalance / LAMPORTS_PER_SOL);
      };
      fetchBalance();
      // Update balance every 30 seconds
      const interval = setInterval(fetchBalance, 30000);
      return () => clearInterval(interval);
    }
  }, [publicKey, connection]);

  useEffect(() => {
    if (streamMessagesEndRef.current) {
      streamMessagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [streamMessages]);

  const handleSolanaDonation = async (e) => {
    e.preventDefault();
    if (!publicKey || !donationInput.trim() || donationAmount <= 0) return;

    try {
      // Create transaction
      const transaction = new Transaction().add(
        SystemProgram.transfer({
          fromPubkey: publicKey,
          toPubkey: new PublicKey("Your-Recipient-Wallet-Address-Here"), // Replace with actual recipient address
          lamports: donationAmount * LAMPORTS_PER_SOL,
        }),
      );

      // Send transaction
      const signature = await sendTransaction(transaction, connection);
      await connection.confirmTransaction(signature, "confirmed");

      // Add message to chat
      const newMessage = {
        id: streamMessages.length + 1,
        user:
          publicKey.toString().slice(0, 4) +
          "..." +
          publicKey.toString().slice(-4),
        message: donationInput,
        amount: donationAmount,
      };
      setStreamMessages([...streamMessages, newMessage]);
      setDonationInput("");

      // Update balance after donation
      const newBalance = await connection.getBalance(publicKey);
      setBalance(newBalance / LAMPORTS_PER_SOL);
    } catch (error) {
      console.error("Error sending donation:", error);
    }
  };

  const handleLike = () => {
    setLikeCount((prev) => prev + 1);
  };

  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      <main className="container mx-auto p-2 md:p-4 flex flex-col h-[calc(100vh-1rem)]">
        {/* Stream Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-0 mb-4">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                <span className="text-base sm:text-lg">💫</span>
              </div>
              <Badge className="absolute -bottom-2 -right-2 bg-red-500 text-white border-none text-xs">
                LIVE
              </Badge>
            </div>
            <div>
              <h1 className="text-base sm:text-lg font-bold">Amazing Stream</h1>
              <div className="flex items-center gap-2 text-zinc-400 text-xs sm:text-sm">
                <Users className="size-4" />
                {viewerCount.toLocaleString()} watching
              </div>
            </div>
          </div>
          <div className="flex gap-2 w-full sm:w-auto justify-end items-center">
            <WalletMultiButton />
            {publicKey && (
              <span className="text-xs text-zinc-400">
                {balance.toFixed(2)} SOL
              </span>
            )}
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800"
            >
              <ThumbsUp className="size-4 mr-2" /> {likeCount}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-zinc-400 hover:text-white hover:bg-zinc-800 sm:hidden"
              onClick={() => setIsChatVisible(!isChatVisible)}
            >
              <Settings className="size-4" />
            </Button>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex flex-col md:flex-row gap-4 flex-1 min-h-0">
          {/* Video Section */}
          <div className="flex-1 flex flex-col bg-zinc-800 rounded-lg overflow-hidden">
            {/* Video Player */}
            <div className="relative w-full pt-[56.25%] bg-black">
              <iframe
                className="absolute top-0 left-0 w-full h-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            {/* Video Controls */}
            <div className="p-2 sm:p-4 flex justify-between items-center bg-zinc-800/90">
              <div className="flex gap-2 sm:gap-4">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                >
                  <Volume2 className="size-4 sm:size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                >
                  <Settings className="size-4 sm:size-5" />
                </Button>
              </div>
              <div className="flex gap-2">
                <Button
                  onClick={handleLike}
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                >
                  <Heart className="size-4 sm:size-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                >
                  <Gift className="size-4 sm:size-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Chat Section */}
          <Card
            className={`${isChatVisible ? "flex" : "hidden"} md:flex w-full md:w-80 flex-col bg-zinc-800 border-zinc-700`}
          >
            <CardHeader className="border-b border-zinc-700 py-2 sm:py-3">
              <CardTitle className="text-sm sm:text-base font-medium flex items-center justify-between">
                Live Chat
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                >
                  <Settings className="size-4" />
                </Button>
              </CardTitle>
            </CardHeader>

            <CardContent className="flex-1 flex flex-col p-0 min-h-0">
              {/* Messages Area */}
              <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-zinc-600">
                <div className="p-2 sm:p-4 space-y-2">
                  {streamMessages.map((msg) => (
                    <ChatBubble
                      key={msg.id}
                      variant="received"
                      className="bg-zinc-700/50"
                    >
                      <ChatBubbleAvatar
                        src=""
                        fallback={msg.user.charAt(0).toUpperCase()}
                        className="bg-gradient-to-r from-purple-500 to-pink-500"
                      />
                      <ChatBubbleMessage>
                        <div className="flex items-center gap-2 text-xs sm:text-sm">
                          <span className="font-medium text-purple-400">
                            {msg.user}
                          </span>
                          <span className="text-pink-400 flex items-center text-xs">
                            <Sparkles className="size-3 mr-1" />
                            {msg.amount} SOL
                          </span>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-200">
                          {msg.message}
                        </p>
                      </ChatBubbleMessage>
                    </ChatBubble>
                  ))}
                  <div ref={streamMessagesEndRef} />
                </div>
              </div>

              {/* Input Area */}
              <div className="p-2 sm:p-4 border-t border-zinc-700 bg-zinc-800">
                {publicKey ? (
                  <form
                    onSubmit={handleSolanaDonation}
                    className="flex flex-col gap-2"
                  >
                    <div className="flex gap-2">
                      <input
                        type="text"
                        value={donationInput}
                        onChange={(e) => setDonationInput(e.target.value)}
                        placeholder="Send a message..."
                        className="flex-1 px-3 py-2 rounded bg-zinc-700 border-zinc-600 text-sm text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="text-zinc-400 hover:text-white hover:bg-zinc-700"
                      >
                        <Smile className="size-4 sm:size-5" />
                      </Button>
                    </div>
                    <div className="flex gap-2">
                      <input
                        type="number"
                        min="0.1"
                        step="0.1"
                        value={donationAmount}
                        onChange={(e) =>
                          setDonationAmount(Number(e.target.value))
                        }
                        className="w-20 px-3 py-2 rounded bg-zinc-700 border-zinc-600 text-sm text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
                      />
                      <Button
                        type="submit"
                        className="flex-1 bg-purple-500 hover:bg-purple-600 text-white text-sm"
                      >
                        Send SOL <Send className="size-4 ml-2" />
                      </Button>
                    </div>
                  </form>
                ) : (
                  <div className="text-center text-zinc-400 text-sm">
                    Connect your wallet to send messages and donations
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}
