import { useContext, createContext, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchContext = createContext();

export function useSearchContext() {
  return useContext(SearchContext);
}

export function SearchContextProvider({ children }) {
  const titleRef = useRef();
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    navigate(`/${titleRef.current.value}`);
  }

  const value = { titleRef, handleSearch };
  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
}
