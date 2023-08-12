import School from '../../assets/build_school.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';
import CauseCard from './CauseCard';

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
];

function OurCauses() {
  return (
    <section className="container m-4 md:mt-36 mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between mb-4">
        <SectionHeading
          heading="Our Causes"
          title="You can help lots of people by donating little."
        />
        <Button text="MORE CAUSES" bgColor="primary" onClick={() => {}} />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {cardDummyData.map((card) => (
          <div key={card.id} className="flex">
            <CauseCard {...card} key={card.id} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default OurCauses;
