import { NavLink } from "react-router-dom";

import { FaHome } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        data-tooltip-id="tooltip-home"
        data-tooltip-content="Home"
      >
        <FaHome size={25} />
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? "nav-link active" : "nav-link"
        }
        data-tooltip-id="tooltip-about"
        data-tooltip-content="About"
      >
        <MdInfo size={25} />
      </NavLink>
    </nav>
  );
}

export default Nav;
