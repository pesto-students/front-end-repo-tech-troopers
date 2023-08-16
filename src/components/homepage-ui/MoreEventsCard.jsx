import React from 'react';
import getDayAndMonth from '../../utils/getDayAndMonth';

const MoreEventsCard = ({
  imageURL,
  date,
  _id,
  title,
  description,
  ngoName,
}) => {
  let { day, month } = getDayAndMonth(date);

  return (
    <div className='flex space-x-4 cursor-pointer'>
      <div className='text-white text-center font-shippori font-extrabold bg-dark p-2 md:p-4'>
        <p className='text-2xl md:text-5xl'>{day}</p>
        <p className='text-lg md:text-4xl'>{month}</p>
      </div>

      <div className='flex flex-col space-y-2'>
        <p className='text-gray-dark text-md md:text-xl font-work'>
          Organized By:{' '}
          <span className='text-primary font-medium'>{ngoName}</span>
        </p>
        <p className='text-lg md:text-2xl font-bold font-shippori text-dark'>
          {title}
        </p>
        <p className='text-gray-dark text-sm md:text-md font-work line-clamp-2'>
          {description}
        </p>
      </div>
    </div>
  );
};

export default MoreEventsCard;
