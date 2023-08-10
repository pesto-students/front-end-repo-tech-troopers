import React from 'react';

const Banner = () => {
  return (
    <div className="bg-events-pattern relative w-screen h-[25vh]  md:h-screen  bg-no-repeat sm:bg-cover md:bg-cover bg-contain">
      <div className="absolute space-y-2 md:space-y-3 md:max-w-5xl max-w-[300px] left-4 top-4 md:left-[20%] md:top-[30%] ">
        <h3 className=" px-4 font-ellen md:px-16 py-1 text-white tracking-wider  md:tracking-[5px]  text-[10px] md:text-5xl font-medium">
          Our Events
        </h3>
      </div>
    </div>
  );
};

export default Banner;
