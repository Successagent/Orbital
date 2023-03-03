import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import OnImagesLoaded from "react-on-images-loaded";
import LoadingStyles from "./Loading.module.css";

function Loading(Page) {
  const HOC = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const { pathname } = useLocation();

    const hideLoader = () => {
      setIsLoading(false);
    };

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);
    return (
      <>
        <div
          className={`${LoadingStyles.container} ${
            isLoading ? "" : LoadingStyles.hidden
          }`}
        >
          <div className={LoadingStyles.spinner}></div>
          <p>Loading...</p>
        </div>
        <OnImagesLoaded
          onLoaded={hideLoader}
          onTimeout={hideLoader}
          timeout={3000}
        >
          <Page {...props} />
        </OnImagesLoaded>
      </>
    );
  };
  return HOC;
}

export default Loading;
