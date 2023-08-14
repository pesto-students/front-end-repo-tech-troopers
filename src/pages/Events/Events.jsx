import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/events-ui/Banner';
import EventCards from '../../components/events-ui/EventCards';
import Footer from '../../components/commons/Footer';
import { useEffect } from 'react';

const Events = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <EventCards />
      <Footer />
    </div>
  );
};

export default Events;
