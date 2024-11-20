import PropTypes from "prop-types";
import { useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import "./Accordion.css";

const Accordion = ({ items, allowMultipleOpen }) => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const handleToggle = (index) => {
    if (allowMultipleOpen) {
      setOpenIndexes((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index)
          : [...prev, index]
      );
    } else {
      setOpenIndexes((prev) => (prev.includes(index) ? [] : [index]));
    }
  };

  return (
    <div className="accordion">
      {items.map((item, index) => (
        <div key={index} className="accordion-item">
          <button
            className={`accordion-header ${
              openIndexes.includes(index) ? "open" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <span>{item.title}</span>
            <span
              className={`accordion-icon ${
                openIndexes.includes(index) ? "rotate" : ""
              }`}
            >
              <FiChevronDown />
            </span>
          </button>
          <div
            className={`accordion-content ${
              openIndexes.includes(index) ? "open" : ""
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

Accordion.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      content: PropTypes.node.isRequired,
    })
  ).isRequired,
  allowMultipleOpen: PropTypes.bool,
};

Accordion.defaultProps = {
  allowMultipleOpen: false,
};

export default Accordion;
