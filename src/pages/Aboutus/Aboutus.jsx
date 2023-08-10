import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/aboutus-ui/Banner';
import Newsletter from '../../components/aboutus-ui/Newsletter';
import AboutusCard from '../../components/aboutus-ui/AboutusCard';
import Footer from '../../components/commons/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <AboutusCard />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Aboutus;
