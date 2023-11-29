import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../hooks/useSearchContext";

function SearchForm() {
  const { titleRef, handleSubmit } = useSearchContext();
  return (
    <form
      className="bg-[#141414] flex items-center gap-[.5em] w-[500px] text-[#aaa] rounded-md overflow-hidden py-1 px-3 custom-sm:hidden md:flex"
      onSubmit={handleSubmit}
    >
      <button className="p-[7px]">
        <FaSearch />
      </button>
      <input
        ref={titleRef}
        type="search"
        placeholder="Search anime..."
        className="py-[5px] pl-[8px] placeholder:text-xs w-full outline-none bg-[#141414] "
      />
    </form>
  );
}

export default SearchForm;
