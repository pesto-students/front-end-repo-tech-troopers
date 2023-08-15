import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import EventCard from './EventCard';
import MoreEventsCard from './MoreEventsCard';

const eventData = [
  {
    id: '1',
    day: '18',
    month: 'June',
    organizedBy: 'Jane Doe',
    title: 'Education for Poor Children',
    description:
      'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
  },
  {
    id: '2',
    day: '18',
    month: 'June',
    organizedBy: 'Jane Doe',
    title: 'Healthy Food for Growing',
    description:
      'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
  },
  {
    id: '3',
    day: '18',
    month: 'June',
    organizedBy: 'Jane Doe',
    title: 'Education for Poor Children',
    description:
      'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
  },
];

const OurEvents = () => {
  return (
    <section className="flex flex-col justify-start m-4 md:mt-36 md:mx-36">
      {/* Section Top */}
      <div className="flex items-center w-full justify-between">
        <SectionHeading
          heading="Our Events"
          title="Join Upcoming Events Replays & Webinars"
        />
        <Button text="More Events" bgColor="#FF6D6D" textColor="#fff" />
      </div>

      <div className="flex flex-col md:flex-row items-start justify-between mt-7">
        <EventCard />
        <div className="flex flex-col space-y-6">
          {eventData.map((event) => (
            <MoreEventsCard {...event} key={event.id} />
          ))}
        </div>
      </div>

      {/* section bottom */}
    </section>
  );
};

export default OurEvents;
