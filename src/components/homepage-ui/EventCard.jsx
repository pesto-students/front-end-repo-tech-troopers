import React from 'react';
import Button from '../ui/Button/Button';
import Education from '../../assets/events_education.png';
import Hand from '../../assets/hour_hand.png';

const EventCard = ({ image, cardTitle, cardDesc }) => {
  return (
    <div className="max-w-xl">
      <div className="relative">
        <img src={Education} className="object-cover" alt="" />
        <h3 className="absolute w-[116px] top-0 left-0 bg-primary text-white font-shippori text-center text-5xl px-4 py-5 z-10">
          18 <span className="text-white text-4xl">June</span>
        </h3>
      </div>

      <div className="flex items-center space-x-4 my-4 text-lg">
        <p className="text-gray-dark font-work font-normal">
          Organized By:{' '}
          <span className="text-dark font-medium font-work">Jane Doe</span>
        </p>

        <div className="flex items-center space-x-1">
          <div className="h-6 w-6 flex items-center justify-center rounded-full bg-transparent">
            <img src={Hand} alt="" />
          </div>
          <span className="text-dark font-medium font-work">
            10:00 AM - 18:00 PM, Everyday
          </span>
        </div>
      </div>

      <hr className="border-b border-gray-dark" />

      <div className="flex flex-col space-y-2 mt-2">
        <h5 className="text-dark font-extrabold font-shippori text-3xl">
          Education for Poor Children
        </h5>
        <p className="text-gray-dark text-lg bg-white font-shippori">
          There are many varieations of passages of injected Lorem Ipsum
          available,but the majority have.
        </p>
      </div>
    </div>
  );
};

export default EventCard;
