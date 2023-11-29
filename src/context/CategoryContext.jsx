import { createContext, useState } from "react";

export const CategoryContext = createContext();

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
