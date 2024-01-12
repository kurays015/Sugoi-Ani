import { useNavigate } from "react-router-dom";
import { removeCookies } from "./useCookies";

const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    removeCookies("user");
    removeCookies("googleUser");
    navigate("/user/login");
  };

  return { logout };
};

export default useLogout;
