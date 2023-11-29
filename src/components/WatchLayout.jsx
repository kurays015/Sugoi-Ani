import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";
import AnimeEpisodes from "./AnimeEpisodes";
import Related from "./Related";

function WatchLayout() {
  const anime = JSON.parse(localStorage.getItem("anime") || "[]");
  return (
    <>
      <AnimeInfoHeader />
      <div
        className="flex items-start gap-10
      px-[200px] py-5 custom-sm:px-0 pt-0 custom-sm:flex-col-reverse custom-sm:gap-0"
      >
        <AnimeEpisodes />
        <Outlet />
      </div>
      {anime.relations.length && <Related relations={anime.relations} />}
      <div className="text-center text-[#777777]">Made by Christ 💜</div>
    </>
  );
}

export default WatchLayout;
