import { useState } from 'react';
import { useSelector } from 'react-redux';
import Button from '../ui/Button/Button';
import logoIcon from '../../assets/icon_brighterdays.svg';
import menu from '../../assets/hamburger-black.svg';
import close from '../../assets/close-black.svg';
import { Link, useNavigate } from 'react-router-dom';
import { FaRegUserCircle } from 'react-icons/fa';
import { ChevronUpIcon } from '@chakra-ui/icons';
import {
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
} from '@chakra-ui/react';

const navbarData = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'About Us',
    path: '/aboutus',
  },
  {
    id: 3,
    title: 'Donate',
    path: '/donate',
  },
  {
    id: 4,
    title: 'Events',
    path: '/events',
  },
  {
    id: 5,
    title: 'Volunteer',
    path: '/volunteer',
  },
  {
    id: 6,
    title: 'Donate Resources',
    path: '/resources',
  },
];

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(true);

  const navigate = useNavigate();
  const { isLoggedIn } = useSelector((state) => state.auth);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/');
    window.location.reload();
  };
  return (
    <nav className='w-full flex items-center py-5 fixed top-0 z-20 bg-white shadow-md h-20'>
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className='flex items-center space-x-2'>
            <img src={logoIcon} alt={logoIcon} className='pl-4' />
            <h2 className='hidden sm:flex text-dark font-shippori font-extrabold text-xl md:text-4xl'>
              Brighter Days
            </h2>
          </div>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navbarData.map((link) => (
            <li
              key={link.id}
              className='text-dark hover:text-primary text-lg font-medium cursor-pointer'
            // onClick={() => setActive(link.title)}
            >
              <Link to={link.path}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {isLoggedIn ? (
          <div className='hidden sm:block'>
            <Box position='relative'>
              <IconButton
                icon={
                  <FaRegUserCircle className='text-primary text-xl sm:text-2xl md:text-3xl lg:text-4xl' />
                }
                variant='ghost'
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={
                    <ChevronUpIcon
                      transform='rotate(180deg)'
                      color='primary'
                      className='text-primary'
                      aria-label='Inverted Triangle'
                    />
                  }
                  variant='ghost'
                  size={{
                    base: 'md',
                    sm: 'lg',
                    md: 'xl',
                    lg: '2xl',
                    xl: '3xl',
                  }}
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  position='absolute'
                  top='10px'
                // Adjust the right positioning as needed
                />
                {/* Dropdown */}
                <MenuList
                  position='absolute'
                  top='100%' // Position it right below the icon
                  left='0' // Align it with the right side of the icon
                  zIndex='10'
                  bg='white'
                  boxShadow='md'
                >
                  {/* Logout option */}
                  <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </MenuList>
              </Menu>
            </Box>
          </div>
        ) : (
          <div className='hidden md:block'>
            <Button
              text='LOGIN'
              bgColor='#FF6D6D'
              onClick={() => {
                navigate('/signin');
              }}
            />
          </div>
        )}

        <div className='sm:hidden flex flex-1 justify-end items-center pr-7'>
          {!isLoggedIn && (
            <Button
              text='LOGIN'
              bgColor='#FF6D6D'
              onClick={() => {
                navigate('/signin');
              }}
            />
          )}
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-7 h-7 ml-3 object-contain cursor-pointer text-dark'
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${!toggle ? 'hidden' : 'flex'
              } p-6 bg-gray-50 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className='list-none flex justify-end items-start flex-col gap-4'>
              {navbarData.map((link) => (
                <li
                  key={link.id}
                  className='text-dark text-base font-medium cursor-pointer font-poppins'
                  onClick={() => {
                    setToggle(!toggle);
                  }}
                >
                  <a href={`${link.path}`}>{link.title}</a>
                </li>
              ))}
              {isLoggedIn && (
                <li
                  key='7'
                  className='text-dark text-base font-medium cursor-pointer font-poppins'
                  onClick={() => {
                    handleLogout();
                  }}
                >
                  <a>Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </div>
    </nav >
  );
};

export default Navbar;