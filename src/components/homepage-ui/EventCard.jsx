import React from 'react';
import Button from '../ui/Button/Button';
import Education from '../../assets/events_education.png';
import Hand from '../../assets/hour_hand.png';

const EventCard = ({ image, cardTitle, cardDesc }) => {
  return (
    <div className="shadow-lg mt-40 mx-40 relative">
      <div className="w-[600px] h-[350px] ">
        <img src={Education} className="object-cover" alt="" />
        <h3 className="absolute w-[116px] top-0 left-0 bg-primary text-white font-shippori text-center text-5xl px-4 py-5 z-10">
          18 <span className="text-white text-4xl">June</span>
        </h3>
      </div>

      <div className="flex items-center justify-evenly">
        <div className="pt-6 pb-4 px-2">
          <h4 className="text-gray-dark font-work text-xl font-normal">
            Organized By:{' '}
            <span className="text-dark text-xl font-medium font-work">
              Jane Doe
            </span>
          </h4>
        </div>
        <div className="flex items-center space-x-4 ">
          <div className="h-6 w-6 flex items-center justify-center rounded-full border border-primary bg-transparent">
            <img src={Hand} alt="" />
          </div>
          <span className="text-dark text-xl font-medium font-work">
            10:00 AM - 18:00 PM, Everyday
          </span>
        </div>
      </div>

      <div className=" border-b-2" />

      <div className="bg-white p-4 space-y-2">
        <h5 className="text-primary font-bold font-shippori text-2xl">
          Education for Poor Children
        </h5>

        <div className="flex items-center justify-between">
          <p className="font-bold text-dark text-xl p-4  bg-white max-w-md font-shippori">
            There are many varieations of passages of injected Lorem Ipsum
            available,but the majority have.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
