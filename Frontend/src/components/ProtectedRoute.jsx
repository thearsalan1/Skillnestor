// ProtectedRoute.jsx
// Create this file in your components folder

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("token"); // Change 'token' to your actual key name

    if (!token) {
      // Redirect to home page if no token found
      navigate("/");
    }
  }, [navigate]);

  // If token exists, render the protected component
  return children;
};

export default ProtectedRoute;
