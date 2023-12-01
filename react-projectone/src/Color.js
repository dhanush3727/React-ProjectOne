import React from "react";

const Color = ({ color, darkText }) => {
  return (
    <div
      className="square"
      style={{
        backgroundColor: color,
      }}
    >
      <p style={{ color: darkText ? "#fff" : "#000" }}>
        {color ? color : "Empty Value"}
      </p>
    </div>
  );
};
Color.defaultProps = {
  color: "Empty Value",
};
export default Color;
