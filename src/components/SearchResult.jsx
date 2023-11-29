import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";
import Card from "./Card";
import SkeletonLoader from "./SkeletonLoader";
import { useCategoryContext } from "../hooks/useCategoryContext";

function SearchResult() {
  const { title } = useParams();
  const { pageNumber } = useCategoryContext();
  const { data, isLoading, isError, error } = useSearch(title, pageNumber);
  const searchedAnime = data?.results || [];

  console.log(data?.results);
  return (
    <div className="grid gridRes gap-[1em] max-w-[1000px] mx-auto p-[2em] custom-sm:grid-cols-2">
      {isLoading ? <SkeletonLoader /> : <Card animes={searchedAnime} />}
    </div>
  );
}

export default SearchResult;
