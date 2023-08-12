import Tags from './Tags';
import Water from '../../assets/water.png';

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
    <section className="flex space-x-3">
      {/* Card Left */}
      <div className="max-w-lg space-y-3 my-10 ml-10">
        <h3 className="font-shippori font-extrabold text-4xl text-dark">
          Our Goal
        </h3>
        <p className="text-gray-dark text-xl font-work">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repella
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
        </p>
        <Tags />
        <p className="text-gray-dark text-xl font-work">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repella
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
        </p>
      </div>

      {/* Card Right */}
      <div className="max-w-lg space-y-3 my-10 ml-10">
        <h3 className="font-shippori font-extrabold text-4xl text-dark">
          Our Mission
        </h3>
        <p className="text-gray-dark text-xl font-work">
          Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam repudiandae ipsum repella
          repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
        </p>
        <div className="relative">
          <img src={Water} alt="" className="h-80 w-96" />
          <p className="text-dark absolute -bottom-16 font-shippori bg-secondary p-4 flex flex-col items-center max-w-xs ml-5">
            <span className="text-7xl">20000+</span>
            <span>Thousand People Helped</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default OurGoal;
