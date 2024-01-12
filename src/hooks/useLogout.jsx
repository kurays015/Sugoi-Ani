import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const navigate = useNavigate();
  const logout = () => {
    Cookies.remove("user");
    Cookies.remove("googleUser");
    navigate("/recent");
  };

  return { logout };
};

export default useLogout;
