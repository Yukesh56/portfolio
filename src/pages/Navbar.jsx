import { Link } from "react-scroll";
import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <img className="image2" src="/R.jpg" alt="Logo" />
      <ul className="navbar-links">
        <li>
          <Link 
            to="Home" 
            smooth={true} 
            duration={1000} 
            offset={-50} 
            spy={true} 
            easing="easeInOutQuart"
          >
            Home
          </Link>
        </li>
        <li>
          <Link to="About" smooth={true} duration={1000} offset={-50} easing="easeInOutCubic">
            About
          </Link>
        </li>
        <li>
          <Link to="Skills" smooth={true} duration={1000} offset={-50} easing="easeInOutCubic">
            Skills
          </Link>
        </li>
        <li>
          <Link to="Experience" smooth={true} duration={1000} offset={-50} easing="easeInOutCubic">
            Experience
          </Link>
        </li>
        <li>
          <Link to="Projects" smooth={true} duration={1000} offset={-50} easing="easeInOutCubic">
            Projects
          </Link>
        </li>
        <li>
          <Link to="Contact" smooth={true} duration={1000} offset={-50} easing="easeInOutCubic">
            Contact
          </Link>
        </li>
        
      </ul>
    </div>
  );
};

export default Navbar;
