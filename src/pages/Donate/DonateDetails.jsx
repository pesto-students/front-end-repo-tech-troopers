import Navbar from '../../components/navbar/Navbar';
import DonateSingleBanner from '../../components/donate-ui/DonateSingleBanner';
import DonateSingleCard from '../../components/donate-ui/DonateSingleCard';
import BankDetails from '../../components/donate-ui/BankDetails';
import Challenges from '../../components/donate-ui/Challenges';
import Footer from '../../components/commons/Footer';
import useAxios from '../../hooks/useAxios';
import { motion } from 'framer-motion';
import { useEffect } from 'react';

const DonateDetails = () => {
  const { data, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('cause');
  }, []);

  const detailsData = data?.causeList[0];

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <DonateSingleBanner />
      <DonateSingleCard
        description={detailsData?.description}
        imageURL={detailsData?.imageURL}
        calculatedAmount={detailsData?.calculatedAmount}
        amount={detailsData?.amount}
      />
      <BankDetails />
      <Challenges />
      <Footer />
    </motion.div>
  );
};

export default DonateDetails;
