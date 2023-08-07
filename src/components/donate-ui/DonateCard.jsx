import React from 'react';
import Button from '../ui/Button/Button';

const DonateCard = ({
  image,
  cardTitle,
  raisedAmt,
  goalAmt,
  percentRaised,
}) => {
  return (
    <div className='w-[100%]  sm:w-[437px] font-shippori space-y-5 shadow-xl pb-3'>
      <img
        src={image}
        alt={cardTitle}
        className='h-[260px] sm:h-[360px] object-cover w-full'
      />

      <div className='flex flex-col space-y-3 mx-6'>
        <h3 className='font-bold text-xl sm:text-2xl text-dark'>{cardTitle}</h3>

        <div className='flex items-center justify-between'>
          <p className='bg-[#E8E8E8] py-5 px-8 rounded-3xl '>
            Donation: Rs 5,000/12,000
          </p>
          <Button text='DISCOVER' bgColor='#2E4049' textColor='#000' />
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
