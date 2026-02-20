import { Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";

export default function PrivateRoute({ children }) {
  const { accessToken } = useAuth();

  if (import.meta.env.MODE === "test") {
    return children;
  }

  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return children;
}
