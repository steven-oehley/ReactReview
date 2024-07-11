import PropTypes from "prop-types";

function Card({ children, reverse = false }) {
  return <div className={reverse ? "card reverse" : "card"}>{children}</div>;
}

// defaultProps will be ddeprecated

/* Card.defaultProps = {
  reverse: false,
}; */

Card.propTypes = {
  reverse: PropTypes.bool,
  children: PropTypes.node,
};

export default Card;
