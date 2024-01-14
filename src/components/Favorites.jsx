import { useFavorites } from "../hooks/useFavorites";
import Card from "./Card";
import spongebob from "/images/spongebob.png";

function Favorites() {
  const { favorites, setFavorites, setAddToFavorites } = useFavorites();

  return (
    <>
      <h1 className="mb-5 text-center text-xl">My Favorites</h1>
      <button
        className="text-end w-full hover:text-violet-300"
        onClick={() => {
          setAddToFavorites(false);
          setFavorites([]);
        }}
      >
        Clear All
      </button>
      <div className="grid grid-cols-2 gap-5">
        {favorites.length ? (
          <Card animes={favorites} />
        ) : (
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] text-center">
            <h2 className="text-xl mb-2 text-violet-300">No favorites</h2>
            <img
              src={spongebob}
              alt="spongebob"
              className="w-full rounded-xl"
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Favorites;
