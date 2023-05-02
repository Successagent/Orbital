import React from "react";

const Filter = ({ placeholder }) => {
  return (
    <form className="order_search_container">
      <h3>Orders</h3>
      <input type="text" placeholder={placeholder} />
      <button className="btn">Search</button>
    </form>
  );
};

export default Filter;
