import React, { useEffect, useState } from "react";
import { PageHero } from "../../components";
import { useLocation } from "react-router-dom";
import axios from "axios";
import AdminCreatedProduct from "./AdminCreatedProduct";
import { useGlobalContext } from "../../context/context";
import AdminHeader from "./AdminHeader";
import { ToastContainer, toast } from "react-toastify";
import AdminFooter from "./AdminFooter";
import AdminNewsletter from "./AdminNewsletter";

const AdminDashboard = () => {
  const [modal, setModal] = useState(1);
  let accessToken = JSON.parse(sessionStorage.getItem("admin"));
  const [products, setProducts] = useState(() => {
    const sessionStorageProduct = sessionStorage.getItem("createdProducts");
    return sessionStorageProduct
      ? JSON.parse(sessionStorage.getItem("createdProducts"))
      : [];
  });
  const { hostUrl } = useGlobalContext();
  const [loading, setLoading] = useState(true);
  const [createLoader, setCreateLoader] = useState(false);
  const [formData, setFormData] = useState({
    productName: "",
    description: "",
    shortDesc: "",
    sizes: [],
    images: [],
    price: "",
    category: "",
    quantity: "",
  });

  const notify = () => {
    toast("Product Created Successfully");
  };

  const getCreatedProduct = async () => {
    try {
      const newProducts = await axios.get(`${hostUrl}/api/product`);
      setLoading(false);

      setProducts(newProducts.data);
      sessionStorage.setItem(
        `createdProducts`,
        JSON.stringify(newProducts.data)
      );
      localStorage.setItem(`createdProducts`, JSON.stringify(newProducts.data));
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

  const handleCreateProduct = async () => {
    setCreateLoader(true);

    const sizesArray = formData.sizes.split(",").map((size) => size.trim());
    const newProductData = new FormData();
    newProductData.append("name", formData.productName);
    newProductData.append("shortDesc", formData.shortDesc);
    newProductData.append("sizes", sizesArray);
    for (let i = 0; i < formData.images.length; i++) {
      newProductData.append("image", formData.images[i]);
    }
    newProductData.append("price", formData.price);
    newProductData.append("category", formData.category);
    newProductData.append("quantity", formData.quantity);

    try {
      const res = await axios.post(`${hostUrl}/api/product`, newProductData, {
        headers: {
          token: accessToken,
        },
      });
      console.log(res.data);
      if (res.status === 200) {
        notify();

        setCreateLoader(false);
        getCreatedProduct();
      }
    } catch (error) {
      setCreateLoader(false);
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
      <AdminHeader pathname={pathname} />
      <PageHero page_title={"Admin"} />
      <div className="dashboard-intro">
        <h1>Dashboard</h1>
      </div>
      {accessToken && (
        <>
          <section className="admin-hero">
            <div className="admin-hero-header">
              <h2>Create New Product</h2>
              <button className="btn" id="case-one" onClick={toggleModal}>
                Create New Prduct
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
              <div className="admin-hero-main-item admin-hero-main-item-2">
                <h3>Brief Description</h3>
                <input
                  name="shortDesc"
                  type="text"
                  id="shortDesc"
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
                  multiple
                  onChange={handleImageChange}
                />
              </div>
              <button
                className="btn"
                onClick={handleCreateProduct}
                id="case-one"
              >
                {createLoader ? "Loading..." : "Save"}
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
                <p>Status</p>
              </div>
            </div>
            <AdminCreatedProduct
              products={products}
              loading={loading}
              setProducts={setProducts}
            />
            <ToastContainer />
          </section>
        </>
      )}
      <AdminNewsletter />
      <AdminFooter />
    </section>
  );
};

export default AdminDashboard;
