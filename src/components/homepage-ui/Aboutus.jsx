import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import Goals from './Goals';

const Aboutus = () => {
  return (
    <section className="flex flex-col md:flex-row m-4 md:mt-36 md:mx-36 overflow-x-hidden justify-around ">
      {/* Section left */}
      <div className="">
        <div className="leading-10 md:w-72 pb-1">
          <SectionHeading
            heading="About Us"
            title="Help People, Our Main Goals"
          />
        </div>

        {/* Section bottom */}
        <div className="flex flex-col w-3/4 text-md md:text-xl">
          <p className="pb-7 text-gray-dark font-work  font-medium leading-6">
            Lorem Ipsum is simply dummy text of the printin typesetting dummy
            text ever when an unknown printer took a galley of type and
            scrambled it to make a type specimen book.
          </p>
          <p className="pb-7 text-gray-dark font-work font-medium leading-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining when an unknown printer took a
            galley of type and scrambled it to make a type specimen book.
            essentially.
          </p>
          <Button text="MORE ABOUT" bgColor="#FF6D6D" />
        </div>
      </div>

      {/* Section Right */}
      <Goals />
    </section>
  );
};

export default Aboutus;
