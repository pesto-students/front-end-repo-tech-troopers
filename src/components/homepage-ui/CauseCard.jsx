import React from 'react';
import Button from '../ui/Button/Button';

const CauseCard = ({ amount, description, imageURL, name, _id, onClick }) => {
  const handleClick = () => {
    onClick(_id);
  };

  return (
    <div
      onClick={handleClick}
      className='w-[100%] sm:w-[437px] cursor-pointerh-[60%] font-shippori space-y-5 shadow-xl pb-1 mr-6'
    >
      <img
        src={imageURL}
        alt={name}
        className='h-[260px] sm:h-[360px] object-contain w-full'
      />

      <div className='flex flex-col space-y-2 mx-6'>
        <h3 className='font-bold text-xl sm:text-lg text-dark'>{name}</h3>
        {/* <progress value={amount} max='100' className='h-1 rounded-lg w-full' /> */}

        <div className='flex items-center justify-between'>
          <p className='text-dark text-sm sm:text-lg font-bold'>
            Goal - {amount}
          </p>
          <p className='text-primary text-base sm:text-lg font-bold'>
            Raised - 1000
          </p>
        </div>

        <Button text='DONATE' />
      </div>
    </div>
  );
};

export default CauseCard;
