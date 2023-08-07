import School from '../../assets/build_school.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import DonateCard from './DonateCard';

const cardDummyData = [
  {
    id: 1,
    image: School,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 2,
    image: Aid,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 3,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 4,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 5,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
  {
    id: 6,
    image: Water,
    cardTitle: 'Big charity: build school for poor children',
    raisedAmt: '5M',
    goalAmt: '10M',
    percentRaised: '50',
  },
];

function OurCauses() {
  return (
    <section className='container mx-auto px-4 sm:px-6 lg:px-8'>
      <div className='grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {cardDummyData.map((card) => (
          <div className='flex'>
            <DonateCard {...card} key={card.id} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCauses;
