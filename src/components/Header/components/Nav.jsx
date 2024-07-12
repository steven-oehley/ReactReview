import { Link } from "react-router-dom";
import { Tooltip } from "react-tooltip";

import { FaHome } from "react-icons/fa";
import { MdInfo } from "react-icons/md";

function Nav() {
  return (
    <nav>
      <Link
        to="/"
        className="nav-link"
        data-tooltip-id="tooltip-home"
        data-tooltip-content="Home"
      >
        <FaHome size={25} />
      </Link>
      <Link
        to="/about"
        className="nav-link"
        data-tooltip-id="tooltip-about"
        data-tooltip-content="About"
      >
        <MdInfo size={25} />
      </Link>
      <Tooltip id="tooltip-home" place="bottom" type="dark" effect="solid" />
      <Tooltip id="tooltip-about" place="bottom" type="dark" effect="solid" />
    </nav>
  );
}

export default Nav;
