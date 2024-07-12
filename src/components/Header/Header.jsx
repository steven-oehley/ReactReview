import PropTypes from "prop-types";

import Nav from "./components/Nav";

function Header({
  text = "React Reviews ⚛︎",
  bgColor = "rgba(34, 34, 34, 0.6)",
  textColor = "rgba(205, 235, 0, 0.75)",
}) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h1 style={{ textShadow: "-1px -1px 1px #fff" }}>{text}</h1>
        <Nav />
      </div>
    </header>
  );
}

// default props can be passed in like this - will be deprecated soon
// OR they can be passsed in the same way as to JS function function --->  Header({ text = "Hello World!"}) { **** BEST APPROACH
/* Header.defaultProps = {
  text: "ReactReviews ⚛︎",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#FFD700",
};
 */
// Prop types to check types of props - good practice if not using TS

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
