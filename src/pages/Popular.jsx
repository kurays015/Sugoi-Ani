import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import SkeletonLoader from "../components/SkeletonLoader";
import Card from "../components/Card";
import { useCategoryContext } from "../context/CategoryContext";

function Popular() {
  const { pageNumber, itemsPerPage } = useCategoryContext();

  const {
    data: popularAnime,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("popular", pageNumber, itemsPerPage);

  if (isError) return <Error error={error} />;

  const animes = popularAnime?.results || [];

  return (
    <div className="grid gridRes gap-[1em] max-w-[1000px] mx-auto p-[2em] custom-sm:grid-cols-2">
      {isLoading ? <SkeletonLoader /> : <Card animes={animes} />}
    </div>
  );
}

export default Popular;
