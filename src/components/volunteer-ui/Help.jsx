import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';

const helpDummyData = [
  {
    id: 1,
    cardTitle: 'Create a personal profile',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 2,
    cardTitle: 'Add your organization',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 3,
    cardTitle: 'Add volunteer opportunities',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 4,
    cardTitle: 'You are ready to recruit',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
];

const Help = ({ volunteers, handleToggleInterest, buttonText }) => {
  const handleClick = () => {
    handleToggleInterest();
  };

  return (
    <section className='flex items-center bg-[#F1EEEC] pt-28 pb-28 justify-center mx-auto'>
      {/* LEFT */}
      <div className='w-[900px]'>
        <SectionHeading
          heading='Help The People With us'
          title='Need Your Heartful Help'
        />
        <p className='text-gray-dark font-work text-xl max-w-2xl font-normal pt-6'>
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. Bring to the table win-win survival
          strategies to proactive domination. is on the runway heading towards a
          streamlined cloud solution. User gener eal-time will have multiple
          touch points for offshoring
        </p>

        {helpDummyData.map((item, id) => (
          <div key={id} className='flex space-x-7 pt-10'>
            <div className='h-20 w-20 rounded-full font-shippori text-2xl font-extrabold flex items-center justify-center text-center bg-primary text-white'>
              <span>0</span>
              {item.id}
            </div>
            <div className='py-2 max-w-lg'>
              <h3 className='text-dark font-shippori text-2xl font-extrabold'>
                {item.cardTitle}
              </h3>
              <p className='text-gray-dark font-work text-xl font-normal'>
                {item.cardDesc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* section right */}
      <div className='border text-center bg-white pb-6 pt-11'>
        <h2 className='text-primary pt-4 font-work text-xl font-normal'>
          Become a volunteer with us today!
        </h2>
        <div className='flex w-[600px] bg-white pt-5 md:pt-10 flex-col items-center space-y-5'>
          <h2 className='text-dark font-shippori text-xl  '>
            <span className='text-primary'> Title: </span>{' '}
            {volunteers && volunteers.title}
          </h2>
          <h2 className='text-dark font-shippori text-xl '>
            <span className='text-primary'> Category: </span>{' '}
            {volunteers && volunteers.category}
          </h2>
          <h2 className='text-dark font-shippori text-xl '>
            <span className='text-primary '> Description: </span>
            {volunteers && volunteers.description}
          </h2>
          <Button text={buttonText} bgColor='#2E4049' onClick={handleClick} />
        </div>
      </div>
    </section>
  );
};

export default Help;
