import { useParams, Link } from "react-router-dom";
import useAnimeInfo from "../hooks/useAnimeInfo";
import Recommendations from "../components/Recommendations";
import Related from "../components/Related";
import { useEffect } from "react";
import titleHandler from "../utils/titleHandler";
import { AnimeInfoSkeleton } from "../components/SkeletonLoader";
import { useAuthContext } from "../hooks/useAuthContext";
import { SingleAnimeDataError, ApiError } from "../components/Errors";

function AnimeInfo() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useAnimeInfo(id);
  const { user } = useAuthContext();
  const singleAnimeData = data || null;

  useEffect(() => {
    if (singleAnimeData) {
      localStorage.setItem("anime", JSON.stringify(singleAnimeData));
    }
  }, [singleAnimeData]);

  if (isLoading) return <AnimeInfoSkeleton />;
  if (isError) return <ApiError error={error} />;
  if (!singleAnimeData) return <SingleAnimeDataError />;

  return (
    <main className="bg-[#242424] py-5 custom-sm:px-2 md:px-14 md:py-12 lg:px-28 xl:px-48 ">
      <section
        className="rounded-md bg-[#1C1C1C] max-w-[85%] mx-auto my-8 flex gap-8  custom-sm:max-w-[100%]  custom-sm:flex 
   custom-sm:flex-col custom-sm:text-center custom-sm:my-0 lg:flex-row lg:p-6 overflow-hidden"
      >
        <div className="flex flex-col gap-[1.5em] w-64 custom-sm:w-full custom-sm:text-center custom-sm:items-center lg:w-[30%]">
          <img
            src={singleAnimeData.image}
            alt={singleAnimeData.title.english}
            className="w-full "
          />
          <Link
            to={
              user ? `/watch/${singleAnimeData.episodes[0]?.id}` : "/user/login"
            }
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-center "
          >
            Watch Now
          </Link>
        </div>
        <div className="flex-1 custom-sm:p-3 md:p-5">
          <h1 className="text-3xl font-semibold mb-4 text-white custom-sm:text-md">
            {titleHandler(singleAnimeData.title)}
          </h1>
          <p className="text-sm italic text-gray-400 mb-6 custom-sm:text-xs md:text-sm">
            Alias: {singleAnimeData.title.english},
            {singleAnimeData.title.romaji}, {singleAnimeData.title.native}
          </p>
          <p className="text-lg leading-7 text-gray-300 mb-6 custom-sm:text-xs custom-sm:leading-5 md:text-base md:leading-8">
            {singleAnimeData.description}
          </p>
          <div className="text-xs text-gray-400">
            <div className="grid grid-cols-2 gap-2 custom-sm:text-[.7rem] md:text-base md:gap-5">
              <div>Type: {singleAnimeData.type}</div>
              <div>Country of Origin: {singleAnimeData.countryOfOrigin}</div>
              <div>Season: {singleAnimeData.season}</div>
              <div>Release Date: {singleAnimeData.releaseDate}</div>
              <div>Status: {singleAnimeData.status}</div>
              <div>
                Start Date: {singleAnimeData.startDate.year}-
                {singleAnimeData.startDate.month}-
                {singleAnimeData.startDate.day}
              </div>
              <div>Popularity: {singleAnimeData.popularity}</div>
              <div>
                End Date: {singleAnimeData.endDate.year}-
                {singleAnimeData.endDate.month}-{singleAnimeData.endDate.day}
              </div>
              <div>Rating: {singleAnimeData.rating}</div>
              <div>Total Episodes: {singleAnimeData.totalEpisodes}</div>
              <div>
                Studios:{" "}
                {singleAnimeData.studios.map(studio => studio).join(", ")}
              </div>
              <div>Duration: {singleAnimeData.duration}</div>
              <div>
                Synonyms:{" "}
                {singleAnimeData.synonyms.map(synonym => synonym).join(", ")}
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-2" />
          <ul className="flex items-center gap-3">
            <p className="text-gray-200 text-xs custom-sm:text-[.7rem] md:text-base">
              Genres:
            </p>
            <p className="text-[#d6f1c9] text-xs custom-sm:text-[.7rem] md:text-sm">
              {singleAnimeData.genres.map(genre => genre).join(", ")}
            </p>
          </ul>
        </div>
      </section>
      {singleAnimeData.relations.length ? (
        <Related relations={singleAnimeData.relations} />
      ) : (
        ""
      )}
      {singleAnimeData.recommendations.length ? (
        <Recommendations recommendations={singleAnimeData.recommendations} />
      ) : (
        ""
      )}
      <div className="text-center text-[#777777]">Made by Christ 💜</div>
    </main>
  );
}

export default AnimeInfo;
