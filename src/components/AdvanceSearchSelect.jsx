import { useNavigate, useSearchParams } from "react-router-dom";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { capitalFirstLetter } from "../utils/capitalFirstLetter";
import { lowerCaseLetters } from "../utils/lowerCaseLetters";

function AdvanceSearchSelect({ type, queries }) {
  const { setPageNumber } = useCategoryContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleQueryClick = e => {
    setPageNumber(1);
    const { value } = e.target;
    const queryParams = type === "genres" ? `["${value}"]` : value;
    // Update or append the selected query parameter in select, option
    searchParams.set(type, queryParams);
    // navigate to the URL with appended query parameter
    if (value) {
      navigate(`/advanced-search?${searchParams.toString()}`);
    }
  };

  return (
    <div>
      <div className="text-primary text-xs mb-1 text-center">
        {capitalFirstLetter(type)}
      </div>
      <select
        name="queries"
        id="queries"
        className="bg-[#1B1B1B] text-primary outline-none p-1 rounded-md custom-sm:text-xs custom-sm:w-full md:text-base"
        onChange={handleQueryClick}
      >
        {queries.map(query => (
          <option value={query} key={query}>
            {type !== "year" ? lowerCaseLetters(query) : query}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AdvanceSearchSelect;
