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
    <div className='container bg-gray-100 -ml-60 w-[550px] h-64 mx-auto px-10 py-14 sm:px-6 lg:px-8 mt-10'>
      <div className='flex flex-col sm:flex-row gap-8 justify-center'>
        <div className='flex flex-col'>
          {goalDummyData.slice(0, 3).map((goal) => (
            <Goal {...goal} key={goal.id} />
          ))}
        </div>
        <div className='flex flex-col'>
          {goalDummyData.slice(3, 6).map((goal) => (
            <Goal {...goal} key={goal.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Goals;
