import { Link } from "react-router-dom";
import {
  useGetAnimeDataInLocalStorage,
  useLocalStorage,
} from "../hooks/useLocalStorage";

function AnimeEpisodes() {
  const anime = useGetAnimeDataInLocalStorage();
  const [isAlreadySelected, setIsAlreadySelected] = useLocalStorage(
    "isAlreadySelected",
    {}
  );
  const [currentEpisode, setCurrentEpisode] = useLocalStorage(
    "currentEpisode",
    null
  );

  const selectedEpisode = id => {
    setIsAlreadySelected(prev => ({ ...prev, [id]: true }));
    setCurrentEpisode(id);
  };

  return (
    <>
      {anime.episodes.length ? (
        <aside className="p-2 bg-[#1C1C1C]   overflow-y-auto custom-sm:mx-auto custom-sm:h-[500px] custom-sm:w-full custom-sm:order-2 xl:w-[300px] xl:-order-1 custom-xxl:mx-0">
          <div className="flex flex-col">
            <h4 className="text-[#777777] font-semibold my-1">Episodes:</h4>
            {anime?.episodes.map((episode, index) => (
              <Link
                to={`/watch/${episode.id}`}
                onClick={() => selectedEpisode(episode.id)}
                key={episode.id}
                className={`${
                  index % 2 === 0 ? "bg-[#0F0F0F]" : "bg-[#171717]"
                } flex gap-2 p-3 text-[#777777] text-xs
           ${isAlreadySelected[episode.id] ? "bg-[#1F1232]" : ""} ${
                  currentEpisode === episode.id ? "bg-customPurple" : ""
                }`}
              >
                <div className="font-semibold">{episode.number}. </div>
                <div>{episode.title ? episode.title : episode.id}</div>
              </Link>
            ))}
          </div>
        </aside>
      ) : (
        <div className="text-[#777777] text-center custom-sm:order-2 xl:-order-1 w-full xl:text-start">
          No episodes available for this anime...
        </div>
      )}
    </>
  );
}

export default AnimeEpisodes;
