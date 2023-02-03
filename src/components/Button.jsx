import React from "react";

const Button = ({ title, icon }) => {
  return (
    <button className="btn">
      {title} {icon}
    </button>
  );
};

export default Button;
