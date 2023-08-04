import Help from '../../assets/medical-help.png';
import Massage from '../../assets/oil-massage.png';
import Care from '../../assets/day-care.png';
import Food from '../../assets/food-bar.png';
import Geo from '../../assets/geography.png';
import Contract from '../../assets/contract.png';
import WedoCard from './WedoCard';
import SectionHeading from '../sectionHeading/SectionHeading';

const wedoCardData = [
  {
    id: 1,
    image: Help,
    cardTitle: 'Medicine Help',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
  {
    id: 2,
    image: Massage,
    cardTitle: 'Water Delivery',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
  {
    id: 3,
    image: Care,
    cardTitle: 'We care about',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
  {
    id: 4,
    image: Food,
    cardTitle: 'Food Delivery',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
  {
    id: 5,
    image: Geo,
    cardTitle: 'Spread The World',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
  {
    id: 6,
    image: Contract,
    cardTitle: 'Education',
    cardDesc: 'Lorem Ipsum is simply dummy text of the printin typesetting',
  },
];

const Wedo = () => {
  return (
    <section className='px-4 py-8 sm:px-8 md:px-12 lg:px-24 xl:px-32'>
      {/* Top section */}
      <div className='text-center'>
        <SectionHeading
          heading='What we do'
          title='We do it for People in Need'
        />
      </div>

      {/* Bottom section */}
      <div className='flex flex-wrap gap-4 mt-5 sm:gap-6 md:gap-8 lg:gap-10'>
        {wedoCardData.slice(0, 3).map((card) => (
          <WedoCard {...card} key={card.id} />
        ))}
      </div>
      <div className='flex flex-wrap py-6 gap-4 mt-5 sm:gap-6 md:gap-8 lg:gap-10'>
        {wedoCardData.slice(3, 6).map((card) => (
          <WedoCard {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
};

export default Wedo;
