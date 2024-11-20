import PropTypes from "prop-types";
import "./Radio.css";

const Radio = ({ options, name, selectedValue, onChange, disabled }) => {
  return (
    <div className={`radio-group ${disabled ? "radio-group-disabled" : ""}`}>
      {options.map((option, index) => (
        <label
          key={index}
          className={`radio-label ${disabled ? "radio-disabled" : ""}`}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={selectedValue === option.value}
            onChange={(e) => !disabled && onChange(e.target.value)}
            disabled={disabled}
            className="radio-input"
          />
          <span className="radio-custom"></span>
          {option.label}
        </label>
      ))}
    </div>
  );
};

Radio.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired, // Array of options with label and value
  name: PropTypes.string.isRequired, // Name for the radio group
  selectedValue: PropTypes.any, // Currently selected value
  onChange: PropTypes.func.isRequired, // Callback for selection change
  disabled: PropTypes.bool, // Disable the radio group
};

Radio.defaultProps = {
  selectedValue: null,
  disabled: false,
};

export default Radio;
