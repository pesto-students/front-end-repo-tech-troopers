import Tags from './Tags';
import Flower from '../../assets/flower.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const cardDummyData = [
  {
    id: 1,
    cardTitle: 'Our Goal',
    cardDesc:
      '   Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repella repudiandae. Voluptate at dolores ut dolor sint occaecati similique.',
  },
  {
    id: 2,
    image: '',
    cardTitle: 'Our Mission',
    cardDesc:
      '   Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repella repudiandae. Voluptate at dolores ut dolor sint occaecati similique.',
  },
];
const OurGoal = () => {
  return (
    <section className='flex items-center justify-center space-x-16'>
      {/* Card Left */}
      <div className='max-w-lg space-y-3 my-10 ml-10'>
        <h3 className='font-shippori font-extrabold text-4xl text-dark'>
          Our Goal
        </h3>
        <p className='text-gray-dark text-lg font-work'>
          The holistic development of every person would contribute to the
          overall health of society and promote social wellbeing. This would
          make us realize the philosophy Vasudhaiva Kutumbakam -TheWorld Is One
          Family.
        </p>
        <Tags />
        <p className='text-gray-dark text-lg font-work'>
          The socioeconomic growth and wellbeing of people are so
          interconnected, that it is not feasible to ignore any one of them.
          Hence, we have teamed with a wide cross section of people to bring
          about a transformation in the rural environment.
        </p>
      </div>

      {/* Card Right */}
      <div className='max-w-lg space-y-3 my-10 ml-10'>
        <h3 className='font-shippori font-extrabold text-4xl text-dark'>
          Our Mission
        </h3>
        <p className='text-gray-dark text-xl font-work'>
          Brighter Days is a national level development organization currently
          benefitting more than 1000 underprivileged children & youth directly
          through our welfare projects through initiatives in education,
          healthcare, livelihood, women empowerment.
        </p>
        <div className='relative'>
          <LazyLoadImage
            src='https://res.cloudinary.com/dhuaafpob/image/upload/v1692187463/flower_geirm4.png'
            alt=''
            className='h-80 w-96'
          />
          <p className='text-dark absolute -bottom-16 font-shippori bg-secondary p-4 flex flex-col items-center max-w-xs ml-5'>
            <span className='text-7xl'>20000+</span>
            <span>Thousand People Helped</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
