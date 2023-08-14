import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import EventCard from './EventCard';

const OurEvents = () => {
  return (
    <section className="flex mt-10 mx-10">
      {/* Section Top */}
      <div className="flex flex-col items-center justify-between mb-4">
        <div className="flex items-center">
          <SectionHeading
            heading="Our Events"
            title="Join Upcoming Events Replays & Webinars"
          />
          <Button text="More Events" bgColor="#FF6D6D" textColor="#fff" />
        </div>
        <EventCard />
      </div>

      {/* section bottom */}
    </section>
  );
};

export default OurEvents;
