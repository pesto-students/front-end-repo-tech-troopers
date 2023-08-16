import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import EventCard from './EventCard';
import MoreEventsCard from './MoreEventsCard';
import { useNavigate } from 'react-router-dom';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';

// const eventData = [
//   {
//     id: '1',
//     day: '18',
//     month: 'June',
//     organizedBy: 'Jane Doe',
//     title: 'Education for Poor Children',
//     description:
//       'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
//   },
//   {
//     id: '2',
//     day: '18',
//     month: 'June',
//     organizedBy: 'Jane Doe',
//     title: 'Healthy Food for Growing',
//     description:
//       'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
//   },
//   {
//     id: '3',
//     day: '18',
//     month: 'June',
//     organizedBy: 'Jane Doe',
//     title: 'Education for Poor Children',
//     description:
//       'There are many varieations of passages of injected Lorem Ipsum available,but the majority have.',
//   },
// ];

const OurEvents = () => {
  const { data, loading, error, fetchData } = useAxios();
  const navigate = useNavigate();

  useEffect(() => {
    fetchData('event');
  }, []);

  const eventDetails = data?.eventList[0];

  const handleClick = (_id) => {
    navigate(`/events/${_id}`);
  };

  return (
    <section className='flex flex-col justify-start m-4 md:mt-36 md:mx-36'>
      {/* Section Top */}
      <div className='flex items-center w-full justify-between'>
        <SectionHeading
          heading='Our Events'
          title='Join Upcoming Events Replays & Webinars'
        />
        <Button
          text='More Events'
          bgColor='#FF6D6D'
          textColor='#fff'
          onClick={() => {
            navigate('/events');
          }}
        />
      </div>

      <div className='flex flex-col md:flex-row items-start justify-between space-x-3 mt-7'>
        <EventCard
          title={eventDetails?.title}
          description={eventDetails?.description}
          imageURL={eventDetails?.imageURL}
          ngoName={eventDetails?.ngoName}
          date={eventDetails?.date}
          onClick={handleClick}
          _id={eventDetails?._id}
        />
        <div className='flex flex-col space-y-6'>
          {data?.eventList?.slice(1, 4).map((event) => (
            <MoreEventsCard onClick={handleClick} {...event} key={event._id} />
          ))}
        </div>
      </div>

      {/* section bottom */}
    </section>
  );
};

export default OurEvents;
