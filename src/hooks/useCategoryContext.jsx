import { useContext } from "react";
import { CategoryContext } from "../context/CategoryContext";

export function useCategoryContext() {
  return useContext(CategoryContext);
}
