import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/donate-ui/Banner';
import DonateCards from '../../components/donate-ui/DonateCards';
import Footer from '../../components/commons/Footer';

const Donate = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <DonateCards />
      <Footer />
    </div>
  );
};

export default Donate;
