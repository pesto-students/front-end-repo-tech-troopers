import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/events-ui/Banner';
import SingleEventCard from '../../components/events-ui/SingleEventCard';
import Footer from '../../components/commons/Footer';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { motion } from 'framer-motion';

const EventsDetails = () => {
  const { data, loading, error, fetchData } = useAxios();

  useEffect(() => {
    fetchData('event');
  }, []);

  console.log(data?.eventList);

  const eventDetails = data?.eventList[0];
  console.log({ eventDetails });

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <SingleEventCard description={eventDetails?.description} />
      <Footer />
    </motion.div>
  );
};

export default EventsDetails;
