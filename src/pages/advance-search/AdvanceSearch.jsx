import { Link, Outlet } from "react-router-dom";
import AdvanceSearchMenu from "../../components/AdvanceSearchMenu";
import { useAdvanceSearchArray } from "../../hooks/useAdvanceSearchArray";
function AdvanceSearch() {
  const { types } = useAdvanceSearchArray();
  return (
    <main className="text-center">
      <div className="grid grid-cols-2 items-center gap-2 my-3 custom-sm:px-[2em] lg:flex lg:justify-center lg:gap-5">
        {types.map(({ type, queries }) => (
          <AdvanceSearchMenu type={type} queries={queries} key={type} />
        ))}
        <Link to="" className="text-primary">
          Clear All Filter
        </Link>
      </div>
      <Outlet />
      {/* display something here */}
      <p className="text-primary">in progress...</p>
    </main>
  );
}

export default AdvanceSearch;
