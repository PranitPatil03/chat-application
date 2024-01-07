import { Link } from "react-router-dom";

import { logo } from "../assets/index.js";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-20">
        <img src={logo} alt="logo" className="w-full" />
      </Link>

      <div className="flex items-center gap-3 md:gap-6 ml-auto">
        <Link to="/signup" className="py-2">
          Sign Up
        </Link>

        <Link to="/login" className="py-2">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
