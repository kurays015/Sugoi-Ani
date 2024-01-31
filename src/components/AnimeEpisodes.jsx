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
      {anime?.episodes?.length ? (
        <aside className="p-2 bg-[#1C1C1C] overflow-y-auto custom-sm:max-h-[500px] lg:h-[500px] custom-sm:w-full lg:w-[25%]">
          <div className="flex flex-col">
            <span className="text-gray-400 text-center my-2">
              Thank you for watching! -C
            </span>
            <h4 className="text-primary font-semibold my-1">Episodes:</h4>
            {anime?.episodes.map((episode, index) => (
              <Link
                to={`/watch/${episode.id}`}
                onClick={() => selectedEpisode(episode.id)}
                key={episode.id}
                className={`${
                  index % 2 === 0 ? "bg-[#0F0F0F]" : "bg-[#171717]"
                } flex gap-2 p-3 text-primary text-xs hover:bg-[#AAAAAA] hover:text-gray-50 transition-colors
           ${isAlreadySelected[episode?.id] ? "bg-[#1F1232]" : ""} ${
                  currentEpisode === episode.id ? "bg-[#5A2E98]" : ""
                }`}
              >
                <div className="font-semibold">{episode.number}. </div>
                <div>{episode.title ? episode.title : episode.id}</div>
              </Link>
            ))}
          </div>
        </aside>
      ) : (
        <div className="text-primary text-center custom-sm:order-2 xl:-order-1 w-full xl:text-start">
          No episodes available for this anime...
        </div>
      )}
    </>
  );
}

export default AnimeEpisodes;
