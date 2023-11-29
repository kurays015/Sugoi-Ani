import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import GridCardContainer from "../components/GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";

function Trending() {
  const { pageNumber, itemsPerPage } = useCategoryContext();

  const {
    data: trendingAnime,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("trending", pageNumber, itemsPerPage);

  if (isError) return <Error error={error} />;

  const animes = trendingAnime?.results || [];

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default Trending;
