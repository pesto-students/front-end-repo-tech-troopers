import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/events-ui/Banner';
import EventCards from '../../components/events-ui/EventCards';
import Footer from '../../components/commons/Footer';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <EventCards />
      <Footer />
    </motion.div>
  );
};

export default Events;
