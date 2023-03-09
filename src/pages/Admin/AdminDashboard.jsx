import React, { useEffect, useState } from "react";
import { Footer, Header, Newsletter, PageHero } from "../../components";
import { Link, useLocation } from "react-router-dom";
import Loading from "../../components/HOCs/Loading";
import axios from "axios";
import AdminCreatedProduct from "./AdminCreatedProduct";

const AdminDashboard = () => {
  const [modal, setModal] = useState(1);
  const [products, setProducts] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProducts");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProducts"))
      : [];
  });
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    sizes: [],
    images: [],
    price: "",
    category: "",
    quantity: "",
  });

  const getCreatedProduct = async () => {
    try {
      const newProducts = await axios.get("http://localhost:5000/api/product");
      setLoading(false);
      console.log(newProducts.data);
      setProducts(newProducts.data);
      sessionStorage.setItem(
        `createdProducts`,
        JSON.stringify(newProducts.data)
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleImageChange = (e) => {
    setFormData({ ...formData, images: e.target.files });
  };

  const handleCreateProduct = async (e) => {
    const sizesArray = formData.sizes.split(",").map((size) => size.trim());
    const newProductData = new FormData();
    newProductData.append("name", formData.productName);
    newProductData.append("desc", formData.description);
    newProductData.append("sizes", sizesArray);
    for (let i = 0; i < formData.images.length; i++) {
      newProductData.append("image", formData.images[i]);
    }
    newProductData.append("price", formData.price);
    newProductData.append("category", formData.category);
    newProductData.append("quantity", formData.quantity);

    try {
      const res = await axios.post(
        "http://localhost:5000/api/product",
        newProductData,
        {
          headers: {
            token:
              "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MDg5ZjUxOTUwOGMxMzk5MGE5NzIwZCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY3ODM1MTE0NywiZXhwIjoxNjc4NjEwMzQ3fQ.rvTdnX88UhVMObzRWyBjqRs0i9AEFSmH8kK9Ej_NZ90",
          },
        }
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
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

  const { pathname } = useLocation();

  useEffect(() => {
    getCreatedProduct();
  }, []);
  return (
    <section className="admin-dashboard">
      <Header pathname={pathname} />
      <PageHero page_title={"Admin"} />
      <div className="dashboard-intro">
        <h1>Dashboard</h1>
      </div>
      <section className="admin-hero">
        <div className="admin-hero-header">
          <h2>Create New Product</h2>
          <button className="btn" id="case-one" onClick={toggleModal}>
            Create
          </button>
        </div>
        <div
          className={`admin-hero-main-sect ${
            modal === 2 ||
            modal === 3 ||
            modal === 4 ||
            modal === 5 ||
            modal === 6 ||
            modal === 7 ||
            modal === 8
              ? "open-modal"
              : ""
          }`}
        >
          <div className="admin-hero-main-item admin-hero-main-item-1">
            <h3>Category</h3>
            <input name="category" type="text" onChange={handleChange} />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-2">
            <h3>Product Name</h3>
            <input
              name="productName"
              type="text"
              id="productNname"
              onChange={handleChange}
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-3">
            <h3>Description</h3>
            <input
              name="description"
              type="text"
              id="description"
              onChange={handleChange}
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-4">
            <h3>Sizes</h3>
            <input
              name="sizes"
              type="text"
              id="sizes"
              onChange={handleChange}
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-5">
            <h3>Quantity</h3>
            <input
              name="quantity"
              type="text"
              id="quantity"
              onChange={handleChange}
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-6">
            <h3>Price</h3>
            <input
              name="price"
              type="text"
              id="price"
              onChange={handleChange}
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-11">
            <h3>Images</h3>
            <input
              name="images"
              id="images"
              type="file"
              multiple="multiple"
              onChange={handleImageChange}
            />
          </div>
          <button className="btn" onClick={handleCreateProduct}>
            Save
          </button>
          <button className="btn green" id="case-one" onClick={toggleModal}>
            Close
          </button>
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
            <p>Status</p>
          </div>
        </div>
        <AdminCreatedProduct products={products} loading={loading} />
      </section>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default AdminDashboard;
