import React from "react";

const AdminButton = ({ title, icon }) => {
  return (
    <button className="btn">
      {title} {icon}
    </button>
  );
};

export default AdminButton;
