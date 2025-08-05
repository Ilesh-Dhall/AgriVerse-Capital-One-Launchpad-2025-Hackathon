import Data from "@/components/Data";
import ProfileCard from "@/components/ProfileCard";
import { Andika } from "next/font/google";

const a = Andika({ weight: "700", subsets: ["latin"] });

export default function Home() {
  return (
    <div className={a.className + " flex flex-col p-5 gap-3"}>
      <ProfileCard name="Dishu" />
      <Data weather="Cloudy" />
      <h1>Start Chat</h1>
      <h1>History</h1>
    </div>
  );
}
