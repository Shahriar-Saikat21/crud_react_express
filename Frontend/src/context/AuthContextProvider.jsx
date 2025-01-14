import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "../utilities/axios"; 

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false); // Authentication state
  const [loading, setLoading] = useState(true); // Loading state to prevent premature navigation
  const navigate = useNavigate();

  // Check sessionStorage for tokens on initial render
  useEffect(() => {
    const checkSession = () => {
      const accessToken = sessionStorage.getItem("is_loggedin");
      if (accessToken) {
        setAuth(true);
      } else {
        setAuth(false);
      }
      setLoading(false); 
    };

    checkSession();
  }, []);

  const loginUser = async (data) => {
    try {
      const response = await axios.post("/login", data, {
        withCredentials: true, 
      });

      // Save tokens to sessionStorage
      sessionStorage.setItem("is_loggedin", response.data.success);

      // Update auth state
      setAuth(true);

      // Redirect to a protected route (e.g., Dashboard)
      navigate("/home");
    } catch (error) {
      console.error("Login failed:", error.message || "Unknown error");
    }
  };

  const logoutUser = async () => {
    try {
        const response = await axios.post('/logout', {}, { withCredentials: true });
  
        // Save tokens to sessionStorage
        sessionStorage.setItem("is_loggedin", response.data.success);
  
        // Clear sessionStorage and update auth state
        sessionStorage.removeItem("is_loggedin");
        setAuth(false);
        navigate("/");
      } catch (error) {
        console.error("Error during logout:", error);
        alert("Something went wrong. Please try again later.");
      } 
  };

  // Redirect to login if not authenticated and loading is done
  useEffect(() => {
    if (!loading && !auth) {
      console.log("Redirecting to login page.");
      navigate("/"); // Redirect to login only if not authenticated and loading is complete
    }
  }, [auth, loading, navigate]);

  return (
    <AuthContext.Provider value={{ auth, loginUser, logoutUser }}>
      {!loading && children} {/* Render children only if loading is false */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
