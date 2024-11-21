import PropTypes from "prop-types";
import { FiCheckCircle, FiInfo, FiXCircle } from "react-icons/fi";
import { TiWarning } from "react-icons/ti";
import "./Badge.css";

const Badge = ({ text, type, size, isShowIcon }) => {
  const getPredefinedIcon = () => {
    switch (type) {
      case "success":
        return <FiCheckCircle className="badge-icon" />;
      case "error":
        return <FiXCircle className="badge-icon" />;
      case "warning":
        return <TiWarning className="badge-icon" />;
      case "info":
        return <FiInfo className="badge-icon" />;
      default:
        return null; // No icon for other variants
    }
  };

  return (
    <span className={`badge badge-${type} badge-${size} `}>
      {isShowIcon && getPredefinedIcon()}
      {text}
    </span>
  );
};

Badge.propTypes = {
  text: PropTypes.string.isRequired, // The text inside the badge
  type: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "error",
    "warning",
    "info",
    "light",
    "dark",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  isShowIcon: PropTypes.bool,
};

Badge.defaultProps = {
  type: "primary",
  size: "md",
  isShowIcon: true,
};

export default Badge;
