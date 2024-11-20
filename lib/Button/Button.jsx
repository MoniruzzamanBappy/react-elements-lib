import PropTypes from "prop-types";
import { useRef } from "react";

import "./Button.css";

const Button = ({
  label = "",
  onClick = () => {},
  variant = "primary",
  className = "",
  ...restProps
}) => {
  const buttonRef = useRef(null);

  const handleClick = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    // Create the ripple element
    const ripple = document.createElement("span");
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    ripple.style.width = ripple.style.height = `${diameter}px`;
    ripple.style.left = `${e.clientX - rect.left - radius}px`;
    ripple.style.top = `${e.clientY - rect.top - radius}px`;
    ripple.className = "ripple";

    // Add the ripple element to the button
    const existingRipple = button.getElementsByClassName("ripple")[0];
    if (existingRipple) {
      existingRipple.remove(); // Remove existing ripple if present
    }

    button.appendChild(ripple);

    // Call the onClick handler passed as a prop
    onClick(e);
  };

  return (
    <button
      ref={buttonRef}
      onClick={handleClick}
      className={`btn btn-${variant} ${className}`}
      {...restProps}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  variant: PropTypes.oneOf([
    "primary",
    "secondary",
    "tertiary",
    "danger",
    "warning",
    "success",
    "info",
    "light",
    "dark",
    "link",
    "outline-primary",
    "outline-secondary",
    "outline-tertiary",
    "outline-danger",
    "outline-warning",
    "outline-success",
    "outline-info",
    "outline-light",
    "outline-dark",
    "outline-link",
  ]),
  label: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
