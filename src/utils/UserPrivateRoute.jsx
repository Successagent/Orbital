import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const UserPrivateRoute = () => {
  const user = JSON.parse(sessionStorage.getItem("token"));
  return user ? <Outlet /> : <Navigate to={"/login"} />;
};

export default UserPrivateRoute;
