import Button from '../ui/Button/Button';
import DiscoverBanner from '../../assets/discover.png';
import { Link } from 'react-router-dom';

const discoverDummyData = [
  {
    id: 1,
    title: 'Education',
    desc: 'we outstretch a generation where there are diverse forms of education. Education gives a vision of hope for a better world..',
    backgroundColor: '#77D7D3',
    showButton: true,
  },
  {
    id: 2,
    title: 'Become a Volunteer',
    desc: 'We regularly publish selected volunteer opportunities.',
    backgroundColor: '#2E4049',
    showButton: false,
  },
];

const Discover = () => {
  return (
    <section className="flex items-start overflow-x-hidden justify-around md:justify-center mx-auto">
      {discoverDummyData.map((item, id) => (
        <div
          key={id}
          style={{
            backgroundColor: item.backgroundColor,
            color: item.showButton ? '' : '#fff',
          }}
          className={`w-48 h-56 md:h-80 py-6 md:py-16 px-3 md:w-96 md:px-10`}
        >
          <h2 className=" font-shippori text-lg md:text-4xl -mt-10 font-extrabold leading-1">
            {item.title}
          </h2>
          <p className="pt-4 pb-5  font-work text-xs md:text-xl font-normal leading-6">
            {item.desc}
          </p>

          {item.showButton ? (
            <Link to="/resources">
              <Button text="DISCOVER" bgColor="#fff" textColor="#000" />
            </Link>
          ) : (
            <a
              className="text-white underline md:no-underline hover:underline font-work text-xs md:text-lg"
              href=""
            >
              JOIN ORGANIZATION
            </a>
          )}
        </div>
      ))}

      <div className="relative h-80 hidden md:inline-block overflow-y-hidden">
        <img className="object-contain" src={DiscoverBanner} alt="" />
        <div className="absolute inset-0 bg-primary/40" />
      </div>
    </section>
  );
};

export default Discover;
