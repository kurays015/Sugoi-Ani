import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import GridCardContainer from "./GridCardContainer";
import { useCategoryContext } from "../hooks/useCategoryContext";

function SearchResult() {
  const { title } = useParams();
  const { pageNumber } = useCategoryContext();
  const { data, isLoading, isError, error } = useSearch(title, pageNumber);
  const searchedAnime = data?.results || [];
  const searchResult = !isLoading && searchedAnime.length === 0;
  const isSearching = isLoading && searchedAnime.length === 0;

  return (
    <>
      {isSearching && (
        <p className="text-violet-300 text-center">Searching...</p>
      )}
      {searchResult && (
        <p className="text-violet-300 text-center">Not found...</p>
      )}
      <GridCardContainer isLoading={isLoading} animes={searchedAnime} />
    </>
  );
}

export default SearchResult;
