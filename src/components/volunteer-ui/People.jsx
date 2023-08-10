import Volunteer from '../../assets/doctor.png';
import Mother from '../../assets/volunteer_2.png';
import Button from '../ui/Button/Button';

const volunteerDummyData = [
  {
    id: 1,
    image: Volunteer,
    cardTitle: 'Lets help together',
    cardDesc:
      'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining when an unknown printer took a galley of type and scrambled it to make a type specimen book. essentially.',
  },
  {
    id: 2,
    image: Mother,
    cardTitle: 'More People More Impact',
    cardDesc:
      'Lorem Ipsum is simply dummy text of the printin typesetting  dummy text ever  when an unknown printer took a galley of type and scrambled it to make a type specimen book.',
  },
];

const People = () => {
  return (
    <section className=" max-w-7xl mx-auto">
      {/* section Top */}
      {volunteerDummyData.slice(0, 1).map((item, id) => (
        <div key={id} className="flex space-x-9 py-14">
          <div className="max-w-lg ">
            <h3 className="text-primary text-3xl font-normal font-ellen">
              Help First
            </h3>
            <h5 className="py-6 text-dark font-shippori text-4xl font-extrabold">
              {item.cardTitle}
            </h5>
            <p className="text-gray-dark font-work text-xl font-normal">
              {item.cardDesc}
            </p>
          </div>
          <div className="">
            <img src={item.image} className="" alt="" />
          </div>
        </div>
      ))}
      <div className="-mt-16">
        <Button text="CALL : 99999888" bgColor="#2E4049" />
      </div>

      {volunteerDummyData.slice(1, 2).map((item, id) => (
        <div key={id} className="flex space-x-9 py-14">
          <div className="">
            <img src={item.image} className="" alt="" />
          </div>
          <div className="max-w-lg ">
            <h3 className="text-primary text-3xl font-normal font-ellen">
              Help First
            </h3>
            <h5 className="py-6 text-dark font-shippori text-4xl font-extrabold">
              {item.cardTitle}
            </h5>
            <p className="text-gray-dark font-work text-xl font-normal">
              {item.cardDesc}
            </p>
          </div>
        </div>
      ))}
    </section>
  );
};

export default People;
