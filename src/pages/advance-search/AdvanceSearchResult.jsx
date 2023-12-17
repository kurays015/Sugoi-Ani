import { useAdvanceSearch } from "../../hooks/useAdvanceSearch";
import GridCardContainer from "../../components/GridCardContainer";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { ApiError } from "../../components/Errors";
import { useSearchParams } from "react-router-dom";
import SearchAndFilterNotFound from "../../components/SearchAndFilterNotFound";

function AdvanceSearchResult() {
  const { pageNumber } = useCategoryContext();
  const [searchParams] = useSearchParams();

  const { data, isLoading, isError, error } = useAdvanceSearch(
    searchParams,
    pageNumber
  );
  const animes = data?.results || [];
  const searchResult = !isLoading && !animes.length;
  const isSearching = isLoading && !animes.length;

  if (isError) return <ApiError error={error} />;

  return (
    <>
      <SearchAndFilterNotFound
        isSearching={isSearching}
        searchResult={searchResult}
      />
      <GridCardContainer isLoading={isLoading} animes={animes} />
    </>
  );
}

export default AdvanceSearchResult;
