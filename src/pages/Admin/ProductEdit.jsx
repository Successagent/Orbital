import React, { useEffect, useState } from "react";
import axios from "axios";
import { Footer, Header, PageHero } from "../../components";
import { useLocation, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";

import { useGlobalContext } from "../../context/context";
import { ToastContainer, toast } from "react-toastify";

const ProductEdit = () => {
  const [modal, setModal] = useState(1);
  const [loading, setLoading] = useState(false);
  const { hostUrl } = useGlobalContext();
  const [editProduct, setEditProduct] = useState([]);
  let { name, price, quantity, category, desc, sizes, image } = editProduct;
  let accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const [showImages, setShowImages] = useState(false);
  const { id } = useParams();

  const { pathname } = useLocation();

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const getCreatedProduct = async () => {
    try {
      const singleProduct = await axios.get(`${hostUrl}/api/product/${id}`);
      setEditProduct(singleProduct.data);
    } catch (error) {
      console.log(error);
    }
  };

  const notify = () => {
    toast("Updated Successfully");
  };

  const handleUpdateProduct = async (data) => {
    setLoading(true);
    const updatedProduct = data;
    updatedProduct.category = data.category ? data.category : category;
    updatedProduct.name = data.name ? data.name : name;
    updatedProduct.quantity = data.quantity ? data.quantity : quantity;
    updatedProduct.price = data.price ? data.price : price;
    updatedProduct.desc = data.desc ? data.desc : desc;

    try {
      const editedProduct = await axios.put(
        `${hostUrl}/api/product/update/${id}`,
        updatedProduct,
        {
          headers: { token: accessToken },
        }
      );
      console.log(editedProduct);
      if (editedProduct.status === 200) {
        notify();
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const toggleModal = (e) => {
    switch (e.target.id) {
      case "case-one":
        setModal(2);
        if (modal == 2) {
          setModal(1);
        }
        break;
    }
  };

  const toggleImage = () => {
    setShowImages(!showImages);
  };

  useEffect(() => {
    getCreatedProduct();
  }, []);

  return (
    <>
      <Header pathname={pathname} slug={id} />
      <PageHero page_title={"Admin Product Detail"} />
      <div className="admin-card">
        <section className="edit-product">
          <div className="admin-hero-header">
            <h2>Edit Product</h2>
            <button className="btn" id="case-one" onClick={toggleModal}>
              Edit
            </button>
          </div>
          <div
            className={`admin-hero-main-sect ${
              modal === 2 || modal === 3 || modal === 4 ? "open-modal" : ""
            }`}
          >
            <div className="admin-hero-main-item admin-hero-main-item-1">
              <h3>Category</h3>
              <input
                name="category"
                type="text"
                {...register("category")}
                defaultValue={editProduct ? editProduct.category : "Loading..."}
              />
            </div>
            <div className="admin-hero-main-item admin-hero-main-item-2">
              <h3>Product Name</h3>
              <input
                name="productName"
                type="text"
                id="productNname"
                {...register("name")}
                defaultValue={editProduct.name}
              />
            </div>
            <div className="admin-hero-main-item admin-hero-main-item-3">
              <h3>Description</h3>
              <input
                name="description"
                type="text"
                id="description"
                {...register("desc")}
                defaultValue={editProduct.desc}
              />
            </div>
            <div className="admin-hero-main-item admin-hero-main-item-5">
              <h3>Quantity</h3>
              <input
                name="quantity"
                type="text"
                id="quantity"
                {...register("quantity")}
                defaultValue={editProduct.quantity}
              />
            </div>
            <div className="admin-hero-main-item admin-hero-main-item-6">
              <h3>Price</h3>
              <input
                name="price"
                type="text"
                id="price"
                {...register("price")}
                defaultValue={editProduct.price}
              />
            </div>
            <button
              className="btn"
              onClick={handleSubmit((e) => handleUpdateProduct(e))}
              id="case-two"
            >
              {loading ? "Loading..." : "Save"}
            </button>
            <button className="btn green" id="case-one" onClick={toggleModal}>
              Close
            </button>
            <ToastContainer />
          </div>
        </section>
        <section className="admin-card">
          <div className="admin-card-header">
            <div>
              <p>Product Name</p>
            </div>
            <div>
              <p>Price</p>
            </div>
            <div>
              <p>Quantity</p>
            </div>
            <div>
              <p>Category</p>
            </div>
            <div>
              <p>Sizes</p>
            </div>
          </div>
        </section>
        <div className="admin-card-parent-con">
          <div onClick={toggleImage} className="admin-card-image-con">
            <img
              style={{ cursor: "pointer" }}
              src={image && image[0].url}
              alt={name}
            />
            <p>{editProduct.name}</p>
          </div>
          <div>
            <p>{price}</p>
          </div>
          <div>
            <p>{quantity}</p>
          </div>
          <div>
            <p>{category}</p>
          </div>
          <div>
            <p>{sizes}</p>
          </div>
        </div>
        <div
          onClick={toggleImage}
          className="edit-image-con"
          style={{ display: `${showImages == true ? "grid" : ""}` }}
        >
          {image?.map((item, idx) => {
            return (
              <div key={idx}>
                <img className="edit-image" src={item.url} alt="" />
              </div>
            );
          })}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProductEdit;
