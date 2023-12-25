import { useAuthContext } from "../hooks/useAuthContext";
import Cookies from "js-cookie";

const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    Cookies.remove("user");
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};

export default useLogout;
