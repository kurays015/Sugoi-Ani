import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "../AnimeInfoHeader";
import AnimeEpisodes from "../AnimeEpisodes";
import Related from "../Related";
import { useGetAnimeDataInLocalStorage } from "../../hooks/useLocalStorage";
import UserCurrentWatchingAnimeInfo from "../UserCurrentWatchingAnimeInfo";

function WatchLayout() {
  const anime = useGetAnimeDataInLocalStorage();

  return (
    <main>
      <AnimeInfoHeader />
      <section className="max-w-7xl mx-auto md:p-3 xl:px-0">
        <div className="max-w-7xl mx-auto flex custom-sm:flex-col-reverse custom-sm:mt-0 custom-sm:gap-3 xl:my-7 lg:flex-row">
          <AnimeEpisodes />
          <Outlet />
        </div>
        <UserCurrentWatchingAnimeInfo />
        <div className="custom-sm:px-2 xl:px-5 custom-xxl:p-0">
          {anime.relations.length > 0 && (
            <Related relations={anime.relations} />
          )}
        </div>
        <div className="text-center text-primary text-xs mt-28">
          Made with 💜 by Christ
        </div>
      </section>
    </main>
  );
}

export default WatchLayout;
