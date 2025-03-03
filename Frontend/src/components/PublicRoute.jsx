import { useContext } from "react";
import { Navigate } from "react-router-dom";
import AuthContext from "../context/AuthContext";

const PublicRoute = ({ children }) => {
  const { auth } = useContext(AuthContext);

  console.log("PublicRoute - Auth State:", auth); // Debug log

  return auth ? <Navigate to="/home" replace /> : children;
};

export default PublicRoute;
