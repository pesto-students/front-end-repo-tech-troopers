import Education from '../../assets/events_education.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import EventCard from './EventCard';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { SpinnerCircular } from 'spinners-react';

// const cardDummyData = [
//   {
//     id: 1,
//     image: Education,
//     cardTitle: 'Education for Poor Children',
//     cardDesc:
//       'There are many variations of passages of injected Lorem Ipsum available but the majority have',
//   },
//   {
//     id: 2,
//     image: Education,
//     cardTitle: 'Education for Poor Children',
//     cardDesc:
//       'There are many variations of passages of injected Lorem Ipsum available but the majority have',
//   },
//   {
//     id: 3,
//     image: Education,
//     cardTitle: 'Education for Poor Children',
//     cardDesc:
//       'There are many variations of passages of injected Lorem Ipsum available but the majority have',
//   },
//   {
//     id: 4,
//     image: Education,
//     cardTitle: 'Education for Poor Children',
//     cardDesc:
//       'There are many variations of passages of injected Lorem Ipsum available but the majority have',
//   },
// ];

function EventCards() {
  const { data, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('event');
  }, []);

  return (
    <section className='p-10 w-full bg-white'>
      {loading ? (
        <div className='flex items-center justify-center mt-10'>
          <SpinnerCircular color={'#FF6D6D'} size={100} />
        </div>
      ) : (
        <div className='flex items-center flex-wrap justify-evenly space-y-5'>
          {data?.eventList?.map((card) => (
            <EventCard {...card} key={card._id} />
          ))}
        </div>
      )}
    </section>
  );
}

export default EventCards;
