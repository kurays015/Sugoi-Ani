import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
export const useSearchContext = () => {
  return useContext(SearchContext);
};
