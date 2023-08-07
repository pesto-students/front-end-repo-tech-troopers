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
    <div className="shadow-lg">
      <div className="w-[400px] h-[350px]">
        <img src={image} className="object-contain" alt="" />
      </div>

      <div className="bg-white p-4 space-y-4">
        <h5 className="text-dark font-bold font-shippori text-2xl max-w-xs">
          {cardTitle}
        </h5>

        <div className="flex items-center justify-between">
          <p className="font-bold text-dark text-xl p-4 rounded-full bg-gray-100 font-shippori">
            Donation: {raisedAmt}/{goalAmt}
          </p>
          <Button bgColor="#2E4049" text="DONATE" />
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
