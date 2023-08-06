import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/SignIn/SignIn";
import SignUp from "./pages/Signup/SignUp";
import Home from "./pages/Home/Home";
import Registration from "./pages/Registration/Registration";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/ngodetails" element={<Registration />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
