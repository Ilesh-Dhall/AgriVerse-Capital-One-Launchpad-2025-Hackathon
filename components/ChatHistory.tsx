import React, { useState } from "react";
import { Search } from "lucide-react";

const ChatHistory = ({
  chats,
  selectedChat,
  setSelectedChat,
}: {
  chats: string[];
  selectedChat: string;
  setSelectedChat: (chat: string) => void;
}) => {
  const [q, setQ] = useState("");

  return (
    <div className="w-1/4 p-2 pl-0">
      <div className="flex w-full items-center border-2 border-l-0 gap-2 border-gray-300 rounded-r-md mb-2 p-2">
        <Search />
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          type="text"
          placeholder="Search chat history"
          className="outline-none grow"
        />
      </div>
      {chats.map(
        (chat, index) =>
          chat.toLowerCase().includes(q.toLowerCase()) && (
            <div
              key={index}
              className={`p-2 border-2 border-l-0 hover:border-green-900 rounded-r-md mb-2 cursor-pointer text-nowrap ${
                selectedChat === chat ? "bg-green-100" : ""
              }
            `}
              onClick={() => setSelectedChat(chat)}
            >
              {chat}
            </div>
          )
      )}
      {chats.length === 0 &&
        chats.map((chat, index) => (
          <div
            key={index}
            className={`p-2 border-2 border-l-0 hover:border-green-900 rounded-r-md mb-2 cursor-pointer text-nowrap ${
              selectedChat === chat ? " bg-green-100" : ""
            }`}
            onClick={() => setSelectedChat(chat)}
          >
            {chat}
          </div>
        ))}
    </div>
  );
};

export default ChatHistory;
