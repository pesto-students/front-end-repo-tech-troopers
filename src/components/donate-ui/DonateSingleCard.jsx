import School from '../../assets/school.png';

const DonateSingleCard = ({
  imageURL,
  _id,
  calculatedAmount,
  amount,
  description,
}) => {
  return (
    <div className='flex flex-col items-center py-6'>
      <img src={imageURL} className='h-80' alt='' />
      <h2 className='text-dark pt-14 font-shippori text-2xl font-extrabold'>
        Donation : {calculatedAmount}/{amount}
      </h2>

      {/* Our Goal  */}
      <div className='max-w-xl'>
        <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
          Our Goal{' '}
        </h3>
        <p className='text-gray-dark text-xl font-normal'>{description}</p>
      </div>

      {/* Our Mission  */}
      <div className='max-w-xl'>
        <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
          Our Mission{' '}
        </h3>
        <p className='text-gray-dark text-xl font-normal'>
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
          Velit eius ab delectus temporibus.
        </p>
      </div>

      {/* Details about the cause  */}
      <div className='max-w-lg'>
        <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
          Details about the cause{' '}
        </h3>
        <p className='text-gray-dark text-xl font-normal'>
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
          Velit eius ab delectus temporibus.
        </p>
      </div>
    </div>
  );
};

export default DonateSingleCard;
