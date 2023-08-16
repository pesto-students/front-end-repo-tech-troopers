import React from 'react';

const Goal = ({ image, cardTitle }) => {
  return (
    <div className='flex items-start space-x-3'>
      <img src={image} alt='' className='h-4 w-4 md:h-6 md:w-6' />
      <p className='font-work font-medium whitespace-nowrap text-md md:text-xl text-gray-dark'>
        {cardTitle}
      </p>
    </div>
  );
};

export default Goal;
