import SectionHeading from '../sectionHeading/SectionHeading';
import Children from '../../assets/children.png';
import Button from '../ui/Button/Button';
import ResourceForm from './ResourceForm';
import { Link } from 'react-router-dom';

const Community = () => {
  return (
    <div className="bg-resource-pattern text-white flex items-center justify-center mx-auto relative w-screen h-3/4 p-4 bg-no-repeat bg-cover">
      <div className="flex flex-col max-w-2xl space-y-5">
        <div>
          <h5 className="font-ellen font-normal text-2xl md:text-4xl">
            How We Help
          </h5>
          <h3 className="font-rubik font-extrabold text-4xl md:text-[40px]">
            Join The Community To Give Education For Children
          </h3>
        </div>
        <p className="text-lg font-work font-normal text-gray-100">
          Change comes with the rolling wheels where you move your thought from
          present situation to a paradise. With such a motive we set forth to
          bring a new kind of education to the underprivileged.
        </p>
        <img className="bg-contain" src={Children} alt="" />
        <Link to="/events">
          <Button text="MORE CAUSES" bgColor="#FF6D6D" />
        </Link>
      </div>
      {/* <ResourceForm /> */}
    </div>
  );
};

export default Community;
