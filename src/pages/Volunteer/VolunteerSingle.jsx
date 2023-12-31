import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import axiosHelper from '../../axiosHelper';
import { togglevolunteerstatus } from '../../redux/features/authActions';
import Navbar from '../../components/navbar/Navbar';
import Banner from '../../components/volunteer-ui/Banner';
import People from '../../components/volunteer-ui/People';
import Help from '../../components/volunteer-ui/Help';
import Footer from '../../components/commons/Footer';
import { motion } from 'framer-motion';

const VolunteerSingle = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { volunteerId } = useParams();
  let { volunteers } = useSelector((state) => state.volunteers) || [];
  const { voluntary } = useSelector((state) => state.auth.userInfo) || [];
  volunteers = volunteers.find((volunteer) => volunteer._id === volunteerId);
  const handleToggleInterest = async () => {
    const action = voluntary.includes(volunteerId) ? 'remove' : 'add';
    try {
      await dispatch(togglevolunteerstatus({ action, volunteerId }));
      navigate('/volunteer');
      // Update auth and resources store details (if needed)
      // ... your code to update the stores ...
    } catch (error) {
      console.error(error.response.data.message);
    }
  };
  return (
    <motion.div
      initial={{ width: 0 }}
      animate={{ width: '100%' }}
      exit={{ x: window.innerWidth, transition: { duration: 0.1 } }}
      className="bg-[#ECF1F0]"
    >
      <Navbar />
      <Banner />
      <Help
        volunteers={volunteers}
        buttonText={
          voluntary && voluntary.includes(volunteerId)
            ? "I'M NOT INTERESTED"
            : "I'M INTERESTED"
        }
        handleToggleInterest={handleToggleInterest}
      />
      <Footer />
    </motion.div>
  );
};

export default VolunteerSingle;
