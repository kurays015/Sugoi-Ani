import { useParams, Link } from "react-router-dom";
import useAnimeInfo from "../hooks/useAnimeInfo";
import SkeletonLoader from "../components/SkeletonLoader";
import Recommendations from "../components/Recommendations";
import Related from "../components/Related";
import { useEffect } from "react";
function AnimeInfo() {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useAnimeInfo(id);
  const singleAnimeData = data || null;

  useEffect(() => {
    if (singleAnimeData) {
      localStorage.setItem("anime", JSON.stringify(singleAnimeData));
    }
  }, [singleAnimeData]);

  if (isLoading) return <SkeletonLoader />;
  if (isError)
    return <Error error={error} message="Oops! something went wrong!" />;
  return (
    <main className=" bg-[#242424] py-5 ">
      <section className="bg-[#1C1C1C] max-w-[85%] mx-auto my-8 flex gap-8 border border-slate-600 rounded-3xl custom-sm:max-w-[100%] custom-sm:p-2  border-none custom-sm:rounded-none custom-sm:flex custom-sm:flex-col custom-sm:text-center custom-sm:my-0">
        <div className="flex flex-col gap-[1.5em] w-64 custom-sm:w-full custom-sm:text-center custom-600px:items-center">
          <img
            src={singleAnimeData.image}
            alt={singleAnimeData.title.english}
            className="w-full h-auto rounded-lg"
          />
          <Link
            to={
              singleAnimeData.episodes.length
                ? `/watch/${singleAnimeData.episodes[0]?.id}`
                : "/NoEpisode"
            }
            className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 text-center custom-600px::w-[20%]"
          >
            Watch Now
          </Link>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl font-semibold mb-4 text-white custom-sm:text-md">
            {singleAnimeData.title.romaji}
          </h1>
          <p className="text-sm italic text-gray-400 mb-6 custom-sm:text-xs">
            Alias: {singleAnimeData.title.english},
            {singleAnimeData.title.romaji}, {singleAnimeData.title.native}
          </p>
          <p className="text-lg leading-7 text-gray-300 mb-6 custom-sm:text-xs custom-sm:leading-5">
            {singleAnimeData.description}
          </p>
          <div className="text-xs text-gray-400">
            <div className="grid grid-cols-2 gap-2 custom-sm:text-[.7rem]">
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
                Studios:
                {singleAnimeData.studios.map(studio => studio).join(", ")}
              </div>
              <div>Duration: {singleAnimeData.duration}</div>
              <div>
                Synonyms:
                {singleAnimeData.synonyms.map(synonym => synonym).join(", ")}
              </div>
            </div>
          </div>
          <hr className="border-gray-600 my-2" />
          <ul className="flex items-center gap-3">
            <p className="text-gray-200 text-xs custom-sm:text-[.7rem]">
              Genres:{" "}
            </p>
            <p className="text-[#d6f1c9] text-xs custom-sm:text-[.7rem]">
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
