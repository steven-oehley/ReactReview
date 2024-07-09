import PropTypes from "prop-types";

function Header({ text, bgColor, textColor }) {
  return (
    <header style={{ backgroundColor: bgColor, color: textColor }}>
      <div className="container">
        <h1>{text}</h1>
      </div>
    </header>
  );
}

// default props can be passed in like this
// OR they can be passsed in the same way as to JS function function Header({ text = "Hello World!"}) {
Header.defaultProps = {
  text: "ReactReviews ⚛︎",
  bgColor: "rgba(0,0,0,0.4)",
  textColor: "#FFD700",
};

// Prop types to check types of props - good practice if not using TS

Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
};

export default Header;
