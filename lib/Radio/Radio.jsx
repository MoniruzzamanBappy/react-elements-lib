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
            onChange={() => !disabled && onChange(option.value)}
            disabled={disabled}
            className="radio-input"
          />
          <span className="radio-custom" />
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
  ).isRequired,
  name: PropTypes.string.isRequired,
  selectedValue: PropTypes.any.isRequired, // Ensures the correct option is selected
  onChange: PropTypes.func.isRequired, // Handles changes in selection
  disabled: PropTypes.bool, // Disables the entire radio group
};

Radio.defaultProps = {
  disabled: false,
};

export default Radio;
