import { createContext, useState } from "react";

export const CategoryContext = createContext();

export function CategoryContextProvider({ children }) {
  const [pageNumber, setPageNumber] = useState(1);

  const value = { pageNumber, setPageNumber };

  return (
    <CategoryContext.Provider value={value}>
      {children}
    </CategoryContext.Provider>
  );
}
