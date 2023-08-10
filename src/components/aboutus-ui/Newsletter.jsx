import Button from '../ui/Button/Button';

const Newsletter = () => {
  return (
    <div className="bg-message-pattern flex items-center justify-around pb-4 md:pt-16  bg-primary relative w-screen h-full  md:h-[70vh]  bg-no-repeat sm:bg-cover md:bg-cover bg-contain">
      <div className="flex flex-col w-[500px] space-y-1 md:space-y-4 items-center justify-center">
        <h5 className="text-white font-ellen text-lg md:text-3xl font-normal leading-9">
          Get in Touch With Us
        </h5>
        <p className="font-work text-white font-normal  leading-6 text-sm md:text-xl">
          "We're carrying out additional patrols to prevent offences from taking
          place and I'd ask anyone who sees any suspicious or unusual activity
          in their neighbourhood or who has information to get in touch with
          us."
        </p>

        <div>
          <div>
            {/* Icon */}

            {/* message */}

            {/* contact */}
          </div>

          <div>
            {/* Icon */}

            {/* message */}

            {/* contact */}
          </div>
        </div>

        {/* Follow us on social media */}
        <div></div>
      </div>

      {/* section right */}
      <form className="flex w-[600px] bg-white pt-5 border md:pt-10 flex-col items-center space-y-5">
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
