import React, { useEffect, useState } from "react";
import {
  Footer,
  Header,
  MobileNavbar,
  Navbar,
  Newsletter,
  PageHero,
} from "../../components";
import { useLocation } from "react-router-dom";

const AdminDashboard = () => {
  const [modal, setModal] = useState(1);
  const [mainAdminData, setMainAdminData] = useState([]);
  const [adminProduct, setAdminProduct] = useState([
    {
      headerDescription: "",
      listingType: "Rent",
      propertyType: "",
      measurementUnit: "",
      askingPrice: "",
      marketValue: "",
      state: "",
      city: "",
      locationName: "",
      landSize: "",
    },
  ]);

  // const changeHandle = (e) => {
  //   setAdminProduct({ ...adminProduct, [e.target.name]: e.target.value });
  // };

  const {
    headerDescription,
    listingType,
    propertyType,
    measurementUnit,
    askingPrice,
    marketValue,
    state,
    city,
    locationName,
    landSize,
  } = adminProduct;

  const handleAdminData = () => {
    setMainAdminData([
      ...mainAdminData,
      {
        headerDescription,
        listingType,
        propertyType,
        measurementUnit,
        askingPrice,
        marketValue,
        state,
        city,
        locationName,
        landSize,
      },
    ]);
  };

  const toggleModal = (e) => {
    switch (e.target.id) {
      case "case-one":
        setModal(2);
        if (modal == 2) {
          setModal(1);
        }
        break;
      case "listing-type":
        setModal(4);
        if (modal == 4) {
          setModal(3);
        }
        break;
      case "property-type":
        setModal(6);
        if (modal == 6) {
          setModal(5);
        }
        break;
      case "measurement-unit":
        setModal(8);
        if (modal == 8) {
          setModal(7);
        }
        break;
      case null:
        setModal(7) || setModal(5) || setModal(3);
        break;
    }
  };

  const { pathname } = useLocation();
  return (
    <section className="admin-dashboard">
      <Header pathname={pathname} />
      <PageHero page_title={"Admin"} />
      <div className="dashboard-intro">
        <h1>Dashboard</h1>
      </div>
      <section className="admin-hero">
        <div className="admin-hero-header">
          <h2>Add New Propertity</h2>
          <button className="btn" id="case-one" onClick={toggleModal}>
            Add
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
            <h3>Header Description</h3>
            <input
              name="header-desc"
              type="text"
              defaultValue={adminProduct.headerDescription}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  headerDescription: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-2">
            <h3>Listing Type</h3>
            <input
              name="list-type"
              type="text"
              id="listing-type"
              defaultValue={adminProduct.listingType}
              onClick={toggleModal}
            />
            <div
              className={`listing-type ${modal == 4 ? "open-dropdown" : ""}`}
            >
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    listingType: e.target.innerText,
                  })
                }
              >
                Rent
              </li>
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    listingType: e.target.innerText,
                  })
                }
              >
                Sale
              </li>
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    listingType: e.target.innerText,
                  })
                }
              >
                Sale & Rent
              </li>
            </div>
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-3">
            <h3>Property Type</h3>
            <input
              name="property-type"
              type="text"
              defaultValue={adminProduct.propertyType}
              id="property-type"
              onClick={toggleModal}
            />
            <div
              className={`listing-type ${modal == 6 ? "open-dropdown" : ""}`}
            >
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    propertyType: e.target.innerText,
                  })
                }
              >
                Industrial
              </li>
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    propertyType: e.target.innerText,
                  })
                }
              >
                Commercial
              </li>
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    propertyType: e.target.innerText,
                  })
                }
              >
                Residential
              </li>
            </div>
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-4">
            <h3>Measurement Unit</h3>
            <input
              name="measurement-unit"
              type="text"
              defaultValue={adminProduct.measurementUnit}
              id="measurement-unit"
              onClick={toggleModal}
            />
            <div
              className={`listing-type ${modal === 8 ? "open-dropdown" : ""}`}
            >
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    measurementUnit: e.target.innerText,
                  })
                }
              >
                Sq Ft
              </li>
              <li
                onClick={(e) =>
                  setAdminProduct({
                    ...adminProduct,
                    measurementUnit: e.target.innerText,
                  })
                }
              >
                Sq m
              </li>
            </div>
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-5">
            <h3>Land Size</h3>
            <input
              name="land-size"
              type="text"
              defaultValue={adminProduct.landSize}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  landSize: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-6">
            <h3>Asking Price (RM)</h3>
            <input
              name="asking-price"
              type="text"
              defaultValue={adminProduct.askingPrice}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  askingPrice: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-7">
            <h3>Market Value (RM)</h3>
            <input
              name="market-value"
              type="text"
              defaultValue={adminProduct.marketValue}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  marketValue: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-8">
            <h3>State</h3>
            <input
              name="state"
              type="text"
              defaultValue={adminProduct.state}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  state: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-9">
            <h3>City</h3>
            <input
              name="city"
              type="text"
              defaultValue={adminProduct.city}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  city: e.target.value,
                })
              }
            />
          </div>
          <div className="admin-hero-main-item admin-hero-main-item-10">
            <h3>Location Name</h3>
            <input
              name="location-name"
              type="text"
              defaultValue={adminProduct.locationName}
              onChange={(e) =>
                setAdminProduct({
                  ...adminProduct,
                  locationName: e.target.value,
                })
              }
            />
          </div>
          <button className="btn" onClick={handleAdminData}>
            Save
          </button>
          <button className="btn green" id="case-one" onClick={toggleModal}>
            Close
          </button>
        </div>
      </section>
      <section className="admin-card">
        {mainAdminData.map((item, idx) => (
          <div className="admin-card-parent-con" key={idx}>
            <p>{item.listingType}</p>
            <p>{item.headerDescription}</p>
            <p>{item.landSize}</p>
            <p>{item.city}</p>
            <p>{item.locationName}</p>
            <p>{item.state}</p>
            <p>{item.measurementUnit}</p>
            <p>{item.askingPrice}</p>
            <p>{item.marketValue}</p>
          </div>
        ))}
      </section>
      <Newsletter />
      <Footer />
    </section>
  );
};

export default AdminDashboard;
