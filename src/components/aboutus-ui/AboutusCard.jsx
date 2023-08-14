import Water from '../../assets/water.png';
import Quotes from '../../assets/quotes-white.svg';
import SectionHeading from '../sectionHeading/SectionHeading';

const AboutusCard = () => {
  return (
    <section className="flex items-center space-x-6">
      <div className="max-w-lg flex flex-col items-end">
        <img src={Water} alt="" className="h-80 w-96" />
        <div className="bg-dark text-white p-6">
          <p className="flex items-center space-x-2 text-white text-xl font-shippori">
            <img src={Quotes} className="h-10 w-10" alt="" />
            <span>
              No act of kindness, no matter how small, is ever wasted.
            </span>
          </p>
        </div>
      </div>

      <div className="max-w-lg space-y-4">
        <SectionHeading
          heading="About Us"
          title="Solutions to Help People in Need and Save the Planet"
        />
        <p className="text-gray-dark text-xl">
          At Brighter Days, we support, characterize and direct the effort and
          interests of various development activities, united by a common goal
          to remove poverty. We are deeply committed to influence governments
          and policy-makers, improve the skills of people in the sector, enhance
          organizational capability, and deliver opportunities to exchange
          information, knowledge, and expertise.
        </p>
      </div>
    </section>
  );
};

export default AboutusCard;
