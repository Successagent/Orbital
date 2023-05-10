import React from "react";
import Skeleton from "react-loading-skeleton";

const ProductSkeleton = () => {
  const products = JSON.parse(localStorage.getItem("products"));
  console.log(products);

  return (
    <>
      {products &&
        products.map((item, idx) => (
          <div key={idx} className="product-item">
            <Skeleton className="status" width={40} height={40} />
            <div className="product-item-first-con">
              <div className="product-image-con">
                <Skeleton width={300} height={300} />
              </div>
              {/* <div className="product-search-con">
      <div className="product-svg-con" id="svg-con-1">
        <Skeleton width={200} height={10} />
      </div>
      <div className="product-svg-con" id="svg-con-2">
        <Skeleton width={150} height={20} />
      </div>
    </div> */}
            </div>
            <div className="product-item-two-con">
              <p className="product-name-text">
                <Skeleton width={200} height={15} />
              </p>
              <h3 className="product-price">
                <Skeleton width={150} height={25} />
              </h3>
              <div style={{ display: "flex" }} className="product-rate-con">
                <Skeleton width={25} height={25} />
                <Skeleton width={25} height={25} />
                <Skeleton width={25} height={25} />
                <Skeleton width={25} height={25} />
                <Skeleton width={25} height={25} />
              </div>
            </div>
          </div>
        ))}
    </>
  );
};

export default ProductSkeleton;
