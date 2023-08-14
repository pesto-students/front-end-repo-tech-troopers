import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import SignIn from '../../pages/SignIn/SignIn';
import SignUp from '../../pages/Signup/SignUp';
import Home from '../../pages/Home/Home';
import Aboutus from '../../pages/Aboutus/Aboutus';
import Donate from '../../pages/Donate/Donate';
import Events from '../../pages/Events/Events';
import EventsDetails from '../../pages/Events/EventsDetails';
import DonateDetails from '../../pages/Donate/DonateDetails';
import VolunteerSingle from '../../pages/Volunteer/VolunteerSingle';
import Volunteer from '../../pages/Volunteer/Volunteer';
import Registration from '../../pages/Registration/Registration';
import Resources from '../../pages/Resources/Resources';
// import Error from './components/commons/Error';
import { AnimatePresence } from 'framer-motion';

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/ngodetails" element={<Registration />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/donate">
          <Route index element={<Donate />} />
          <Route path=":id" element={<DonateDetails />} />
        </Route>
        <Route path="/events">
          <Route index element={<Events />} />
          <Route path=":id" element={<EventsDetails />} />
        </Route>
        <Route path="/volunteer">
          <Route index element={<Volunteer />} />
          <Route path=":id" element={<VolunteerSingle />} />
        </Route>
        <Route path="/resources" element={<Resources />} />
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
