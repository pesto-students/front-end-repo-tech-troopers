import Quotes from '../../assets/quote_rounded.svg';

const Quote = () => {
  return (
    <div className='bg-message-pattern pb-4 md:pt-24  bg-primary relative w-screen h-full  md:h-[50vh]  bg-no-repeat sm:bg-cover md:bg-cover bg-contain'>
      <div className='flex flex-col space-y-1 md:space-y-8 items-center justify-center'>
        <img src={Quotes} alt='' />
        <p className='font-work text-white text-center max-w-lg font-normal leading-6 text-sm md:text-xl'>
          Veniam quae Nostrum facere repellendus minus quod aut aliquam neque
          reiciendis. Qui beatae vel magnam ipsum repudiandae.
        </p>
      </div>
    </div>
  );
};

export default Quote;
