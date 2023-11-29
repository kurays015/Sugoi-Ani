import { FaSearch } from "react-icons/fa";
import { useSearchContext } from "../hooks/useSearchContext";

function SearchForm() {
  const { titleRef, handleSubmit } = useSearchContext();
  return (
    <form
      className="bg-[#141414] flex items-center text-[#aaa] rounded-md overflow-hidden custom-sm:w-full md:w-[50%] md:flex md:order-2"
      onSubmit={handleSubmit}
    >
      <button className="p-[7px]">
        <FaSearch />
      </button>
      <input
        ref={titleRef}
        type="search"
        placeholder="Search anime..."
        className="py-[5px] pl-[8px] placeholder:text-[.7em] w-full outline-none bg-[#141414] "
      />
    </form>
  );
}

export default SearchForm;
