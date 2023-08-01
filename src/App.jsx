import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Signin/SignIn";
import SignUp from "./pages/Signup/SignUp";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
