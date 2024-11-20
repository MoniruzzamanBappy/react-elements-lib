import PropTypes from "prop-types";
import {
  FiAlertCircle,
  FiCheckCircle,
  FiInfo,
  FiXCircle,
} from "react-icons/fi";
import "./Alert.css";

const Alert = ({ type, message, onClose }) => {
  const getIcon = () => {
    switch (type) {
      case "success":
        return <FiCheckCircle className="alert-icon success" />;
      case "error":
        return <FiXCircle className="alert-icon error" />;
      case "warning":
        return <FiAlertCircle className="alert-icon warning" />;
      case "info":
      default:
        return <FiInfo className="alert-icon info" />;
    }
  };

  return (
    <div className={`alert alert-${type}`}>
      <div className="alert-content">
        {getIcon()}
        <span className="alert-message">{message}</span>
      </div>
      {onClose && (
        <button className="alert-close" onClick={onClose}>
          ×
        </button>
      )}
    </div>
  );
};

Alert.propTypes = {
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  message: PropTypes.string.isRequired,
  onClose: PropTypes.func,
};

Alert.defaultProps = {
  type: "info",
  onClose: null,
};

export default Alert;
