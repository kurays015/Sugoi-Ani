import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import SkeletonLoader from "../components/SkeletonLoader";
import Card from "../components/Card";
import { useCategoryContext } from "../context/CategoryContext";

function RecentEpisodes() {
  const { pageNumber, itemsPerPage } = useCategoryContext();

  const {
    data: recentEpisodes,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("recent-episodes", pageNumber, itemsPerPage);

  if (isError) return <Error error={error} />;

  const filter = recentEpisodes?.results.filter(
    anime => anime.id !== "102404" && anime.id !== "1939"
  );
  const animes = filter || [];

  return (
    <div className="grid gridRes gap-[1em] max-w-[1000px] mx-auto p-[2em] custom-sm:grid-cols-2">
      {isLoading ? <SkeletonLoader /> : <Card animes={animes} />}
    </div>
  );
}

export default RecentEpisodes;
