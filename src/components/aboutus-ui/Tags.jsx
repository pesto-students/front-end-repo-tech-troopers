import Check from '../../assets/red_check.svg';

const tagDummyData = [
  {
    id: 1,
    image: Check,
    cardTitle: 'Make Donation',
  },
  {
    id: 2,
    image: Check,
    cardTitle: 'Donation reached 10M',
  },
  {
    id: 3,
    image: Check,
    cardTitle: 'Education For All',
  },
  {
    id: 4,
    image: Check,
    cardTitle: 'Become A Volunteer',
  },
  {
    id: 5,
    image: Check,
    cardTitle: 'Food For Poor People Daily',
  },
];

const Tags = () => {
  return (
    <section className="flex flex-wrap max-w-xl gap-3 my-3">
      {tagDummyData.map((item, id) => (
        <div
          key={id}
          className="flex items-center h-14 w-60 bg-gray-200  px-2 space-x-2 rounded-full whitespace-nowrap"
        >
          <img src={item.image} alt="" />
          <h2 className="">{item.cardTitle}</h2>
        </div>
      ))}
    </section>
  );
};

export default Tags;
