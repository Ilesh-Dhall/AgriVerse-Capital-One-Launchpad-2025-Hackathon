"use client";
import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

const ProfileCard = ({ name }: { name: string }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex items-center justify-between gap-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>{name.split(" ").map((a) => a[0])}</AvatarFallback>
        </Avatar>
        <h1 className="text-2xl">Welcome, {name}</h1>
      </div>
      <button
        className="m-0 p-0"
        onClick={() =>
          theme === "light" ? setTheme("dark") : setTheme("light")
        }
      >
        {theme == "dark" && <Sun size={30} strokeWidth={2.5} />}
        {theme != "dark" && <Moon size={30} strokeWidth={2.5} />}
      </button>
    </div>
  );
};

export default ProfileCard;
