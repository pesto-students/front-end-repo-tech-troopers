import Button from "../ui/Button/Button";
import ButtonMobile from "../ui/Button/ButtonMobile";
import Logo from "../../assets/logo.svg";
import { useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdOutlineRestaurantMenu } from "react-icons/md";
import "./Navbar.css";
import { useState } from "react";

const navbarData = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About Us",
    path: "/",
  },
  {
    id: 3,
    title: "Donate",
    path: "/",
  },
  {
    id: 4,
    title: "Events",
    path: "/",
  },
  {
    id: 5,
    title: "Volunteer",
    path: "/",
  },
];

const Navbar = ({ id, title }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="app_navbar md:mx-2  h-28 bg-white">
      {/* Header left */}
      <div className="app__navbar-logo">
        <img src={Logo} alt="" />
      </div>

      {/* Header middle */}
      <ul className="app__navbar-links  space-x-10 text-dark text-lg">
        {navbarData.map((nav, id) => (
          <li
            key={id}
            className="text-dark font-work text-lg font-medium leading-3 cursor-pointer hover:text-primary"
          >
            {nav.title}
          </li>
        ))}
      </ul>

      <div className="app__navbar-login">
        <Button text="LOG IN" bgColor="#FF6D6D" width="" borderRadius="34" />
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu
          color="#000"
          fontSize={22}
          onClick={() => setToggleMenu(true)}
        />

        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-links space-x-10 text-dark text-lg">
              {navbarData.map((nav, id) => (
                <li
                  key={id}
                  className="text-dark font-work text-lg font-medium leading-3 cursor-pointer hover:text-primary"
                >
                  {nav.title}
                </li>
              ))}
            </ul>

            <div className="app__navbar_login_mobile">
              <ButtonMobile
                text="LOG IN"
                bgColor="#FF6D6D"
                width="20"
                borderRadius=""
              />
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
