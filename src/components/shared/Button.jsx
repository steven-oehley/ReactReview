import PropTypes from "prop-types";

const Button = ({
  variant,
  onClick = () => {},
  disabled = false,
  children,
  className = "",
}) => {
  return (
    <button
      className={`btn ${variant} ${className}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "danger",
    "modal-yes",
    "modal-no",
    "modal-close",
  ]).isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Button;
