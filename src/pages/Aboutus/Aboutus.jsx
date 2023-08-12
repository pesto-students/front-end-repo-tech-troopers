import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/aboutus-ui/Banner';
import Newsletter from '../../components/aboutus-ui/Newsletter';
import AboutusCard from '../../components/aboutus-ui/AboutusCard';
import OurGoal from '../../components/aboutus-ui/OurGoal';
import Footer from '../../components/commons/Footer';

const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <div className="mx-40 my-6">
        <AboutusCard />
        <OurGoal />
      </div>
      <Newsletter />
      <Footer />
    </div>
  );
};

export default Aboutus;
