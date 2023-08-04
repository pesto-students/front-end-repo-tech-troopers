import blueCheck from '../../assets/blue_check.svg';
import Goal from './Goal';

const goalDummyData = [
  {
    id: 1,
    image: blueCheck,
    cardTitle: 'Food Donation',
  },
  {
    id: 2,
    image: blueCheck,
    cardTitle: 'Toys',
  },
  {
    id: 3,
    image: blueCheck,
    cardTitle: 'Money Donation',
  },
  {
    id: 4,
    image: blueCheck,
    cardTitle: 'Education/Books',
  },
  {
    id: 5,
    image: blueCheck,
    cardTitle: 'Clothing',
  },
  {
    id: 6,
    image: blueCheck,
    cardTitle: 'Sports Equipment',
  },
];

const Goals = () => {
  return (
    <div className='bg-gray-100 p-4 md:px-10 h-fit md:py-14 rounded mt-4 md:mt-0'>
      <div className='flex items-center space-x-10'>
        <div className='flex flex-col space-y-3'>
          {goalDummyData.slice(0, 3).map((goal) => (
            <Goal {...goal} key={goal.id} />
          ))}
        </div>
        <div className='flex flex-col space-y-3'>
          {goalDummyData.slice(3, 6).map((goal) => (
            <Goal {...goal} key={goal.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
