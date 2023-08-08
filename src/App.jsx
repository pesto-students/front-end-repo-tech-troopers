import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import SignIn from './pages/SignIn/SignIn';
import SignUp from './pages/Signup/SignUp';
import Home from './pages/Home/Home';
import Aboutus from './pages/Aboutus/Aboutus';
import Donate from './pages/Donate/Donate';
import Events from './pages/Events/Events';
import Volunteer from './pages/Volunteer/Volunteer';
import Registration from './pages/Registration/Registration';

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
          <Route path="/donate" element={<Donate />} />
          <Route path="/events" element={<Events />} />
          <Route path="/volunteer" element={<Volunteer />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
