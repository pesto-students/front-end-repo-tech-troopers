import Navbar from '../../components/navbar/Navbar';
import Wedo from '../../components/homepage-ui/Wedo';
import OurCauses from '../../components/homepage-ui/OurCauses';
import Aboutus from '../../components/homepage-ui/Aboutus';
import Goals from '../../components/homepage-ui/Goals';
import Banner from '../../components/homepage-ui/Banner';
import Discover from '../../components/homepage-ui/Discover';
import Footer from '../../components/commons/Footer';
// import Carousel from '../../components/commons/Carousel';
import ResourceForm from '../../components/homepage-ui/ResourceForm';
import Community from '../../components/homepage-ui/Community';
import OurEvents from '../../components/homepage-ui/OurEvents';
import Team from '../../components/homepage-ui/Team';
import Message from '../../components/homepage-ui/Message';

const Home = () => {
  return (
    <div className="scrollbar-hide ">
      <Navbar />
      <Banner />
      <Discover />
      <Aboutus />
      <OurCauses />
      <Community />
      <OurEvents />
      <Wedo />
      <Team />
      <Message />
      <Footer />
      {/* <Carousel /> */}
    </div>
  );
};

export default Home;
