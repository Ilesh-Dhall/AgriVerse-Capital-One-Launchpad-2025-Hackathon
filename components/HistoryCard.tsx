import React from "react";

const HistoryCard = ({
  histoy,
}: {
  histoy: { message: string; response: string }[];
}) => {
  return (
    <div className="flex flex-col gap-2 w-full bg-card-5 overflow-scroll rounded-3xl relative p-3">
      {histoy.map((item, index) => (
        <div key={index} className="bg-secondary p-4 rounded-xl">
          <p className="font-semibold">Q -{item.message}</p>
          <p className="text-gray-600">A - {item.response}...</p>
        </div>
      ))}
    </div>
  );
};

export default HistoryCard;
