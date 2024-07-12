import { NavLink } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import { FaHome } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

function Nav() {
  return (
    <nav>
      <NavLink
        to="/"
        className="nav-link"
        activeClassName="active"
        data-tooltip-id="tooltip-home"
        data-tooltip-content="Home"
      >
        <FaHome size={25} />
      </NavLink>
      <NavLink
        to="/about"
        className="nav-link"
        activeClassName="active"
        data-tooltip-id="tooltip-about"
        data-tooltip-content="About"
      >
        <MdInfo size={25} />
      </NavLink>
      <Tooltip id="tooltip-home" place="bottom" type="dark" effect="solid" />
      <Tooltip id="tooltip-about" place="bottom" type="dark" effect="solid" />
    </nav>
  );
}

export default Nav;
