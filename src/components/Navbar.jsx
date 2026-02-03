
import { NavLink } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { FiUser, FiBriefcase, FiMail } from "react-icons/fi";
import { Link } from "react-router-dom";
import '../index.css';


function NavItem({ to, label, Icon }) {
  return (
    <li>
      <NavLink
        to={to}
        className="flex items-center gap-2 py-2 px-3 text-white rounded
                   hover:text-blue-400 transition"
      >
        <Icon className="w-5 h-5" />
        <span>{label}</span>
      </NavLink>
    </li>
  );
}

function Navbar() {
  return (
    <nav className="bg-black fixed w-full z-20 top-0 border-b border-default">
      <div className="max-w-screen-xl mx-auto flex items-center justify-between p-4">

        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src="logo2.jpg" className="h-7 w-20" alt="X2ls Logo" />
        </NavLink>

        {/* Nav NavLinks */}
        <ul className="hidden md:flex items-center gap-8 font-medium">
          <NavItem to="/" label="Home" Icon={AiOutlineHome} />
          <NavItem to="/about" label="About" Icon={FiUser} />
          <NavItem to="/services" label="Services" Icon={FiBriefcase} />
          <NavItem to="/contact" label="Contact" Icon={FiMail} />
        </ul>

        {/* CTA */}
        <Link to="/login">
          <div className="rainbow relative z-0 bg-white/15 overflow-hidden p-0.5 flex items-center justify-center rounded-full hover:scale-105 transition duration-300 active:scale-100"> 
                <button className="px-8 text-sm py-3 text-white rounded-full font-medium bg-gray-900/80 backdrop-blur cursor-pointer">
                    Sign Up
                </button>
            </div></Link>
       

      </div>
    </nav>
  );
}

export default Navbar;
