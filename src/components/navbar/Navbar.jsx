import Button from "../ui/Button/Button";
import Logo from "../../assets/logo.svg";

const Navbar = ({ id, title }) => {
  return (
    <nav className="w-full flex items-center justify-evenly h-28 bg-white">
      {/* Header left */}
      <div>
        <img src={Logo} alt="" />
      </div>

      {/* Header middle */}
      <div key={id} className="flex text-black text-md font-bold items-center">
        <a className="p-4" href="/">
          {title}
        </a>
      </div>

      <Button text="LOG IN" />
    </nav>
  );
};

export default Navbar;
