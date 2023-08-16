import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/events-ui/Banner';
import SingleEventCard from '../../components/events-ui/SingleEventCard';
import Footer from '../../components/commons/Footer';
import useAxios from '../../hooks/useAxios';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useParams } from 'react-router-dom';

const EventsDetails = () => {
  const { data, loading, error, fetchData } = useAxios();
  const { id } = useParams();


  useEffect(() => {
    fetchData(`event/${id}`);
  }, []);

  const eventDetails = data?.eventData;

  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
    >
      <Navbar />
      <Banner />
      <SingleEventCard
        title={eventDetails?.title}
        description={eventDetails?.description}
        imageURL={eventDetails?.imageURL}
        _id={eventDetails?._id}
      />
      <Footer />
    </motion.div>
  );
};

export default EventsDetails;
