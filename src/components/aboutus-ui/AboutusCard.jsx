import Water from '../../assets/water.png';
import Quotes from '../../assets/quotes.svg';

const cardDummyData = [
  {
    id: 1,
    image: Water,
    cardTitle: 'Solutions to Help People in Need and Save the Planet',
    cardDesc:
      '   Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque reiciendis. Qui beatae vel magnam repudiandae ipsum repella repudiandae. Voluptate at dolores ut dolor sint occaecati similique.',
  },
  {
    id: 2,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
];

const AboutusCard = () => {
  return (
    <section className="max-w-4xl mx-auto">
      {/* section Top */}
      <div className="flex py-14">
        <div className="h-72 w-72">
          <img src={Water} alt="" />
          <div className="h-20 w-80 flex items-center  px-2 space-x-2 bg-dark">
            <img src={Quotes} className="h-10 w-10" alt="" />
            <h3 className="text-white ">
              No act of kindness, no matter how small, is ever wasted
            </h3>
          </div>
        </div>
        <div>
          <h3 className="text-primary font-ellen">About Us</h3>
          <h5>Solutions to Help People in Need and Save the Planet</h5>
          <p>
            {' '}
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repella
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutusCard;
