import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";
import AnimeEpisodes from "./AnimeEpisodes";
import Related from "./Related";

function WatchLayout() {
  const anime = JSON.parse(localStorage.getItem("anime") || "[]");

  return (
    <main className="relative">
      <AnimeInfoHeader />
      <div
        className="flex items-start
      px-[200px] py-5 pt-0 custom-sm:flex-col custom-sm:gap-0 custom-sm:p-2  xl:p-5 xl:flex-row xl:gap-5 custom-xxl:px-48"
      >
        <AnimeEpisodes />
        <Outlet />
        <div className="text-gray-600">
          Anime info of the current anime your watching will be added here...
        </div>
      </div>
      <div className="custom-sm:px-2 xl:px-5 custom-xxl:px-48">
        {anime.relations.length && <Related relations={anime.relations} />}
      </div>
      <div className="text-center text-[#777777]">Made by Christ 💜</div>
    </main>
  );
}

export default WatchLayout;
