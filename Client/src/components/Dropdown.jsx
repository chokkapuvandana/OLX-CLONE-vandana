import looks from "./Dropdown.css";
import profile_ from "../pages/profile.jpg";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
const Dropdown = ({ styles }) => {
  const dropdownref = useRef(null);
  const [isActive, setisActive] = useState(false);
  const click = () => {
    setisActive(!isActive);
  };
  return (
    <div className="menucontainer">
      <button className="dropbtn" onClick={click} >
        <img className="imgmenu" src={profile_} alt="profile-meny" />
      </button>
      <nav
        ref={dropdownref}
        className={`menu ${isActive ? "active" : "inactive"}`}
      >
        <ul className="list">
          <li className="listli">
            <Link className="_5489" to={'/profile'}>
              Profile
            </Link>
          </li>
          <li className="listli">
            <a className="link" href="http://localhost:5000/auth/logout">
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

Dropdown.defaultProps = {
  styles: { looks },
};

export default Dropdown;
