import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";
import titleHandler from "../utils/titleHandler";

function Card({ animes }) {
  return (
    <>
      {animes.map(anime => (
        <div
          key={anime.id}
          className="relative rounded-md overflow-hidden cursor-pointer group"
        >
          <Link to={`/info/${anime.id}`}>
            <div
              className={`absolute w-full top-0 bottom-0 transition-all duration-300 ease-in-out group-hover:bg-transparent`}
            ></div>
          </Link>
          <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
            <CiPlay1 className="text-white text-2xl opacity-0 group-hover:opacity-100" />
          </div>
          <img
            src={anime.image}
            className="h-full w-full"
            alt={anime.title.english}
          />
          <div className="absolute bottom-0 bg-customBlack w-full text-center p-3 custom-sm:p-1 text-xs">
            <h5 className="text-white ">{titleHandler(anime.title)}</h5>
          </div>
        </div>
      ))}
    </>
  );
}

export default Card;
