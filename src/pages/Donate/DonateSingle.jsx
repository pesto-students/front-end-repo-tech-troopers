import Navbar from '../../components/navbar/Navbar';
import DonateSingleBanner from '../../components/donate-ui/DonateSingleBanner';
import DonateSingleCard from '../../components/donate-ui/DonateSingleCard';
import BankDetails from '../../components/donate-ui/BankDetails';
import Challenges from '../../components/donate-ui/Challenges';
import Footer from '../../components/commons/Footer';

const DonateSingle = () => {
  return (
    <div>
      <Navbar />
      <DonateSingleBanner />
      <DonateSingleCard />
      <BankDetails />
      <Challenges />
      <Footer />
    </div>
  );
};

export default DonateSingle;
