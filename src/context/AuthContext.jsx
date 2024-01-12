import { createContext, useRef, useState } from "react";
import useLogin from "../hooks/useLogin";
import useSignUp from "../hooks/useSignup";

export const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();

  const { mutateAsync: login, isPending: loginPending } = useLogin();

  const { mutateAsync: signUp, isPending: signUpIsPending } = useSignUp();

  const value = {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    showLoginPassword,
    setShowLoginPassword,
    login,
    loginPending,
    signUp,
    signUpIsPending,
    emailRef,
    passwordRef,
    confirmPasswordRef,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
