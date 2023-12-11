import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import GridCardContainer from "../components/GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { ApiError } from "../components/Errors";

function Trending() {
  const { pageNumber } = useCategoryContext();

  const {
    data: trendingAnime,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("trending", pageNumber);

  if (isError) return <ApiError error={error} />;

  const animes = trendingAnime?.results || [];

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default Trending;
