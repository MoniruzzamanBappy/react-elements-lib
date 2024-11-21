import { useState } from "react";
import PropTypes from "prop-types";
import "./Slider.css";

const Slider = ({ min, max, step, initialValue, type, onChange }) => {
  const [value, setValue] = useState(
    type === "multi" ? initialValue : initialValue[0]
  );

  const handleSingleChange = (e) => {
    const newValue = Number(e.target.value);
    setValue(newValue);
    onChange(newValue);
  };

  const handleMultiChange = (index, e) => {
    const newValue = [...value];
    newValue[index] = Number(e.target.value);
    newValue.sort((a, b) => a - b); // Ensure range order
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <div className="slider-container">
      <div className="value-indicator">
        {type === "multi" ? (
          value.map((v, i) => (
            <div
              key={i}
              className="dot-indicator"
              style={{
                left: `${((v - min) / (max - min)) * 100}%`,
              }}
            >
              {v}
            </div>
          ))
        ) : (
          <div
            className="dot-indicator"
            style={{
              left: `${((value - min) / (max - min)) * 100}%`,
            }}
          >
            {value}
          </div>
        )}
      </div>
      {type === "multi" ? (
        <>
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[0]}
            onChange={(e) => handleMultiChange(0, e)}
            className="slider"
          />
          <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value[1]}
            onChange={(e) => handleMultiChange(1, e)}
            className="slider"
          />
        </>
      ) : (
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={handleSingleChange}
          className="slider"
        />
      )}
    </div>
  );
};

Slider.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number,
  initialValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.arrayOf(PropTypes.number),
  ]).isRequired,
  type: PropTypes.oneOf(["single", "multi"]),
  onChange: PropTypes.func.isRequired,
};

Slider.defaultProps = {
  step: 1,
  type: "single",
};

export default Slider;
