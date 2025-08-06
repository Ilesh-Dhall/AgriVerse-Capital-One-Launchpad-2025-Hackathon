import WeatherCard from "@/components/WeatherCard";
import ProfileCard from "@/components/ProfileCard";
import CropCard from "@/components/CropCard";
import { Andika } from "next/font/google";
import ChatCard from "@/components/ChatCard";
import HistoryCard from "@/components/HistoryCard";
import Seperator from "@/components/ui/seperator";

const a = Andika({ weight: "700", subsets: ["latin"] });

const Crops = [
  { name: "Wheat", heath: 2 },
  { name: "Rice", heath: 1 },
  { name: "Corn", heath: 3 },
];

const chatHistory = [
  {
    message: "What is the best time to plant wheat?",
    response: "Spring is ideal.",
  },
  {
    message: "How to care for rice crops?",
    response: "Keep them well-watered.",
  },
  {
    message: "What are the benefits of corn?",
    response: "High in fiber and vitamins.",
  },
  {
    message: "How to improve soil health?",
    response: "Use organic fertilizers.",
  },
];

export default function Home() {
  return (
    <div className={a.className + " flex flex-col p-5 gap-3"}>
      <ProfileCard name="illesh" />
      <WeatherCard weather="Cloudy" degree={22} />
      <CropCard crops={Crops} />
      <Seperator heading="Ask Question" />
      <ChatCard />
      <Seperator heading="History" />
      <HistoryCard histoy={chatHistory} />
    </div>
  );
}
