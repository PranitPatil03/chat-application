import { Link} from "react-router-dom";

import {logo} from "../assets/index.js"

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="flex-none w-10">
        <img src={logo} alt="logo" className="w-full" />
      </Link>
    </nav>
  );
};

export default Navbar;
