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
    image:
      'https://res.cloudinary.com/dhuaafpob/image/upload/v1692186757/medical-help_rnpnru.png',
    cardTitle: 'Medicine Help',
    cardDesc: 'We are constantly aspiring for a better quality of life.',
  },
  {
    id: 2,
    image:
      'https://res.cloudinary.com/dhuaafpob/image/upload/v1692186758/oil-massage_gxvb6a.png',
    cardTitle: 'Water Delivery',
    cardDesc:
      'A commitment to convert passion into protection and ensure clean water.',
  },
  {
    id: 3,
    image:
      'https://res.cloudinary.com/dhuaafpob/image/upload/v1692186758/day-care_isozvn.png',
    cardTitle: 'We care about',
    cardDesc:
      'Ensuring children receive timely vaccinations and sufficient nutrition.',
  },
  {
    id: 4,
    image: Food,
    cardTitle: 'Food Delivery',
    cardDesc:
      'We provide immediate food for today and empower families to produce their own food for tomorrow.',
  },
  {
    id: 5,
    image:
      'https://res.cloudinary.com/dhuaafpob/image/upload/v1692186757/food-bar_kdrhxa.png',
    cardTitle: 'Spread The World',
    cardDesc:
      'To bring the members closer together for the purpose of teaching a simpler, natural way of life.',
  },
  {
    id: 6,
    image:
      'https://res.cloudinary.com/dhuaafpob/image/upload/v1692186757/contract_een04b.png',
    cardTitle: 'Education',
    cardDesc:
      'The objective of empowering underprivileged children by providing education, and wellness support.',
  },
];

const Wedo = () => {
  return (
    <section className='px-4 py-8  sm:px-8 md:px-16 lg:px-24 xl:px-32'>
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
