import PropTypes from "prop-types";
import "./Badge.css";

const Badge = ({ content, position, color, size, children }) => {
  return (
    <div className="badge-container">
      {children}
      <span className={`badge badge-${color} badge-${size} badge-${position}`}>
        {content}
      </span>
    </div>
  );
};

Badge.propTypes = {
  content: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired, // Content inside the badge
  position: PropTypes.oneOf([
    "top-right",
    "top-left",
    "bottom-right",
    "bottom-left",
  ]), // Position of the badge
  color: PropTypes.oneOf([
    "primary",
    "secondary",
    "success",
    "warning",
    "error",
  ]),
  size: PropTypes.oneOf(["sm", "md", "lg"]),
  children: PropTypes.node, // Element to attach the badge to
};

Badge.defaultProps = {
  position: "top-right",
  color: "primary",
  size: "md",
};

export default Badge;
