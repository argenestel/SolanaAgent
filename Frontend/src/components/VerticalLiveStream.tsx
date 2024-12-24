import React, { useState, useRef, useEffect } from "react";
import { Heart, Gift, Share2, Send, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  ChatBubble,
  ChatBubbleAvatar,
  ChatBubbleMessage,
} from "@/components/ui/chat/chat-bubble";

const VerticalLivestream = () => {
  const [messages, setMessages] = useState([
    { id: 1, user: "Alex123", message: "Great stream!", amount: 5 },
    { id: 2, user: "Sarah_89", message: "Keep it up! 🎉", amount: 10 },
  ]);
  const [input, setInput] = useState("");
  const [donationAmount, setDonationAmount] = useState(1);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (input.trim() && donationAmount > 0) {
      const newMessage = {
        id: messages.length + 1,
        user: "User_" + Math.floor(Math.random() * 1000),
        message: input,
        amount: donationAmount,
      };
      setMessages([...messages, newMessage]);
      setInput("");
    }
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-black text-white">
      {/* Video Area (Placeholder) */}
      <div className="relative h-3/4 bg-gray-800">
        <div className="absolute top-4 right-4 flex flex-col gap-4">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-900/50"
          >
            <Heart className="size-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-900/50"
          >
            <Share2 className="size-6" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full bg-gray-900/50"
          >
            <Gift className="size-6" />
          </Button>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-900/50 to-gray-900">
        <div className="p-4 space-y-2">
          {messages.map((msg) => (
            <ChatBubble key={msg.id} variant="received">
              <ChatBubbleAvatar
                src=""
                fallback={msg.user.charAt(0).toUpperCase()}
              />
              <ChatBubbleMessage>
                <div className="flex items-center gap-2 text-sm font-medium">
                  <span>{msg.user}</span>
                  <span className="text-yellow-400 flex items-center">
                    <DollarSign className="size-3" />
                    {msg.amount}
                  </span>
                </div>
                <p className="text-sm">{msg.message}</p>
              </ChatBubbleMessage>
            </ChatBubble>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4 bg-gray-900">
        <form onSubmit={handleSendMessage} className="flex gap-2">
          <div className="flex-1 flex gap-2">
            <input
              type="number"
              min="1"
              value={donationAmount}
              onChange={(e) => setDonationAmount(Number(e.target.value))}
              className="w-20 px-3 py-2 rounded-lg bg-gray-800 text-white"
            />
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Send a message..."
              className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white"
            />
          </div>
          <Button type="submit" className="rounded-lg">
            <Send className="size-4" />
          </Button>
        </form>
      </div>
    </div>
  );
};

export default VerticalLivestream;
