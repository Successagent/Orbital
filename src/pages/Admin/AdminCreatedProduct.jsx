import React, { useState } from "react";
import { BsTrash } from "react-icons/bs";
import axios from "axios";

import { Link } from "react-router-dom";
import SkeLoading from "./SkeLoading";
import Loading from "../../components/HOCs/Loading";

const AdminCreatedProduct = ({ products, loading, setProducts }) => {
  let { accessToken } = JSON.parse(localStorage.getItem("admin"));
  const [isLoading, setIsLoading] = useState(false);

  // Delete Product
  const deleteProduct = async (id) => {
    setIsLoading(true);
    try {
      const removeProduct = await axios.post(
        `http://localhost:5000/api/product/delete/${id}`,
        { id: id },
        { headers: { token: accessToken } }
      );
      console.log(removeProduct);
      if (removeProduct.status === 200) {
        setProducts(products.filter((item) => item._id !== id));
      }
    } catch (error) {
      console.log(error);
    }
    setIsLoading(false);
  };
  if (loading || isLoading === true) return <SkeLoading />;
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
              <BsTrash
                className="d-btn"
                onClick={() => deleteProduct(item._id)}
              />
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
