import React from "react";

type cropType = {
  name: string;
  heath: number;
};

const cropIcons = ({ name }: { name: string }) => {
  switch (name) {
    case "Wheat":
      return "🌾";
    case "Rice":
      return "🍚";
    case "Corn":
      return "🌽";
    default:
      return "🌱";
  }
};

const Crop = ({ crop }: { crop: cropType }) => {
  return (
    <div
      className={`flex flex-col items-center bg-white justify-between p-2 rounded-2xl max-h-10`}
    >
      <div className="flex">
        {cropIcons({ name: crop.name })}
        <h3 className="ml-2">{crop.name}</h3>
      </div>
      <p>Healthy</p>
    </div>
  );
};

const CropCard = ({ crops }: { crops: cropType[] }) => {
  return (
    <div className="flex flex-col gap-2 w-full bg-card-3 rounded-3xl relative p-2">
      <h1 className="pt-2 pl-2">See Health of your crops</h1>
      <div className="flex gap-2 overflow-y-scroll">
        {crops.map((crop, index) => (
          <Crop key={index} crop={crop} />
        ))}
      </div>
    </div>
  );
};

export default CropCard;
