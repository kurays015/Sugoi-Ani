import { useAdvanceSearch } from "../../hooks/useAdvanceSearch";
import GridCardContainer from "../../components/GridCardContainer";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { ApiError } from "../../components/Errors";
import { useSearchParams } from "react-router-dom";

function AdvanceSearchResult() {
  const { pageNumber } = useCategoryContext();
  const [searchParams] = useSearchParams();

  const { data, isLoading, isError, error } = useAdvanceSearch(
    searchParams,
    pageNumber
  );
  const animes = data?.results || [];

  console.log(data);

  if (isError) return <ApiError error={error} />;

  return <GridCardContainer isLoading={isLoading} animes={animes} />;
}

export default AdvanceSearchResult;
