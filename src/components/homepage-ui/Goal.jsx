import React from "react";

const Goal = ({ image, cardTitle }) => {
  return (
    <div className="flex items-center gap-3">
      <img src={image} alt="" className="h-6 w-6" />
      <h3 className="font-work font-medium leading-10 text-xl text-gray-dark">
        {cardTitle}
      </h3>
    </div>
  );
};

export default Goal;
