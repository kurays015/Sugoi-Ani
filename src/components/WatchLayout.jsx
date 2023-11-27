import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";
import AnimeEpisodes from "./AnimeEpisodes";

function WatchLayout() {
  return (
    <>
      <AnimeInfoHeader />
      <div
        className="flex items-start gap-10
      px-[200px] py-5 custom-sm:px-0 pt-0 custom-sm:flex-col-reverse"
      >
        <AnimeEpisodes />
        <Outlet />
      </div>
    </>
  );
}

export default WatchLayout;
