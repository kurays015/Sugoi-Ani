import { useParams } from "react-router-dom";
import { useGenresAdvanceSearch } from "../../hooks/useGenresAdvanceSearch";
import GridCardContainer from "../../components/GridCardContainer";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { ApiError } from "../../components/Errors";

function AdvanceSearchResult() {
  const { genre } = useParams();
  const { pageNumber } = useCategoryContext();
  const { data, isLoading, isError, error } = useGenresAdvanceSearch(
    "genres",
    `["${genre}"]`,
    pageNumber
  );
  const animes = data?.results || [];

  if (isError) return <ApiError error={error} />;

  console.log(data);
  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default AdvanceSearchResult;
