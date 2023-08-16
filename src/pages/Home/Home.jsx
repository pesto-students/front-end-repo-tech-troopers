import Navbar from '../../components/navbar/Navbar';
import Wedo from '../../components/homepage-ui/Wedo';
import OurCauses from '../../components/homepage-ui/OurCauses';
import Aboutus from '../../components/homepage-ui/Aboutus';
import Goals from '../../components/homepage-ui/Goals';
import Banner from '../../components/homepage-ui/Banner';
import Discover from '../../components/homepage-ui/Discover';
import Footer from '../../components/commons/Footer';
// import Carousel from '../../components/commons/Carousel';
import ResourceForm from '../../components/homepage-ui/ResourceForm';
import Community from '../../components/homepage-ui/Community';
import OurEvents from '../../components/homepage-ui/OurEvents';
import Team from '../../components/homepage-ui/Team';
import Message from '../../components/homepage-ui/Message';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {
  const token = localStorage.getItem('userToken');
  const navigate = useNavigate();

  useEffect(() => {
    if (token === null || !token) {
      navigate('/signin');
    }
  }, []);

  return (
    <motion.div
      className='scrollbar-hide'
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <Discover />
      <Aboutus />
      <OurCauses />
      <Community />
      <OurEvents />
      <Wedo />
      <Team />
      <Message />
      <Footer />
      {/* <Carousel /> */}
    </motion.div>
  );
};

export default Home;
