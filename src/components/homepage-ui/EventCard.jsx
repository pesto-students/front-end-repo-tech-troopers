import React from 'react';
import Button from '../ui/Button/Button';
import Education from '../../assets/events_education.png';
import Hand from '../../assets/hour_hand.png';
import getDayAndMonth from '../../utils/getDayAndMonth';

const EventCard = ({ imageURL, date, _id, title, description, ngoName }) => {
  let { day, month } = getDayAndMonth(date);
  console.log({ day });

  return (
    <div className='max-w-xl mb-4 md:mb-0'>
      <div className='relative'>
        <img src={imageURL} className='object-cover' alt='' />
        <h3 className='absolute w-20 md:w-[116px] top-0 left-0 bg-primary text-white font-shippori text-center text-3xl md:text-5xl px-4 py-5 z-10'>
          {day} <span className='text-white text-xl md:text-4xl'>{month}</span>
        </h3>
      </div>

      <div className='flex items-center space-x-4 my-4 text-md md:text-lg'>
        <p className='text-gray-dark font-work font-normal'>
          Organized By:{' '}
          <span className='text-dark font-medium font-work'>{ngoName}</span>
        </p>

        <div className='flex items-center space-x-1'>
          <div className='h-6 w-6 flex items-center justify-center rounded-full border border-primary'>
            <img src={Hand} alt='' />
          </div>
          <span className='text-dark font-medium font-work'>
            10:00 Am to 8:00 Pm Everyday
          </span>
        </div>
      </div>

      <hr className='border-b border-gray-dark' />

      <div className='flex flex-col space-y-2 mt-2'>
        <h5 className='text-dark font-extrabold font-shippori text-xl md:text-3xl'>
          {title}
        </h5>
        <p className='text-gray-dark text-sm md:text-lg bg-white font-shippori line-clamp-2'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
