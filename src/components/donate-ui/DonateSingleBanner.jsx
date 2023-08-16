const DonateSingleBanner = () => {
  return (
    <div className='bg-donatesingle-pattern relative w-screen h-[25vh]  md:h-screen  bg-no-repeat sm:bg-cover md:bg-cover bg-contain'>
      <div className='absolute inset-0 bg-dark/70' />
      <div className='absolute space-y-2 md:space-y-3 md:max-w-5xl max-w-[300px] left-4 top-4 md:left-[20%] md:top-[30%] '>
        <h3 className=' px-4 font-ellen md:px-16 py-1 text-white tracking-wider  md:tracking-[5px]  text-[10px] md:text-5xl font-medium'>
          Donation
        </h3>

        <div className=''>
          <div className=' font-shippori text-2xl md:text-6xl font-extrabold text-white'>
            First charity activity of this summer today
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonateSingleBanner;
