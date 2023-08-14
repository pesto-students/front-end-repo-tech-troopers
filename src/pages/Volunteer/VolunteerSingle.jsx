import Navbar from '../../components/navbar/Navbar';
import DropDown from '../../components/commons/DropDown';
import VolunteerSingleBanner from '../../components/volunteer-ui/VolunteerSingleBanner';
import VolunteerListing from '../../components/volunteer-ui/VolunteerListing';
import Search from '../../components/volunteer-ui/Search';
import Quote from '../../components/volunteer-ui/Quote';
import Footer from '../../components/commons/Footer';
import { motion } from 'framer-motion';

const VolunteerSingle = () => {
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="bg-[#ECF1F0]"
    >
      <Navbar />
      <VolunteerSingleBanner />
      <Search />
      <div className="flex items-center mt-4 justify-center mx-auto">
        <DropDown />
        <DropDown />
        <DropDown />
        <DropDown />
      </div>
      <VolunteerListing />
      <VolunteerListing />
      <VolunteerListing />
      <Quote />
      <Footer />
    </motion.div>
  );
};

export default VolunteerSingle;
