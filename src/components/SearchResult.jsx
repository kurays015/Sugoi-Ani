import { useParams } from "react-router-dom";
import useSearch from "../hooks/useSearch";

function SearchResult() {
  const { title } = useParams();
  const { data } = useSearch(title);

  console.log(data);
  return <div>SearchResult</div>;
}

export default SearchResult;
