import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/events-ui/Banner';
import SingleEventCard from '../../components/events-ui/SingleEventCard';
import Footer from '../../components/commons/Footer';

const EventsSingle = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <SingleEventCard />
      <Footer />
    </div>
  );
};

export default EventsSingle;
