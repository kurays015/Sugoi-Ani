import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import titleHandler from "../utils/titleHandler";
import { GoHeartFill, GoHeart } from "react-icons/go";
import { useFavorites } from "../hooks/useFavorites";

function Card({ animes }) {
  const { handleAddToFavorite, handleRemoveToFavorites, addToFavorites } =
    useFavorites();

  return (
    <>
      {animes.map(({ id, image, title }) => (
        <div
          key={id}
          className="relative rounded-md overflow-hidden cursor-pointer group"
        >
          <Link to={`/info/${id}`}>
            <div
              className={`absolute w-full top-0 bottom-0 transition-all duration-300 ease-in-out group-hover:bg-transparent`}
            ></div>
          </Link>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <CiPlay1 className="text-white text-2xl opacity-0 group-hover:opacity-100" />
          </div>
          <img
            src={image}
            className="h-full w-full text-white"
            alt={title.english}
          />
          <div className="absolute bottom-0 bg-customBlack w-full text-center custom-sm:p-1.5 z-20">
            <h5 className="text-white custom-sm:text-xs custom-sl:text-sm ">
              {titleHandler(title)}
            </h5>
          </div>
          <div className="absolute top-2 left-2 rounded-lg text-2xl text-violet-300 bg-customBlack p-2">
            {addToFavorites[id] ? (
              <GoHeartFill onClick={() => handleRemoveToFavorites(id)} />
            ) : (
              <GoHeart onClick={() => handleAddToFavorite(id, image, title)} />
            )}
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
