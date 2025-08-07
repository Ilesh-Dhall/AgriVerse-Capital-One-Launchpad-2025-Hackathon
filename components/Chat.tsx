import { useState } from "react";
import ChatHistory from "./ChatHistory";
import { Separator } from "./ui/separator";

const chats: string[] = [
  "Chat with farmer about crop yield",
  "Discuss irrigation techniques",
  "Ask about pest control methods",
  "Inquire about soil health",
  "Get weather updates for planting",
];

const Chat = () => {
  const [selectedChat, setSelectedChat] = useState<string>("");
  return (
    <div className="flex h-full">
      <ChatHistory
        selectedChat={selectedChat}
        setSelectedChat={setSelectedChat}
        chats={chats}
      />
      <Separator orientation="vertical" />

      <input placeholder="suggest crop to plant" />
    </div>
  );
};

export default Chat;
