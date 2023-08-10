import Education from '../../assets/events_education.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import EventCard from './EventCard';

const cardDummyData = [
  {
    id: 1,
    image: Education,
    cardTitle: 'Education for Poor Children',
    cardDesc:
      'There are many variations of passages of injected Lorem Ipsum available but the majority have',
  },
  {
    id: 1,
    image: Education,
    cardTitle: 'Education for Poor Children',
    cardDesc:
      'There are many variations of passages of injected Lorem Ipsum available but the majority have',
  },
  {
    id: 1,
    image: Education,
    cardTitle: 'Education for Poor Children',
    cardDesc:
      'There are many variations of passages of injected Lorem Ipsum available but the majority have',
  },
  {
    id: 1,
    image: Education,
    cardTitle: 'Education for Poor Children',
    cardDesc:
      'There are many variations of passages of injected Lorem Ipsum available but the majority have',
  },
];

function OurCauses() {
  return (
    <section className="p-10 w-full bg-white">
      <div className="flex items-center flex-wrap justify-evenly space-y-5">
        {cardDummyData.slice(0, 2).map((card) => (
          <EventCard {...card} key={card.id} />
        ))}
      </div>
    </section>
  );
}

export default OurCauses;
