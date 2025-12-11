import React from "react";

const Blue = ({ Colors }) => {
  return (
    <div className="flex flex-row flex-wrap gap-4 w-7xl m-auto">
      {Colors.map((item, index) => (
        <div key={index} className={`w-[200px] h-[200px] bg-${item}-600`}></div>
      ))}
    </div>
  );
};

export default Blue;