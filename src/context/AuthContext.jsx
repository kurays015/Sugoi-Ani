import { createContext, useReducer, useEffect, useState } from "react";
import useLogin from "../hooks/useLogin";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  const {
    mutateAsync: login,
    isPending: loginPending,
    isError: loginIsError,
    error: loginError,
  } = useLogin();

  const value = {
    error,
    setError,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    isPending,
    setIsPending,
    showLoginPassword,
    setShowLoginPassword,
    login,
    loginPending,
    loginIsError,
    loginError,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
