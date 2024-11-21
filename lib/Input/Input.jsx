import { useState } from "react";
import PropTypes from "prop-types";
import { FiEye, FiEyeOff } from "react-icons/fi";
import "./Input.css";

const Input = ({
  type,
  label,
  placeholder,
  value,
  onChange,
  errorMessage,
  min,
  max,
  required,
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const [inputValue, setInputValue] = useState(value || "");
  const [error, setError] = useState("");

  const handleInputChange = (e) => {
    const { value } = e.target;
    setInputValue(value);
    onChange(value);

    // Validation logic
    if (required && !value) {
      setError(`${label || "This field"} is required`);
    } else if (
      type === "password" &&
      !/^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/.test(value)
    ) {
      setError(
        "Password must be at least 8 characters long and contain at least one number"
      );
    } else if (type === "email" && !/^\S+@\S+\.\S+$/.test(value)) {
      setError("Invalid email address");
    } else if (type === "number") {
      if (min !== undefined && value < min) setError(`Minimum value is ${min}`);
      else if (max !== undefined && value > max)
        setError(`Maximum value is ${max}`);
      else setError("");
    } else {
      setError("");
    }
  };

  return (
    <div className="input-field">
      {label && (
        <label className={`input-label ${disabled ? "label-disabled" : ""}`}>
          {label}
        </label>
      )}
      <div className="input-wrapper">
        <input
          type={showPassword && type === "password" ? "text" : type}
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
          disabled={disabled}
          min={type === "number" ? min : undefined}
          max={type === "number" ? max : undefined}
          className={`input-element ${error ? "input-error" : ""}`}
        />
        {type === "password" && !disabled && (
          <span
            className="password-toggle"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
      {!error && errorMessage && (
        <p className="error-message">{errorMessage}</p>
      )}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.oneOf(["text", "email", "number", "password"]).isRequired,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  required: PropTypes.bool,
  disabled: PropTypes.bool,
};

Input.defaultProps = {
  type: "text",
  label: "",
  placeholder: "",
  value: "",
  errorMessage: "",
  min: undefined,
  max: undefined,
  required: false,
  disabled: false,
};

export default Input;
