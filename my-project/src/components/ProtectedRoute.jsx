// src/components/ProtectedRoute.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

// Optional prop to restrict to admin only
const ProtectedRoute = ({ children, adminOnly = false }) => {
  const { isLoggedIn } = useAuth();
  const isAdmin = localStorage.getItem("isAdmin") === "true";

  if (!isLoggedIn) {
    // Not logged in at all
    return <Navigate to="/login" replace />;
  }

  if (adminOnly && !isAdmin) {
    // Logged in but not an admin
    return <Navigate to="/" replace />;
  }

  // All checks passed
  return children;
};

export default ProtectedRoute;
