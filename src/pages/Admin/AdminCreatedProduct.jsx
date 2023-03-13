import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";

import { Link } from "react-router-dom";
import SkeLoading from "./SkeLoading";

const AdminCreatedProduct = ({ products, loading }) => {
  if (loading) return <SkeLoading />;
  return (
    <>
      {products &&
        products?.map((item, idx) => (
          <div className="admin-card-parent-con" key={idx}>
            <div className="admin-card-image-con">
              <img src={item.image[0].url} alt={item.city} />
              <p>{item.name}</p>
            </div>
            <div>
              <p>{item.price}</p>
            </div>
            <div>
              <p>{item.quantity}</p>
            </div>
            <div>
              <p>{item.category}</p>
            </div>
            <div>
              <BsTrash className="d-btn" />
              <Link to={`/admin/product/edit/${item._id}`}>
                <button className="e-btn">edit</button>
              </Link>
            </div>
          </div>
        ))}
    </>
  );
};

export default AdminCreatedProduct;
