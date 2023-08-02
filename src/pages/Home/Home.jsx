import Navbar from '../../components/navbar/Navbar';
import Wedo from '../../components/homepage-ui/Wedo';
import OurCauses from '../../components/homepage-ui/OurCauses';
import Aboutus from '../../components/homepage-ui/Aboutus';
import Goals from '../../components/homepage-ui/Goals';
import Banner from '../../components/homepage-ui/Banner';
import Discover from '../../components/homepage-ui/Discover';
import Footer from '../../components/homepage-ui/Footer';
import FooterLinks from '../../components/homepage-ui/FooterLinks';
import ResourceForm from '../../components/homepage-ui/ResourceForm';
import Community from '../../components/homepage-ui/Community';

const Home = () => {
  return (
    <div className='scrollbar-hide'>
      <Navbar />
      <Banner />
      <Discover />
      <div className='flex mt-40'>
        <Aboutus />
        <Goals />
      </div>
      <OurCauses />
      <Community />
      <Wedo />
    </div>
  );
};

export default Home;
