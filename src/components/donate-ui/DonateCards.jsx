import School from '../../assets/build_school.png';
import Aid from '../../assets/medical_aid.png';
import Water from '../../assets/safe_water.png';
import Rights from '../../assets/human_rights.png';
import DonateCard from './DonateCard';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';

// const cardDummyData = [
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
//   {
//     id: 5,
//     image: Water,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
//   {
//     id: 6,
//     image: Water,
//     cardTitle: 'Big charity: build school for poor children',
//     raisedAmt: '5M',
//     goalAmt: '10M',
//     percentRaised: '50',
//   },
// ];

function DonateCards() {
  const { data, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('cause');
  }, []);

  console.log(data?.causeList);
  return (
    <section className="p-10 w-full bg-gray-50">
      <div className="flex items-center flex-wrap justify-around space-y-5">
        {data?.causeList?.map((card) => (
          <DonateCard {...card} key={card._id} />
        ))}
      </div>
    </section>
  );
}

export default DonateCards;
