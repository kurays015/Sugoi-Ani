import { createContext, useRef } from "react";
import { useNavigate } from "react-router-dom";

export const SearchContext = createContext();

export function SearchContextProvider({ children }) {
  const titleRef = useRef();
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    titleRef.current.value = "";
    navigate(`/${titleRef.current.value}`);
  }

  const value = { titleRef, handleSubmit };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
