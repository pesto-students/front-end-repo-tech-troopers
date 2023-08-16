import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../ui/Button/Button';
import { useNavigate } from 'react-router-dom';

const DonateCard = ({
  _id,
  imageURL,
  name,
  description,
  amount,
  calculatedAmount,
}) => {
  const navigate = useNavigate();
  const role = localStorage.getItem('userRole');
  const handleEventClick = () => {
    navigate(`${_id}`);
  };

  return (
    <div className='shadow-lg'>
      <div className='w-[400px] '>
        <img src={imageURL} className='object-contain' alt='' />
      </div>

      <div className='bg-white p-4 space-y-4'>
        <h5 className='text-dark font-bold font-shippori text-md max-w-xs'>
          {name}
        </h5>

        <div className='flex items-center space-x-3'>
          <p className='font-bold text-dark text-lg p-4 rounded-full bg-gray-100 font-shippori'>
            Donation: {calculatedAmount}/{amount}
          </p>
          {role === 'USER' && (
            <Link to={`/donate/${_id}`}>
              <Button bgColor='#2E4049' text='DONATE' />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default DonateCard;
