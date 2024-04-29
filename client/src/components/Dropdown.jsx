import "../styles/Dropdown.css";
import { Link } from "react-router-dom";
const Dropdown = () => {
  return (
    <>
      <div id="dropdownContainer">
        <div id="lineContainer">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div id="dropdownMenuContainer">
          <Link to="/useRef" className="dropdownItem">useRef</Link>
          <Link to="/useDebounce" className="dropdownItem">useDebounce</Link>
          <Link to="/useMemo" className="dropdownItem">useMemo</Link>
          <Link to="/useLayoutEffect" className="dropdownItem">useLayoutEffect</Link>
        </div>
      </div>
    </>
  );
};

export default Dropdown;
