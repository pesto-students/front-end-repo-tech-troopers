import Education from '../../assets/events_education.png';

const discoverDummyData = [
  {
    id: 1,
    title: 'Start',
    desc: '10:00AM - 8:00 PM, Everyday',
    backgroundColor: '#FF6D6D',
    showButton: true,
  },
  {
    id: 2,
    title: 'Organizer',
    desc: 'Jane Doe',
    backgroundColor: '#2E4049',
    showButton: false,
  },
  {
    id: 3,
    title: 'Venue',
    desc: 'Manyata Tech Park, Bangalore, 560045',
    backgroundColor: '#77D7D3',
    showButton: false,
  },
];

const SingleEventCard = ({ description }) => {
  return (
    <section className='flex px-6 items-center justify-center py-6'>
      <div className='flex flex-col items-center'>
        <img src={Education} className='bg-cover w-[800px]' alt='' />
        <div className='flex items-center justify-center -mt-10'>
          {discoverDummyData.map((item, id) => (
            <div key={id} style={{ backgroundColor: item.backgroundColor }}>
              <div
                className={`w-48 h-56 md:h-48 py-6 md:py-10 px-3 md:w-56 md:px-6`}
              >
                <h2 className='font-shippori text-lg md:text-2xl text-white font-extrabold leading-1'>
                  {item.title}
                </h2>
                <p className='pt-5 pb-5 font-work text-xs md:text-lg text-white font-normal leading-6'>
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Event Description */}
        <div className='max-w-xl'>
          <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
            Event Description{' '}
          </h3>
          <p className="text-gray-dark text-xl font-normal">{description}</p>
        </div>

        {/* Event Condent */}
        <div className='max-w-xl'>
          <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
            Event Condent{' '}
          </h3>
          <p className='text-gray-dark text-xl font-normal'>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus.
          </p>
        </div>

        {/* Event Condent */}
        <div className='max-w-xl'>
          <h3 className='pt-12 pb-3 text-3xl font-shippori font-extrabold '>
            Details about the Event{' '}
          </h3>
          <p className='text-gray-dark text-xl font-normal'>
            Veniam quae. Nostrum facere repellendus minus quod aut aliquam neque
            reiciendis. Qui beatae vel magnam repudiandae ipsum repellat
            repudiandae. Voluptate at dolores ut dolor sint occaecati similique.
            Velit eius ab delectus temporibus. Headings, paragraphs,
            blockquotes, figures, images, and figure captions can all be styled
            after A rich text element can be used with static or dynamic
            content. For static content, just drop it into any page and begin
            editing. ‍ The rich text element allows you to create and format
            headings, paragraphs, blockquotes, images, and video all in one
            place instead of having to add and format them individually. Just
            double-click and easily create content.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SingleEventCard;
