import React from "react";
import { Cloud } from "lucide-react";
const WeatherCard = ({
  weather,
  degree,
}: {
  weather: string;
  degree: number;
}) => {
  return (
    <div className="w-full bg-card-2 rounded-3xl relative p-3">
      <div className="flex items-center relative">
        <div className="flex justify-center items-center rounded-full bg-white w-10 h-10">
          <Cloud size={32} strokeWidth={3} className="text-black p-1" />
        </div>
        <h2 className="text-xl font-black mx-2">{degree}°</h2>
        <h2 className="text-xl font-bold">{weather}</h2>
      </div>
    </div>
  );
};

export default WeatherCard;
