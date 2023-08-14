import Logo from '../../assets/icon_brighterdays.svg';
import Instagram from '../../assets/1.svg';
import Facebook from '../../assets/2.svg';
import Twitter from '../../assets/3.svg';
import Pintrest from '../../assets/4.svg';
import FooterLinks from './FooterLinks';

const Footer = () => {
  return (
    <footer className="w-full flex flex-col md:flex-row items-center justify-around bg-dark px-16">
      {/* Icon */}
      <div className="flex flex-col mt-2 md:mt-0 space-y-5 md:w-1/2">
        <div className="flex items-center space-x-2 cursor-pointer">
          <img src={Logo} alt="" />
          <h1 className="text-white font-shippori font-extrabold text-xl md:text-4xl">
            Brighter Days
          </h1>
        </div>
        <p className="text-white font-work text-md md:text-lg font-normal leading-6 md:w-1/2">
          We believe that each person has the potential to contribute to society
          and drive meaningful transformations.
        </p>
        {/* Social Icons */}
        <div className="flex items-center justify-start space-x-3 cursor-pointer md:space-x-6">
          <img src={Instagram} alt="" className="h-10 w-10 md:h-16 md:w-16" />
          <img src={Facebook} alt="" className="h-10 w-10 md:h-16 md:w-16" />
          <img src={Twitter} alt="" className="h-10 w-10 md:h-16 md:w-16" />
          <img src={Pintrest} alt="" className="h-10 w-10 md:h-16 md:w-16" />
        </div>
      </div>

      <FooterLinks />
    </footer>
  );
};

export default Footer;
