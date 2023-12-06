import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";
import AnimeEpisodes from "./AnimeEpisodes";
import Related from "./Related";
import titleHandler from "../utils/titleHandler";

function WatchLayout() {
  const anime = JSON.parse(localStorage.getItem("anime") || "[]");
  return (
    <main className="relative">
      <AnimeInfoHeader />
      <div
        className="flex items-start
      py-5 pt-0 custom-sm:flex-col custom-sm:gap-0 custom-sm:p-2  xl:p-5 xl:flex-row xl:gap-5 custom-xxl:border custom-xxl:border-[#777777] custom-xxl:rounded-xl custom-xxl:max-w-[90%] custom-xxl:mx-auto custom-xxl:mt-20"
      >
        <AnimeEpisodes />
        <Outlet />
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
                To: {anime.endDate.year}-{anime.endDate.month}-
                {anime.endDate.day}
              </div>
              <div>Popularity: {anime.popularity}</div>
              <div>Type: {anime.type}</div>
              <div>Country of Origin: {anime.countryOfOrigin}</div>
              <div>Season: {anime.season}</div>
              <div>Status: {anime.status}</div>
              <div>Rating: {anime.rating}</div>
              <div>Total Episodes: {anime.totalEpisodes}</div>
              <div>
                Studios: {anime.studios.map(studio => studio).join(", ")}
              </div>
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
      </div>
      <div className="custom-sm:px-2 xl:px-5 custom-xxl:p-0 custom-xxl:max-w-[90%] custom-xxl:mx-auto ">
        {anime.relations.length && <Related relations={anime.relations} />}
      </div>
      <div className="text-center text-[#777777]">Made by Christ 💜</div>
    </main>
  );
}

export default WatchLayout;
