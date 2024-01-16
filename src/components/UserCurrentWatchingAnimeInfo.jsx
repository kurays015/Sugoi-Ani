import { Link } from "react-router-dom";
import {
  useDownloadSrc,
  useGetAnimeDataInLocalStorage,
} from "../hooks/useLocalStorage";
import titleHandler from "../utils/titleHandler";

function UserCurrentWatchingAnimeInfo() {
  const anime = useGetAnimeDataInLocalStorage();
  const downloadSrc = useDownloadSrc();
  return (
    <>
      <div
        className="text-gray-600 flex gap-5 custom-sm:p-2 
      custom-sm:flex-col md:flex-row md:px-0 custom-sm:py-5"
      >
        <img
          src={anime.image}
          alt={anime.title.english}
          className="h-[20%] rounded-md custom-sm:w-full md:w-[40%] custom-xxl:w-[20%]"
        />
        <div className="text-primary text-center purp-span">
          <h5 className="mb-2 md:mb-5 md:text-2xl">
            {titleHandler(anime.title)}
          </h5>
          <div className="text-sm italic text-gray-400 custom-sm:text-xs md:text-sm">
            Alias:{" "}
            <span>
              {anime.title.english}, {anime.title.romaji}, {anime.title.native}
            </span>{" "}
            <br />
            <br />
            <Link to={downloadSrc} target="_blank">
              You can <span className="text-violet-400 ">Download</span> it
              here.
            </Link>
          </div>
          <p className="mt-5 custom-sm:hidden md:block">{anime.description}</p>
          <div className="grid grid-cols-2 text-xs gap-1 md:gap-3 md:text-sm custom-xxl:text-base mt-5">
            <div>
              From:{" "}
              <span>
                {anime.startDate.year}-{anime.startDate.month}-
                {anime.startDate.day}
              </span>
            </div>
            <div>
              To:{" "}
              <span>
                {anime.endDate.year}-{anime.endDate.month}-{anime.endDate.day}
              </span>
            </div>
            <div>
              Popularity: <span>{anime.popularity}</span>
            </div>
            <div>
              Type: <span>{anime.type}</span>
            </div>
            <div>
              Country of Origin: <span>{anime.countryOfOrigin}</span>
            </div>
            <div>
              Season: <span>{anime.season}</span>
            </div>
            <div>
              Status: <span>{anime.status}</span>
            </div>
            <div>
              Rating: <span>{anime.rating}</span>
            </div>
            <div>
              Total Episodes: <span>{anime.totalEpisodes}</span>
            </div>
            <div>
              Studios:{" "}
              <span>{anime.studios.map(studio => studio).join(", ")}</span>
            </div>
            <div>
              Duration: <span>{anime.duration}</span>
            </div>
            <div className="custom-sm:hidden">
              Synonyms:
              <span>{anime.synonyms.map(synonym => synonym).join(", ")}</span>
            </div>
            <div className="text-[#d6f1c9] text-xs">
              <span> {anime.genres.map(genre => genre).join(", ")}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default UserCurrentWatchingAnimeInfo;
