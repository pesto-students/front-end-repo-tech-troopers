import Instagram from '../../assets/insta_grey.svg';
import Facebook from '../../assets/facebook_grey.svg';
import Twitter from '../../assets/twitter_grey.svg';
import Pintrest from '../../assets/pintrest_grey.svg';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const TeamCard = ({ image, cardTitle }) => {
  return (
    <div className=''>
      <LazyLoadImage src={image} alt='' />
      <div className='text-center md:pt-5'>{cardTitle}</div>
      {/* Social icons */}
      <div className='flex items-center cursor-pointer justify-evenly md:pt-5'>
        <LazyLoadImage src={Instagram} alt='' />
        <LazyLoadImage src={Facebook} alt='' />
        <LazyLoadImage src={Twitter} alt='' />
        <LazyLoadImage src={Pintrest} alt='' />
      </div>
    </div>
  );
};

export default TeamCard;
