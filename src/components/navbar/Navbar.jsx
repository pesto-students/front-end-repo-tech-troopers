import Button from '../ui/Button/Button';
import Logo from '../../assets/logo.svg';
import { useNavigate } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useState } from 'react';

const navbarData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About Us',
    path: '/',
  },
  {
    id: 3,
    title: 'Donate',
    path: '/',
  },
  {
    id: 4,
    title: 'Events',
    path: '/',
  },
  {
    id: 5,
    title: 'Volunteer',
    path: '/',
  },
];

const Navbar = ({ id, title }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  function Menu(e) {
    let list = document.querySelector('ul');

    e.name === 'menu'
      ? ((e.name = 'close'),
        list.classList.add('top-[80px]'),
        list.classList.add('opacity-100'))
      : ((e.name = 'menu'),
        list.classList.remove('top-[80px]'),
        list.classList.remove('opacity-100'));
  }

  return (
    <nav className='p-5 bg-white shadow md:flex md:items-center md:justify-between'>
      {/* Header left */}
      <div className='flex justify-between items-center'>
        <span className='text-2xl cursor-pointer'>
          <img src={Logo} alt='' />
        </span>

        <span className='text-3xl cursor-pointer mx-2 md:hidden block'>
          <ion-icon name='menu-outline' onClick='Menu(this)'></ion-icon>
        </span>
      </div>

      {/* Header middle */}
      <ul className='md:flex md:items-center z-[-1] md:z-auto md:static absolute bg-white w-full left-0 md:w-auto ms:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[-400px] transition-all ease-in duration-500 text-dark text-lg'>
        {navbarData.map((nav, id) => (
          <li key={id} className='mx-4 my-6 md:my-0'>
            <a className='text-dark font-work text-lg font-medium leading-3 cursor-pointer hover:text-primary duration-500'>
              {nav.title}
            </a>
          </li>
        ))}
        <Button text='LOG IN' bgColor='#FF6D6D' width='' borderRadius='34' />
      </ul>
    </nav>
  );
};

export default Navbar;
