import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import EventCard from './EventCard';

const OurEvents = () => {
  return (
    <section className="flex">
      {/* Section Top */}
      <div className="flex items-center justify-between mb-4">
        <SectionHeading
          heading="Our Events"
          title="Join Upcoming Events Replays & Webinars"
        />
        <Button text="More Events" bgColor="#FF6D6D" textColor="#fff" />
        <EventCard />
      </div>

      {/* section bottom */}
      {/* <EventCard /> */}
    </section>
  );
};

export default OurEvents;
