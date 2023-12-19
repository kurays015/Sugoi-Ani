import { useSearchParams } from "react-router-dom";
import { useAdvanceSearchArray } from "../hooks/useAdvanceSearchArray";
import AdvanceSearchSelect from "./AdvanceSearchSelect";

function AdvanceSearchMenu() {
  const { types } = useAdvanceSearchArray();
  const [_, setSearchParams] = useSearchParams();

  return (
    <div className="grid grid-cols-2 items-end gap-2 my-3 custom-sm:px-[2em] md:grid-cols-3 lg:flex lg:justify-center lg:gap-5">
      {types.map(({ type, queries }) => (
        <AdvanceSearchSelect type={type} queries={queries} key={type} />
      ))}
      <button
        className="text-primary text-xs 
        pb-2 lg:text-sm"
        onClick={() => setSearchParams({})}
      >
        Clear All Filter
      </button>
    </div>
  );
}

export default AdvanceSearchMenu;
