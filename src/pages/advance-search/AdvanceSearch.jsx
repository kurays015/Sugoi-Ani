import { Outlet, useSearchParams } from "react-router-dom";
import AdvanceSearchMenu from "../../components/AdvanceSearchMenu";
import { useAdvanceSearchArray } from "../../hooks/useAdvanceSearchArray";
function AdvanceSearch() {
  const { types } = useAdvanceSearchArray();
  const [_, setSearchParams] = useSearchParams();
  return (
    <main className="text-center">
      <div className="grid grid-cols-2 items-end gap-2 my-3 custom-sm:px-[2em] md:grid-cols-3 lg:flex lg:justify-center lg:gap-5">
        {types.map(({ type, queries }) => (
          <AdvanceSearchMenu type={type} queries={queries} key={type} />
        ))}
        <button
          className="text-primary text-xs 
        pb-2 lg:text-sm"
          onClick={() => setSearchParams({})}
        >
          Clear All Filter
        </button>
      </div>
      <Outlet />
      {/* display something here */}
      <p className="text-primary">in progress...</p>
    </main>
  );
}

export default AdvanceSearch;
