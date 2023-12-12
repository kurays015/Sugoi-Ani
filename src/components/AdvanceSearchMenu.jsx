import { useNavigate } from "react-router-dom";
import { useCategoryContext } from "../hooks/useCategoryContext";
import { capitalFirstLetter } from "../utils/capitalFirstLetter";

function AdvanceSearchMenu({ type, queries }) {
  const { setPageNumber } = useCategoryContext();
  const navigate = useNavigate();

  const handleQueryClick = e => {
    const { value } = e.target;
    setPageNumber(1);
    if (value) {
      navigate(`/advance-search/${type}/${value}`);
    }
  };

  return (
    <div>
      <select
        name="queries"
        id="queries"
        className="bg-[#1B1B1B] text-[#777777] outline-none p-1 rounded-md custom-sm:text-xs md:text-base"
        onChange={handleQueryClick}
      >
        <option value="">{capitalFirstLetter(type)}</option>
        {queries.map(query => (
          <option value={query} key={query}>
            {query}
          </option>
        ))}
      </select>
    </div>
  );
}

export default AdvanceSearchMenu;
