import { useNavigate, useSearchParams } from "react-router-dom";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { capitalFirstLetter } from "../utils/capitalFirstLetter";
import { lowerCaseLetters } from "../utils/lowerCaseLetters";

function AdvanceSearchMenu({ type, queries }) {
  const { setPageNumber } = useCategoryContext();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const handleQueryClick = e => {
    const { value } = e.target;
    setPageNumber(1);
    // Update or append the selected query parameter
    searchParams.set(type, type === "genres" ? `["${value}"]` : value);
    // Update the URL with the new search parameters
    navigate(`result?${searchParams.toString()}`);
  };

  return (
    <div className="">
      <select
        name="queries"
        id="queries"
        className="bg-[#1B1B1B] text-primary outline-none p-1 rounded-md custom-sm:text-xs custom-sm:w-full md:text-base"
        onChange={handleQueryClick}
      >
        <option value="">{capitalFirstLetter(type)}</option>
        {queries.map(query => (
          <option value={query} key={query}>
            {type !== "year" ? lowerCaseLetters(query) : query}
          </option>
        ))}
      </select>

      {/* <select name="genresQueryParams" id="genresQueryParams">
        <option value="romance">Romance</option>
        <option value="action">Action</option>
        <option value="horror">Horror</option>
      </select>

      <select name="seasonQueryParams" id="seasonQueryParams">
        <option value="FALL">FALL</option>
        <option value="SPRING">SPRING</option>
        <option value="SUMMER">SUMMER</option>
        <option value="WINTER">WINTER</option>
      </select>

      <select name="yearQueryParams" id="yearQueryParams">
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
      </select>

      <select name="status" id="status">
        <option value="Finished">Finished</option>
        <option value="Compeleted">Compeleted</option>
        <option value="Ongoing">Ongoing</option>
      </select>

      <select name="format" id="format">
        <option value="TV">TV</option>
        <option value="Movie">Movie</option>
        <option value="OVA">OVA</option>
        <option value="ONA">ONA</option>
      </select> */}
    </div>
  );
}

export default AdvanceSearchMenu;
