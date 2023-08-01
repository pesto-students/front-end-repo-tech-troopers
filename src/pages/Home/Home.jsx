import Navbar from "../../components/navbar/Navbar";
import Wedo from "../../components/homepage-ui/Wedo";
import OurCauses from "../../components/homepage-ui/OurCauses";
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex items-center justify-center">
        {/* <Wedo /> */}
        <OurCauses />
      </div>
    </div>
  );
};

export default Home;
