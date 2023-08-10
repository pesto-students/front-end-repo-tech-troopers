import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button/Button';

const EventCard = ({ image, id, cardTitle, cardDesc }) => {
  const navigate = useNavigate();

  const handleEventClick = () => {
    navigate(`${id}`);
  };

  return (
    <div
      className="shadow-lg cursor-pointer relative"
      onClick={handleEventClick}
    >
      <div className="w-[500px] h-[300px] ">
        <img src={image} className="object-cover" alt="" />
        <h3 className="absolute w-[116px] top-0 left-0 bg-primary text-white font-shippori text-center text-5xl px-4 py-5 z-10">
          18 <span className="text-white text-4xl">June</span>
        </h3>
      </div>

      <div className="pt-6 pb-4 px-2">
        <h4 className="text-gray-dark font-work text-xl font-normal">
          Organized By:{' '}
          <span className="text-dark text-xl font-medium font-work">
            Jane Doe
          </span>
        </h4>
      </div>

      <div className=" border-b-2" />

      <div className="bg-white p-4 space-y-2">
        <h5 className="text-primary font-bold font-shippori text-2xl">
          {cardTitle}
        </h5>

        <div className="flex items-center justify-between">
          <p className="font-bold text-dark text-xl p-4  bg-white max-w-md font-shippori">
            {cardDesc}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
