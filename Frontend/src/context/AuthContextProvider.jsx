import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "../utilities/axios";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // Authentication state
  const [loading, setLoading] = useState(true); // Loading state
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = () => {
      const accessToken = sessionStorage.getItem("is_loggedin");
      console.log("Access Token Found:", accessToken); // Debug log
      setAuth(!!accessToken); // Set auth to true if token exists
      setLoading(false);
    };

    checkSession();
  }, []);

  const loginUser = async (data) => {
    try {
      const response = await axios.post("/login", data, { withCredentials: true });
      sessionStorage.setItem("is_loggedin", response.data.success);
      setAuth(true);
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message || "Unknown error");
    }
  };

  const logoutUser = async () => {
    try {
      await axios.post("/logout", {}, { withCredentials: true });
      sessionStorage.removeItem("is_loggedin");
      setAuth(false);
      navigate("/");
    } catch (error) {
      console.error("Error during logout:", error);
      alert("Something went wrong. Please try again later.");
    }
  };

  return (
    <AuthContext.Provider value={{ auth, loginUser, logoutUser }}>
      {!loading ? children : <p>Loading...</p>} {/* Prevent rendering until loading is done */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
