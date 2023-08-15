import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/donate-ui/Banner';
import DonateCards from '../../components/donate-ui/DonateCards';
import Footer from '../../components/commons/Footer';
import { motion } from 'framer-motion';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

const Donate = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className=""
    >
      <Navbar />
      <Banner />
      <DonateCards />
      <Footer />
    </motion.div>
  );
};

export default Donate;
