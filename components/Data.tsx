import React from "react";
import { Cloud } from "lucide-react";
const Data = ({ weather }: { weather: string }) => {
  return (
    <div className="w-full bg-[#D9C9E8] rounded-3xl relative">
      <div className="flex items-center relative">
        <div className="flex justify-center items-center p-2 rounded-full bg-white w-10 h-10 m-2">
          <Cloud size={32} strokeWidth={3} />
        </div>
        <h2 className="text-xl font-bold">{weather}</h2>
        <p className="text-sm text-muted">in Dehradun</p>
      </div>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure error
        voluptatum consequuntur sint id architecto itaque? Nam provident
        molestias dicta blanditiis error saepe excepturi? Nisi, libero autem?
        Voluptatem, officiis porro.
      </p>
    </div>
  );
};

export default Data;
