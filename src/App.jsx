import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Donate from './pages/Donate/Donate';
import Events from './pages/Events/Events';
import EventsSingle from './pages/Events/EventsSingle';
import DonateSingle from './pages/Donate/DonateSingle';
import VolunteerSingle from './pages/Volunteer/VolunteerSingle';
import Volunteer from './pages/Volunteer/Volunteer';
import Registration from './pages/Registration/Registration';
import Resources from './pages/Resources/Resources';
import Error from './components/commons/Error';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/ngodetails" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/donate">
            <Route index element={<Donate />} />
            <Route path=":id" element={<DonateSingle />} />
          </Route>
          <Route path="/events">
            <Route index element={<Events />} />
            <Route path=":id" element={<EventsSingle />} />
          </Route>
          <Route path="/volunteer">
            <Route index element={<Volunteer />} />
            <Route path=":id" element={<VolunteerSingle />} />
          </Route>
          <Route path="/resources" element={<Resources />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
