import { Navigate } from "react-router-dom";
import Auth from "../../screens/Auth";
import { LoginCheck } from "./auth";

function HomeLayout() {
  const { token, isLoggedIn } = LoginCheck();
  if (token && isLoggedIn) {
    return <Navigate to="/todos" replace />;
  }
  return <Auth />;
}

export default HomeLayout;
