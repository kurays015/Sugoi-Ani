import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export function useAuthContext() {
  return useContext(AuthContext);
}
