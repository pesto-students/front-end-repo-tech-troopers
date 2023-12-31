import Quotes from '../../assets/quote_rounded.svg';

const Quote = () => {
  return (
    <div className='bg-message-pattern pb-4 md:pt-16  bg-primary relative w-screen h-full  md:h-[40vh]  bg-no-repeat sm:bg-cover md:bg-cover bg-contain'>
      <div className='flex flex-col space-y-1 md:space-y-8 items-center justify-center'>
        <img src={Quotes} alt='' />
        <p className='font-work text-white text-center max-w-lg font-normal leading-6 text-sm md:text-xl'>
          Empowering today's dreams with education, building a bridge to a
          brighter tomorrow.
        </p>
      </div>
    </div>
  );
};

export default Quote;
