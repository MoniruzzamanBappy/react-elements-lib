import { useState, useRef, useEffect } from "react";
import PropTypes from "prop-types";
import "./Dropdown.css";

const Dropdown = ({ options, label, onSelect, placeholder, disabled }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const dropdownRef = useRef(null);

  const handleToggle = () => {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  };

  const handleOptionClick = (option) => {
    setSelected(option);
    onSelect(option);
    setIsOpen(false);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className={`dropdown ${disabled ? "dropdown-disabled" : ""}`}
    >
      <button
        type="button"
        className={`dropdown-button ${isOpen ? "active" : ""}`}
        onClick={handleToggle}
      >
        {selected ? selected.label : placeholder || label}
      </button>
      {isOpen && (
        <ul className="dropdown-menu">
          {options.map((option, index) => (
            <li
              key={index}
              className="dropdown-item"
              onClick={() => handleOptionClick(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.any.isRequired,
    })
  ).isRequired, // Array of options with label and value
  label: PropTypes.string, // Label for the dropdown button
  onSelect: PropTypes.func.isRequired, // Callback for selecting an option
  placeholder: PropTypes.string, // Placeholder text when no selection is made
  disabled: PropTypes.bool, // Disable the dropdown
};

Dropdown.defaultProps = {
  label: "Select an option",
  placeholder: null,
  disabled: false,
};

export default Dropdown;
