import { Navigate } from "react-router-dom";
import { LoginCheck } from "./auth";

function ProtectedRoute({ children }) {
  const { token, isLoggedIn } = LoginCheck();
  if (token && isLoggedIn) {
    return children;
  }
  return <Navigate to="/" replace />;
}

export default ProtectedRoute;
