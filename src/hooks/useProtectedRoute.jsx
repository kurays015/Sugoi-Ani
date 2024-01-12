import { Navigate, useLocation } from "react-router-dom";
import { getCookies } from "./useCookies";

export default function useProtectedRoute() {
  const location = useLocation();
  const user = getCookies("user") || getCookies("googleUser") || null;

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
