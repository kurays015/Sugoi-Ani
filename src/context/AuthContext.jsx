import {
  createContext,
  useReducer,
  useContext,
  useState,
  useEffect,
} from "react";

const AuthContext = createContext();

export function useAuthContext() {
  return useContext(AuthContext);
}

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "LOGIN", payload: user });
    }
  }, []);

  console.log(user)

  return (
    <AuthContext.Provider value={{ ...user, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
}
