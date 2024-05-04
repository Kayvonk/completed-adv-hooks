import Dropdown from "./Dropdown";
import "../styles/Navbar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon className="homeIcon" icon={faHouse} />
      </Link>
      <Dropdown />
    </nav>
  );
};

export default Navbar;
