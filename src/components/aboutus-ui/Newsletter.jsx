import Button from '../ui/Button/Button';
import { EnvelopeIcon } from '@heroicons/react/24/solid';
import { PhoneIcon } from '@heroicons/react/24/solid';
import Instagram from '../../assets/insta_grey.svg';
import Facebook from '../../assets/facebook_grey.svg';
import Twitter from '../../assets/twitter_grey.svg';
import Pintrest from '../../assets/pintrest_grey.svg';

const Newsletter = () => {
  return (
    <div className="bg-message-pattern flex items-center justify-around pb-4 md:pt-16 mt-10  bg-primary relative w-screen h-full  md:h-[85vh]  bg-no-repeat sm:bg-cover md:bg-cover bg-contain">
      <div className="flex flex-col w-[500px] space-y-1 md:space-y-4 items-start justify-center">
        <h5 className="text-dark font-shippori text-4xl font-extrabold">
          Get in Touch With Us
        </h5>
        <p className="font-work text-white font-normal  leading-6 text-sm md:text-xl">
          "We're carrying out additional patrols to prevent offences from taking
          place and I'd ask anyone who sees any suspicious or unusual activity
          in their neighbourhood or who has information to get in touch with
          us."
        </p>

        <div className="flex flex-col py-4 space-y-6 ">
          {/* Icon */}
          <div className="flex space-x-5">
            <EnvelopeIcon className="h-16 w-16  text-primary bg-white rounded-full px-2 py-2" />
            <div className="flex space-y-1 flex-col">
              {/* message */}
              <h3 className="text-dark font-shippori text-2xl font-extrabold">
                Email
              </h3>

              {/* contact */}
              <span className="font-work text-white font-normal  leading-6 text-sm md:text-lg">
                pesto@health.com
              </span>
            </div>
          </div>

          <div className="flex space-x-5">
            <PhoneIcon className="h-16 w-16  text-primary bg-white rounded-full px-2 py-2" />
            <div className="flex space-y-1 flex-col">
              {/* message */}
              <h3 className="text-dark font-shippori text-2xl font-extrabold">
                Contact Us
              </h3>

              {/* contact */}
              <span className="font-work text-white font-normal  leading-6 text-sm md:text-lg">
                222 888 0000
              </span>
            </div>
          </div>
        </div>

        {/* Follow us on social media */}
        <div className="py-4">
          <h2 className="text-dark font-shippori text-2xl font-extrabold">
            Follow us on Social Media
          </h2>
          <p className="font-work text-white font-normal  leading-6 text-sm md:text-lg">
            Care about people to transforming their lives and exudes a
            positives.
          </p>
          <div className="flex items-center cursor-pointer space-x-5 md:pt-5">
            <img src={Instagram} alt="" />
            <img src={Facebook} alt="" />
            <img src={Twitter} alt="" />
            <img src={Pintrest} alt="" />
          </div>
        </div>
      </div>

      {/* section right */}
      <form className="flex w-[600px] bg-white pt-5 border md:py-10 flex-col items-center space-y-5">
        <input
          type="name"
          placeholder="Enter your Name"
          className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-50  px-4 outline-none"
        />
        <input
          type="number"
          placeholder="Phone Number"
          className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-50  px-4 outline-none"
        />

        <input
          type="email"
          placeholder="Enter your Email"
          className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-50  px-4 outline-none"
        />
        <textarea
          className="w-3/4 md:w-96 h-24 md:h-32 bg-gray-50  px-4 outline-none p-4"
          placeholder="Enter your Message"
        />
        <Button text="SUBMIT" bgColor="#2E4049" />
      </form>
    </div>
  );
};

export default Newsletter;
