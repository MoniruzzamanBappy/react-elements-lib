import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ checked, label, onChange, size, disabled }) => {
  return (
    <label
      className={`checkbox-wrapper checkbox-${size} ${
        disabled ? "checkbox-disabled" : ""
      }`}
    >
      <input
        type="checkbox"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="checkbox-input"
      />
      <span className="checkbox-custom">
        <svg
          className="checkbox-checkmark"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        >
          <polyline points="20 6 9 17 4 12" />
        </svg>
      </span>
      {label && <span className="checkbox-label">{label}</span>}
    </label>
  );
};

Checkbox.propTypes = {
  checked: PropTypes.bool, // Whether the checkbox is checked
  label: PropTypes.string, // Label for the checkbox
  onChange: PropTypes.func.isRequired, // Function to handle changes
  size: PropTypes.oneOf(["sm", "md", "lg"]), // Size of the checkbox
  disabled: PropTypes.bool, // Disable the checkbox
};

Checkbox.defaultProps = {
  checked: false,
  label: "",
  size: "md",
  disabled: false,
};

export default Checkbox;
