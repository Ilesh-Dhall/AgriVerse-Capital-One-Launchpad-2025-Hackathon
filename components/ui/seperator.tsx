import React from "react";

const Seperator = ({ heading }: { heading: string }) => {
  return (
    <div className="flex w-full items-center justify-center gap-1">
      <h1 className="text-lg">{heading}</h1>
      <div className="translate-y-0.5 border-1 border-dashed border-foreground grow h-0"></div>
    </div>
  );
};

export default Seperator;
