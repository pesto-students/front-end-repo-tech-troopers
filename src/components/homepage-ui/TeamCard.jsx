import Instagram from '../../assets/insta_grey.svg';
import Facebook from '../../assets/facebook_grey.svg';
import Twitter from '../../assets/twitter_grey.svg';
import Pintrest from '../../assets/pintrest_grey.svg';

const TeamCard = ({ image, cardTitle }) => {
  return (
    <div className="">
      <img src={image} alt="" />
      <div className="text-center md:pt-5">{cardTitle}</div>
      {/* Social icons */}
      <div className="flex items-center cursor-pointer justify-evenly md:pt-5">
        <img src={Instagram} alt="" />
        <img src={Facebook} alt="" />
        <img src={Twitter} alt="" />
        <img src={Pintrest} alt="" />
      </div>
    </div>
  );
};

export default TeamCard;
