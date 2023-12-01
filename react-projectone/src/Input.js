import React from "react";

const Input = ({ color, darkText, setDarkText, setColor }) => {
  return (
    <div className="colorChange">
      <input
        type="text"
        className="color"
        value={color}
        onChange={(e) => {
          setColor(e.target.value);
        }}
      />
      <button className="btn" onClick={() => setDarkText(!darkText)}>
        Toggle Text Color
      </button>
    </div>
  );
};

export default Input;
