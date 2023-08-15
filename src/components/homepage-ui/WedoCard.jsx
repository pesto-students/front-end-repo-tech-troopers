import React from 'react';

const WedoCard = ({ image, cardTitle, cardDesc }) => {
  return (
    <div className='flex flex-col items-center w-80 px-4 sm:w-56 md:w-60 lg:w-80 xl:w-96'>
      {/* Image */}
      <img src={image} alt={cardTitle} className='h-16 w-16' />
      {/* Card Bottom */}
      <div className='flex flex-col items-center justify-center'>
        <h3 className='text-dark font-shippori text-xl font-extrabold leading-6 pt-3 sm:text-lg md:text-xl'>
          {cardTitle}
        </h3>
        <p className='text-gray-dark py-4 text-center font-work font-normal -tracking-tight leading-6 text-lg sm:text-base md:text-lg'>
          {cardDesc}
        </p>
      </div>
    </div>
  );
};

export default WedoCard;
