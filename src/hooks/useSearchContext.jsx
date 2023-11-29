import { useContext } from "react";
import { SearchContext } from "../context/SearchContext";
export function useSearchContext() {
  return useContext(SearchContext);
}
