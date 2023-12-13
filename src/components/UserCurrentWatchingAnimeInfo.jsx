import { useGetAnimeDataInLocalStorage } from "../hooks/useLocalStorage";
import titleHandler from "../utils/titleHandler";

function UserCurrentWatchingAnimeInfo() {
  const anime = useGetAnimeDataInLocalStorage();
  return (
    <div className="text-gray-600 w-full flex justify-center my-5 gap-3 md:gap-10 md:my-10 xl:gap-3 xl:my-0 custom-xxl:justify-start custom-xxl:w-[40%]">
      <img
        src={anime.image}
        alt={anime.title.english}
        className="h-[20%] custom-sm:w-[30%]  custom-xxl:w-[30%]"
      />
      <div className="text-[#777777]">
        <h5 className="mb-2 md:mb-5 md:text-2xl">
          {titleHandler(anime.title)}
        </h5>
        <div className="grid grid-cols-2 text-xs gap-1 md:gap-3 md:text-sm">
          <div>
            From: {anime.startDate.year}-{anime.startDate.month}-
            {anime.startDate.day}
          </div>
          <div>
            To: {anime.endDate.year}-{anime.endDate.month}-{anime.endDate.day}
          </div>
          <div>Popularity: {anime.popularity}</div>
          <div>Type: {anime.type}</div>
          <div>Country of Origin: {anime.countryOfOrigin}</div>
          <div>Season: {anime.season}</div>
          <div>Status: {anime.status}</div>
          <div>Rating: {anime.rating}</div>
          <div>Total Episodes: {anime.totalEpisodes}</div>
          <div>Studios: {anime.studios.map(studio => studio).join(", ")}</div>
          <div>Duration: {anime.duration}</div>
          <div className="custom-sm:hidden">
            Synonyms:
            {anime.synonyms.map(synonym => synonym).join(", ")}
          </div>
          <div className="text-[#d6f1c9] text-xs">
            {anime.genres.map(genre => genre).join(", ")}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserCurrentWatchingAnimeInfo;
