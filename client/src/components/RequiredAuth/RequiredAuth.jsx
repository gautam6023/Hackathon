import React from "react";
import { useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

export const RequiredAuth = ({ children }) => {
  const { user } = useSelector((state) => state.isAuth);
  const location = useLocation();
  console.log(user, "user in REquierd");

  return user.firstName ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
