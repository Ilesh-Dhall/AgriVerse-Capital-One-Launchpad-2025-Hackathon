"use client";
import { createElement, JSX, useState } from "react";
import Chat from "@/components/Chat";
import Crops from "@/components/Crops";
import Profile from "@/components/Profile";
import Dashboard from "@/components/Dashboard";
import HeaderBox from "@/components/ui/HeaderBox";
import {
  Bell,
  Database,
  Leaf,
  Settings,
  Star,
  User,
  Wheat,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

const pages: {
  name: string;
  component: JSX.ElementType;
  icon: JSX.ElementType;
}[] = [
  {
    name: "Chat",
    component: Chat,
    icon: Star,
  },
  {
    name: "Dashboard",
    component: Dashboard,
    icon: Database,
  },
  {
    name: "Crops",
    component: Crops,
    icon: Wheat,
  },
  {
    name: "Profile",
    component: Profile,
    icon: User,
  },
] as const;

type PageType = (typeof pages)[number]["name"];

export default function Page() {
  const [page, setPage] = useState<PageType>("Chat");

  return (
    <div className="flex flex-col h-screen">
      <nav className="flex justify-between w-full p-5 pb-0">
        <HeaderBox bottom="dotted">
          <Leaf color="green" strokeWidth={3} size={30} />
          <h1 className="font-logo text-2xl font-black">Agriverse</h1>
        </HeaderBox>
        <ul className="flex gap-2 items-center justify-center text-gray-800">
          {pages.map((p) => (
            <HeaderBox
              className={`cursor-pointer self-end ${
                page != p.name ? "hover:bg-green-900 hover:text-white" : ""
              }`}
              onClick={() => setPage(p.name)}
              bottom={page == p.name ? "none" : "solid"}
              key={p.name}
            >
              {<p.icon />}
              {p.name}
            </HeaderBox>
          ))}
        </ul>
        <HeaderBox bottom="dotted">
          <Button
            size="lg"
            className="size-10 rounded-full border-1 border-green-900 bg-white hover:bg-green-900 hover:text-white"
            variant="secondary"
          >
            <Bell />
          </Button>
          <Button
            size="icon"
            className="size-10 rounded-full border-1 border-green-900 bg-white hover:bg-green-900 hover:text-white"
            variant="secondary"
          >
            <Settings />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/shadcn.png"
            />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HeaderBox>
      </nav>
      <main className="m-5 mt-0 overflow-scroll border-2 border-green-900 rounded-b-2xl h-full bg-white shadow-xl">
        {pages.find((p) => p.name === page)?.component ? (
          createElement(pages.find((p) => p.name === page)!.component)
        ) : (
          <div className="text-center text-gray-500">Page not found</div>
        )}
      </main>
    </div>
  );
}
