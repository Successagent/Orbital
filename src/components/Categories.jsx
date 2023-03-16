import React from "react";

const Categories = ({ product }) => {
  return (
    <div className="category-sect">
      <h2>Top Categories</h2>
      <div className="category-products-sect">
        {product?.slice(0, 5).map((item, idx) => (
          <div key={idx}>
            <div>
              <img src={item.image[0].url} alt={item.name} />
            </div>
            <p className="product-name-text">{item.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
