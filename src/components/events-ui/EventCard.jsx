import React from 'react';
import { useNavigate } from 'react-router-dom';
// import Button from '../ui/Button/Button';
// import Education from '../../assets/events_education.png';
import getDayAndMonth from '../../utils/getDayAndMonth';

const EventCard = ({ imageURL, date, _id, title, description, ngoName }) => {
  const navigate = useNavigate();
  let { day, month } = getDayAndMonth(date);

  console.log({ day });

  const handleEventClick = () => {
    navigate(`${_id}`);
  };

  return (
    <div
      className='shadow-lg cursor-pointer relative'
      onClick={handleEventClick}
    >
      <div className='w-[500px] h-[300px] '>
        <img src={imageURL} className='object-cover' alt='' />
        <h3 className='absolute w-[116px] top-0 left-0 bg-primary text-white font-shippori text-center text-5xl px-4 py-5 z-10'>
          {day} <span className='text-white text-4xl'>{month}</span>
        </h3>
      </div>

      <div className='pt-6 pb-4 px-2'>
        <h4 className='text-gray-dark font-work mt-4 text-md font-normal'>
          Organized By:{' '}
          <span className='text-dark text-md font-medium font-work'>
            {ngoName}
          </span>
        </h4>
      </div>

      <div className=' border-b-2' />

      <div className='bg-white p-4 space-y-2'>
        <h5 className='text-primary font-bold font-shippori text-lg'>
          {title}
        </h5>

        <div className='flex items-start'>
          <p className='font-bold text-dark text-sm px-4  bg-white max-w-md font-shippori line-clamp-4'>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
