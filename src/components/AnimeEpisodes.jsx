import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AnimeEpisodes() {
  const anime = JSON.parse(localStorage.getItem("anime") || "{}");
  const [isSelected, setIsSelected] = useState(null);

  const selectedEpisode = id => {
    setIsSelected(id || null);
  };

  return (
    <aside className="p-2 bg-[#1C1C1C] max-w-[300px] h-[500px] overflow-y-auto custom-sm:mx-auto custom-sm:w-full custom-sm:max-w-full">
      <div className="flex flex-col">
        <h4 className="text-[#c6c6c6] font-semibold my-1">Episodes:</h4>
        {anime?.episodes.map((episode, index) => (
          <Link
            to={`/watch/${episode.id}`}
            onClick={() => selectedEpisode(episode.id)}
            key={episode.id}
            className={`${
              index % 2 === 0 ? "bg-[#0F0F0F]" : "bg-[#171717]"
            } flex gap-2 p-3 text-[#777777] text-xs ${
              isSelected === episode.id ? "bg-[#5A2E98]" : ""
            }`}
          >
            <div className="font-semibold">{episode.number}. </div>
            <div>{episode.title ? episode.title : episode.id}</div>
          </Link>
        ))}
      </div>
    </aside>
  );
}

export default AnimeEpisodes;
