import { FavoriteContext } from "../hooks/useFavorites";
import { useLocalStorage } from "../hooks/useLocalStorage";

export function FavoriteContextProvider({ children }) {
  const [addToFavorites, setAddToFavorites] = useLocalStorage("isAdded", {});
  const [favorites, setFavorites] = useLocalStorage("favorites", []);

  const handleAddToFavorite = (id, image, title) => {
    setAddToFavorites(prev => ({ ...prev, [id]: true }));

    if (!favorites.some(favorite => favorite.id === id)) {
      setFavorites([...favorites, { id, image, title }]);
    }
  };
  const handleRemoveToFavorites = id => {
    setAddToFavorites(prev => ({ ...prev, [id]: false }));
    setFavorites(prevFavorites =>
      prevFavorites.filter(favorite => favorite.id !== id)
    );
  };

  const value = {
    addToFavorites,
    handleAddToFavorite,
    handleRemoveToFavorites,
    favorites,
    setFavorites,
    setAddToFavorites,
  };
  return (
    <FavoriteContext.Provider value={value}>
      {children}
    </FavoriteContext.Provider>
  );
}
