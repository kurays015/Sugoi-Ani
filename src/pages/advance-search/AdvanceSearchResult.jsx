import { useParams } from "react-router-dom";
import { useAdvanceSearch } from "../../hooks/useAdvanceSearch";
import GridCardContainer from "../../components/GridCardContainer";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { ApiError } from "../../components/Errors";

function AdvanceSearchResult() {
  const { type, query } = useParams();
  const { pageNumber } = useCategoryContext();
  const { data, isLoading, isError, error } = useAdvanceSearch({
    type,
    query,
    pageNumber,
  });
  const animes = data?.results || [];

  if (isError) return <ApiError error={error} />;

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default AdvanceSearchResult;
