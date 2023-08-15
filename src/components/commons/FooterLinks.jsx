import { Link } from "react-router-dom";
const footerDummyData = [
  {
    id: 1,
    title: 'About Us',
    path: '/aboutus',
  },
  {
    id: 2,
    title: 'Volunteer',
    path: '/volunteer',
  },
  {
    id: 3,
    title: 'Events',
    path: '/events',
  },
  {
    id: 4,
    title: 'Donate',
    path: '/donate',
  },
  {
    id: 5,
    title: 'Team',
    path: '/volunteer',
  },
];

const contactDummyData = [
  {
    id: 1,
    title: '660 Bangalore, India',
    path: '/',
  },
  {
    id: 2,
    title: 'P.O Box No - 225478',
    path: '/',
  },
  {
    id: 3,
    title: 'helpesto@gmail.com',
    path: '/',
  },
  {
    id: 4,
    title: '222 888 0000',
    path: '/',
  },
  {
    id: 5,
    title: 'help@help.com',
    path: '/',
  },
];

const FooterLinks = ({ id, title }) => {
  return (
    <footer className='flex w-fit items-center justify-around bg-gray-lighter my-10'>
      {/* Get Involved */}
      <div className='px-12 space-y-7 py-8 md:py-14'>
        <h3 className='font-shippori text-lg whitespace-nowrap md:text-2xl font-bold text-white'>
          Get Involved
        </h3>
        <ul className='space-y-6'>
          {footerDummyData.map((item, id) => (
            <li
              key={id}
              className='text-white font-work text-sm md:text-lg font-medium leading-3 cursor-pointer hover:text-primary'
            >
              <Link to={item.path}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Contact */}
      <div className='px-12 space-y-7 py-8 md:py-14'>
        <h3 className='font-shippori text-lg md:text-2xl font-bold text-white'>
          Contact
        </h3>
        <ul className='space-y-6'>
          {contactDummyData.map((item, id) => (
            <li
              key={id}
              className='text-white font-work whitespace-nowrap text-sm md:text-lg font-medium leading-3 cursor-pointer hover:text-primary'
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default FooterLinks;
