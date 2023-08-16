import React from 'react';
import Hero from '../../assets/background_home.png';
import Button from '../ui/Button/Button';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className="bg-hero-pattern relative w-screen h-[25vh]  md:h-screen  bg-no-repeat sm:bg-cover md:bg-cover bg-contain">
      <div className="absolute space-y-2 md:space-y-3 md:max-w-5xl max-w-[300px] left-4 top-4 md:left-[20%] md:top-[20%] ">
        <h1 className=" font-shippori text-2xl md:text-9xl font-extrabold text-white">
          Being a Life Saver For Someone.
        </h1>

        <div className='flex items-center'>
          <div className='w-3 h-3 md:w-6 md:h-6 rounded-full bg-white' />
          <div className='h-[2px] w-10 md:w-80 bg-white' />
          <div className='border border-white rounded-full px-4  md:px-16 py-1 text-white tracking-wider  md:tracking-[5px] font-work text-[10px] md:text-lg font-medium'>
            BRIGHTER DAYS
          </div>
        </div>

        <div className='flex items-center space-x-3'>
          <Link to={`/donate`}>
            <Button bgColor='#FF6D6D' text='DONATE' />
          </Link>
          <Link to={`/volunteer`}>
            <Button text='VOLUNTEER' bgColor='#fff' textColor='#000' />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
