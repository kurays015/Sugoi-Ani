import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import GridCardContainer from "./GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { ApiError, SearchError } from "./Errors";
import SearchAndFilterNotFound from "./SearchAndFilterNotFound";

function SearchResult() {
  const { title } = useParams();
  const { pageNumber } = useCategoryContext();
  const { data, isLoading, isError, error } = useSearch(title, pageNumber);
  const searchedAnime = data?.results || [];
  const searchResult = !isLoading && !searchedAnime.length;
  const isSearching = isLoading && !searchedAnime.length;

  if (isError) return <ApiError error={error} />;
  if (!searchedAnime) return <SearchError />;

  return (
    <>
      <SearchAndFilterNotFound
        isSearching={isSearching}
        searchResult={searchResult}
      />
      <GridCardContainer isLoading={isLoading} animes={searchedAnime} />
    </>
  );
}

export default SearchResult;
