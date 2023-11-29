import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import { useCategoryContext } from "../hooks/useCategoryContext";
import GridCardContainer from "../components/GridCardContainer";

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

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default Popular;
