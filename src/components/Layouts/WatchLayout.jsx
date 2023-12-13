import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "../AnimeInfoHeader";
import AnimeEpisodes from "../AnimeEpisodes";
import Related from "../Related";
import { useGetAnimeDataInLocalStorage } from "../../hooks/useLocalStorage";
import UserCurrentWatchingAnimeInfo from "../UserCurrentWatchingAnimeInfo";

function WatchLayout() {
  const anime = useGetAnimeDataInLocalStorage();

  return (
    <main className="relative">
      <AnimeInfoHeader />
      <div
        className="flex items-start
      py-5 pt-0 custom-sm:flex-col custom-sm:gap-0 custom-sm:p-2  xl:p-5 xl:flex-row xl:gap-5 custom-xxl:border custom-xxl:border-[#777777] custom-xxl:rounded-xl custom-xxl:max-w-[90%] custom-xxl:mx-auto custom-xxl:mt-20"
      >
        <AnimeEpisodes />
        <Outlet />
        <UserCurrentWatchingAnimeInfo />
      </div>
      <div className="custom-sm:px-2 xl:px-5 custom-xxl:p-0 custom-xxl:max-w-[90%] custom-xxl:mx-auto ">
        {anime.relations.length && <Related relations={anime.relations} />}
      </div>
      <div className="text-center text-[#777777]">Made by Christ 💜</div>
    </main>
  );
}

export default WatchLayout;
