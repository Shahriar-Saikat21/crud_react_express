import { useState, useEffect } from "react";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

const AuthContextProvider = ({ children }) => {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true); // Loading state to prevent premature navigation
  const navigate = useNavigate();

  const loginUser = async (data) => {
    
  };

  const logoutUser = async () => {
    
  };

  

  // Navigate to login if not authenticated and loading is done
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
