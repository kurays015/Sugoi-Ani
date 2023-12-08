import { createContext, useContext } from "react";

export const FavoriteContext = createContext();

export const useFavorites = () => {
  return useContext(FavoriteContext);
};
