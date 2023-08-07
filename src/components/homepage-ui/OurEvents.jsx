import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';

// const eventsDummyData = [
//   {
//     id: 1,
//     image: School,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
//   {
//     id: 2,
//     image: Aid,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
//   {
//     id: 3,
//     image: Water,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
//   {
//     id: 4,
//     image: Water,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
// ];

const OurEvents = () => {
  return (
    <section className=''>
      <div className='flex items-center justify-between mb-4'>
        <SectionHeading
          heading='Our Events'
          title='Join Upcoming Events Replays & Webinars'
        />
        <Button text='More Events' bgColor='#FF6D6D' textColor='#fff' />
      </div>
    </section>
  );
};

export default OurEvents;
