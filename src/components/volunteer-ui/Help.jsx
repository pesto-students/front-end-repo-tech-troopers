import SectionHeading from '../sectionHeading/SectionHeading';
import Button from '../ui/Button/Button';

const helpDummyData = [
  {
    id: 1,
    cardTitle: 'Create a personal profile',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 2,
    cardTitle: 'Add your organization',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 3,
    cardTitle: 'Add volunteer opportunities',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
  {
    id: 4,
    cardTitle: 'You are ready to recruit',
    cardDesc:
      'Veniam quae. Nostrum facere repellendus minus quod aut neque reiciendis.',
  },
];

const Help = () => {
  return (
    <section className="flex items-center bg-[#F1EEEC] pt-28 pb-28 justify-center mx-auto">
      {/* LEFT */}
      <div className="w-[900px]">
        <SectionHeading
          heading="Help The People With us"
          title="Need Your Heartful Help"
        />
        <p className="text-gray-dark font-work text-xl max-w-2xl font-normal pt-6">
          Lorem Ipsum is simply dummy text of the printin typesetting dummy text
          ever when an unknown printer took a galley of type and scrambled it to
          make a type specimen book. Bring to the table win-win survival
          strategies to proactive domination. is on the runway heading towards a
          streamlined cloud solution. User gener eal-time will have multiple
          touch points for offshoring
        </p>

        {helpDummyData.map((item, id) => (
          <div key={id} className="flex space-x-7 pt-10">
            <div className="h-20 w-20 rounded-full font-shippori text-2xl font-extrabold flex items-center justify-center text-center bg-primary text-white">
              <span>0</span>
              {item.id}
            </div>
            <div className="py-2 max-w-lg">
              <h3 className="text-dark font-shippori text-2xl font-extrabold">
                {item.cardTitle}
              </h3>
              <p className="text-gray-dark font-work text-xl font-normal">
                {item.cardDesc}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-10">
          <Button text="GET STARTED" textColor="#000" bgColor="#fff" />
        </div>
      </div>

      {/* section right */}
      <div className="border text-center bg-white pb-6 pt-11">
        <h3 className="text-dark font-shippori text-3xl font-extrabold">
          Complete the Form
        </h3>
        <h4 className="text-primary pt-4 font-work text-xl font-normal">
          Become a volunteer with us today!
        </h4>
        <form className="flex w-[600px] bg-white pt-5 md:pt-10 flex-col items-center space-y-5">
          <input
            type="name"
            placeholder="Enter your Name"
            className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-100  px-4 outline-none"
          />
          <input
            type="number"
            placeholder="Phone Number"
            className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-100  px-4 outline-none"
          />

          <input
            type="email"
            placeholder="Enter your Email"
            className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-100  px-4 outline-none"
          />
          <input
            type="text"
            placeholder="Address*"
            className="w-3/4 md:w-96 h-10 md:h-16 bg-gray-100  px-4 outline-none"
          />
          <textarea
            className="w-3/4 md:w-96 h-24 md:h-32 bg-gray-100  px-4 outline-none p-4"
            placeholder="About occupation"
          />
          <Button text="SUBMIT" bgColor="#2E4049" />
        </form>
      </div>
    </section>
  );
};

export default Help;
