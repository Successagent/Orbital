import React from "react";
import { Outlet, Navigate } from "react-router-dom";

const PrivateRoutes = () => {
  const token = JSON.parse(sessionStorage.getItem("admin"));
  return token ? <Outlet /> : <Navigate to={"/admin_login"} />;
};

export default PrivateRoutes;
