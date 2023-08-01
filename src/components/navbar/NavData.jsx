import Navbar from './Navbar';

const navbarData = [
	{
	  id: 1,
	  title: 'Home',
	  onClick: "/"
	},
	{
		id: 2,
		title: 'About Us'
		onClick: "/"
	},
	{
		id: 3,
		title: 'Donate',
		onClick: "/"
	},
	{
		id: 4,
		title: 'Events',
		onClick: "/"
	},
	{
		id: 5,
		title: 'Volunteer',
		onClick: "/"
	},
  ];


const NavData = ({id, title, onClick}) => {
  return (
	  <div className='flex mt-5'>
        {navbarData.map((navItem) => (
          <Navbar {...navItem} key={navItem.id} />
        ))}
      </div>
   
  );
};

export default Navbar;
