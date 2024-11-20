import PropTypes from "prop-types";
import "./Avatar.css";

const Avatar = ({ src, size, shape, fallbackText }) => {
  return (
    <div
      className={`avatar avatar-${size} avatar-${shape}`}
      style={{ backgroundImage: src ? `url(${src})` : "none" }}
    >
      {!src && fallbackText && (
        <span className="avatar-fallback">{fallbackText}</span>
      )}
    </div>
  );
};

Avatar.propTypes = {
  src: PropTypes.string, // Image source URL
  alt: PropTypes.string, // Alt text for the avatar
  size: PropTypes.oneOf(["sm", "md", "lg", "xl"]), // Size of the avatar
  shape: PropTypes.oneOf(["circle", "square", "rounded"]), // Shape of the avatar
  fallbackText: PropTypes.string, // Text to display when image is unavailable
};

Avatar.defaultProps = {
  src: null,
  alt: "Avatar",
  size: "md",
  shape: "circle",
  fallbackText: "",
};

export default Avatar;
