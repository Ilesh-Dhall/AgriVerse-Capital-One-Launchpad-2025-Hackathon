"use client";
import { Mic, Paperclip, SendHorizontal } from "lucide-react";
import React, { useState } from "react";

const ChatCard = () => {
  const [q, setQ] = useState("");
  return (
    <div className="flex gap-2 w-full bg-card-1 rounded-3xl relative p-2">
      <input
        value={q}
        onChange={(e) => setQ(e.target.value)}
        type="text"
        autoFocus
        className="rounded-full pl-3 w-full bg-background outline-none"
        placeholder=" how to irrigate"
      />
      <div className="flex items-center justify-center p-3 bg-background rounded-full">
        <Paperclip size={20} />
      </div>
      <div className="flex items-center justify-center p-3 bg-background rounded-full">
        {q == "" ? <Mic size={20} /> : <SendHorizontal size={20} />}
      </div>
    </div>
  );
};

export default ChatCard;
