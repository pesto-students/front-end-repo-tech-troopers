import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import Placeholder from '../../assets/placeholder.png';
import Hand from '../../assets/hand.svg';
import TeamCard from './TeamCard';
import { Link } from 'react-router-dom';

const teamDummyData = [
  {
    id: 1,
    image: Placeholder,
    cardTitle: 'Jane Doe',
  },
  {
    id: 2,
    image: Placeholder,
    cardTitle: 'Jane Doe',
  },
  {
    id: 3,
    image: Placeholder,
    cardTitle: 'Jane Doe',
  },
];

const Team = ({ image, cardTitle }) => {
  return (
    <section className="mt-10 py-10 bg-gray-100">
      <div className="text-center">
        <SectionHeading heading="Team" title="Meet Our Heroes" />
      </div>

      <div className="flex flex-col md:flex-row items-start mt-10 justify-center gap-5">
        <div className="flex space-x-2">
          {teamDummyData.map((card) => (
            <TeamCard {...card} key={card.id} />
          ))}
        </div>

        <div className="flex flex-col items-center text-center bg-secondary p-4 h-fit md:h-96 w-full md:w-72">
          <div className="bg-dark rounded-full flex items-center justify-center p-2">
            <img className="h-10 w-10 md:h-16 md:w-16" src={Hand} alt="" />
          </div>
          <h2 className="font-shippori text-lg md:text-4xl font-extrabold leading-1 md:pt-2">
            Become a Volunteer
          </h2>
          <p className="pb-2 md:py-5 font-work text-xs md:text-xl font-normal leading-6">
            Volunteer to serve, spread some smiles!
          </p>
          <Link to="/volunteer">
            <Button text="JOIN US TODAY" bgColor="#2E4049" textColor="#fff" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Team;
