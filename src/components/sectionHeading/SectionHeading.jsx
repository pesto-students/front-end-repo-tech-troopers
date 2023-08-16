const SectionHeading = ({ heading, title }) => {
  return (
    <div>
      <h5 className='font-ellen font-normal text-2xl md:text-4xl text-primary'>
        {heading}
      </h5>
      <h3 className='font-rubik font-extrabold text-4xl md:text-[40px] text-dark'>
        {title}
      </h3>
    </div>
  );
};

export default SectionHeading;
