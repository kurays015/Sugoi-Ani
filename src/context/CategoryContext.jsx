import { createContext, useContext, useState, useEffect } from "react";

const CategoryContext = createContext();

export function useCategoryContext() {
  return useContext(CategoryContext);
}

export function CategoryContextProvider({ children }) {
  const [pageNumber, setPageNumber] = useState(1);
  const itemsPerPage = 20;

  const value = { pageNumber, itemsPerPage, setPageNumber };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
