import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/aboutus-ui/Banner';
import Newsletter from '../../components/aboutus-ui/Newsletter';
import AboutusCard from '../../components/aboutus-ui/AboutusCard';
import OurGoal from '../../components/aboutus-ui/OurGoal';
import Footer from '../../components/commons/Footer';
import { motion } from 'framer-motion';

const Aboutus = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <div className="mx-40 my-6">
        <AboutusCard />
        <OurGoal />
      </div>
      <Newsletter />
      <Footer />
    </motion.div>
  );
};

export default Aboutus;
