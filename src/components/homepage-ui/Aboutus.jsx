import SectionHeading from "../sectionHeading/sectionHeading";
import Button from "../ui/Button/Button";

const Aboutus = () => {
  return (
    <section className="W-[1762px]  mx-96">
      {/* Section Top */}
      <SectionHeading heading="About Us" title="Our Main Goals" />

      {/* Section bottom */}
      <div className="">
        <p className="">
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. It has survived not only five centuries,
          but also the leap into electronic typesetting, remaining when an
          unknown printer took a galley of type and scrambled it to make a type
          specimen book. essentially.
        </p>
        <Button text="MORE ABOUT" bgColor="primary" onClick={() => { }} />
      </div>
    </section>
  );
};

export default Aboutus;
