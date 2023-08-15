import React from 'react';

const MoreEventsCard = () => {
  return (
    <div className="flex space-x-4">
      <div className="text-white text-center font-shippori font-extrabold bg-dark p-2 md:p-4">
        <p className="text-2xl md:text-6xl">18</p>
        <p className="text-lg md:text-2xl">June</p>
      </div>

      <div className="flex flex-col space-y-2">
        <p className="text-gray-dark text-md md:text-xl font-work">
          Organized By:{' '}
          <span className="text-primary font-medium">Jane Doe</span>
        </p>
        <p className="text-lg md:text-2xl font-bold font-shippori text-dark">
          Healthy Food for Growing
        </p>
        <p className="text-gray-dark text-sm md:text-xl font-work">
          Lorem Ipsum is simply dummy text of the printin typesetting
        </p>
      </div>
    </div>
  );
};

export default MoreEventsCard;
