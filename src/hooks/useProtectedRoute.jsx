import Cookies from "js-cookie";
import { Navigate, useLocation } from "react-router-dom";

export default function useProtectedRoute() {
  const location = useLocation();
  const user =
    JSON.parse(Cookies.get("user") || null) || Cookies.get("googleUser");

  const ProtectedWatchLayoutRoute = ({ children }) => {
    return user ? children : <Navigate to="/user/login" replace={true} />;
  };

  const ProtectedLoginRoute = ({ children }) => {
    return !user && location.pathname === "/user/login" ? (
      children
    ) : (
      <Navigate to="/recent" replace={true} />
    );
  };

  return { ProtectedWatchLayoutRoute, ProtectedLoginRoute };
}
