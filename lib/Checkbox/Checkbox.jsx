import PropTypes from "prop-types";
import "./Checkbox.css";

const Checkbox = ({ label, checked, onChange, disabled, id }) => {
  return (
    <div
      className={`checkbox-container ${disabled ? "checkbox-disabled" : ""}`}
    >
      <input
        type="checkbox"
        id={id}
        checked={checked}
        onChange={(e) => !disabled && onChange(e.target.checked)}
        disabled={disabled}
        className="checkbox-input"
      />
      <label htmlFor={id} className="checkbox-label">
        <span className="checkbox-custom" />
        {label}
      </label>
    </div>
  );
};

Checkbox.propTypes = {
  label: PropTypes.string, // Label text for the checkbox
  checked: PropTypes.bool.isRequired, // Whether the checkbox is checked
  onChange: PropTypes.func.isRequired, // Callback when checkbox state changes
  disabled: PropTypes.bool, // Disable the checkbox
  id: PropTypes.string, // Unique ID for the checkbox
};

Checkbox.defaultProps = {
  label: "",
  disabled: false,
  id: `checkbox-${Math.random()}`, // Generate a unique ID if not provided
};

export default Checkbox;
