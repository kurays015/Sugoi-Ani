import { createContext, useReducer, useEffect, useState } from "react";

export const AuthContext = createContext();

function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      return { user: action.payload };
    case "LOGOUT":
      return { user: null };
    default:
      return state;
  }
}

export function AuthContextProvider({ children }) {
  const [user, dispatch] = useReducer(reducer, { user: null });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    const user = JSON.parse(sessionStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log(user);

  const value = {
    ...user,
    dispatch,
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
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
