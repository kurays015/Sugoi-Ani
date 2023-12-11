import useFetchAnimeCategories from "../hooks/useFetchAnimeCategories";
import { useCategoryContext } from "../hooks/useCategoryContext";
import GridCardContainer from "../components/GridCardContainer";
import { ApiError } from "../components/Errors";

function Popular() {
  const { pageNumber, itemsPerPage } = useCategoryContext();

  const {
    data: popularAnime,
    isLoading,
    isError,
    error,
  } = useFetchAnimeCategories("popular", pageNumber, itemsPerPage);
  const animes = popularAnime?.results || [];

  if (isError) return <ApiError error={error} />;

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default Popular;
