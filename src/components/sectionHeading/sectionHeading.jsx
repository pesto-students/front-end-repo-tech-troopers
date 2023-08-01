const SectionHeading = ({ heading, title }) => {
  return (
    <div>
      <h5 className="font-ellen font-normal text-4xl text-primary">
        {heading}
      </h5>
      <h3 className="font-rubik font-extrabold text-[40px] text-dark">
        {title}
      </h3>
    </div>
  );
};

export default SectionHeading;
