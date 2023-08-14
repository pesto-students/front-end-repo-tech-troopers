import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/volunteer-ui/Banner';
import People from '../../components/volunteer-ui/People';
import Help from '../../components/volunteer-ui/Help';
import Footer from '../../components/commons/Footer';
import { motion } from 'framer-motion';

const Volunteer = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <People />
      <Help />
      <Footer />
    </motion.div>
  );
};

export default Volunteer;
