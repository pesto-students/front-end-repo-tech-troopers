import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import Goals from './Goals';
import { Link } from 'react-router-dom';

const Aboutus = () => {
  return (
    <section className="flex flex-col md:flex-row m-4 md:mt-36 md:mx-36 overflow-x-hidden justify-around ">
      {/* Section left */}
      <div className="">
        <div className="leading-10 md:w-72 pb-1">
          <SectionHeading
            heading="About Us"
            title="Help People, Our Main Goals"
          />
        </div>

        {/* Section bottom */}
        <div className="flex flex-col w-3/4 text-md md:text-xl">
          <p className="pb-7 text-gray-dark font-work  font-medium leading-6">
            The management of Brighter Days is deeply committed to providing the
            basic requirements of life to every human being, and facilitate the
            development of overall potential of people physically, mentally, and
            spiritually.
          </p>
          <p className="pb-7 text-gray-dark font-work font-medium leading-6">
            Brighter Days Foundation believes in the spirit of partnership and
            has joined hands with community organization, civic bodies,
            corporate, educational and development institutions, as well as
            government to strengthen its cause and ameliorate the situation of
            underprivileged children and youths in India.
          </p>
          <Link to="/aboutus">
            <Button text="MORE ABOUT" bgColor="#FF6D6D" />
          </Link>
        </div>
      </div>

      {/* Section Right */}
      <Goals />
    </section>
  );
};

export default Aboutus;
