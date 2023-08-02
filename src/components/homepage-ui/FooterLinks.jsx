const footerDummyData = [
  {
    id: 1,
    title: 'About Us',
    path: '/',
  },
  {
    id: 2,
    title: 'Volunteer',
    path: '/',
  },
  {
    id: 3,
    title: 'Events',
    path: '/',
  },
  {
    id: 4,
    title: 'Donate',
    path: '/',
  },
  {
    id: 5,
    title: 'Team',
    path: '/',
  },
];

const FooterLinks = ({ id, title }) => {
  return (
    <footer className='w-[600px] bg-gray-light'>
      <div className='px-12 py-14'>
        <h3>Get Involved</h3>
        <ul className=''>
          {footerDummyData.map((item, id) => (
            <li
              key={id}
              className='text-dark font-work text-lg font-medium leading-3 cursor-pointer hover:text-primary'
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
