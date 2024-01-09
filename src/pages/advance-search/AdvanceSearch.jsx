import useAdvanceSearch from "../../hooks/useAdvanceSearch";
import GridCardContainer from "../../components/GridCardContainer";
import { useCategoryContext } from "../../hooks/useCategoryContext";
import { ApiError, SearchError } from "../../components/Errors";
import { useSearchParams } from "react-router-dom";
import SearchAndFilterNotFound from "../../components/SearchAndFilterNotFound";
import CurrentFilter from "../../components/CurrentFilter";

function AdvanceSearch() {
  const { pageNumber } = useCategoryContext();
  const [searchParams, setSearchParams] = useSearchParams();
  const currentFilters = Array.from(searchParams.values());

  const { data, isLoading, isError, error } = useAdvanceSearch(
    searchParams,
    pageNumber
  );
  const animes = data?.results || [];
  const searchResult = !isLoading && !animes.length;
  const isSearching = isLoading && !animes.length;

  if (!animes) return <SearchError />;
  if (isError) return <ApiError error={error.message} />;

  const filterQueryParams = value => {
    // get the URL and remove the selected value
    const filterParams = Array.from(searchParams.entries()).filter(
      ([_, val]) => val !== value
    );
    setSearchParams(filterParams);
  };
  return (
    <main className="text-center">
      <CurrentFilter
        currentFilters={currentFilters}
        filterQueryParams={filterQueryParams}
        searchParams={searchParams}
      />
      <SearchAndFilterNotFound
        isSearching={isSearching}
        searchResult={searchResult}
      />
      <GridCardContainer isLoading={isLoading} animes={animes} />
    </main>
  );
}

export default AdvanceSearch;
