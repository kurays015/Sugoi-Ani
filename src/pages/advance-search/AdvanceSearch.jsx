import { Outlet } from "react-router-dom";
import AdvanceSearchMenu from "../../components/AdvanceSearchMenu";
import { useAdvanceSearchArray } from "../../hooks/useAdvanceSearchArray";
function AdvanceSearch() {
  const { types } = useAdvanceSearchArray();
  return (
    <main className="text-center">
      <div className="grid grid-cols-2 gap-2 custom-sm:px-[2em] lg:flex lg:justify-center lg:gap-5">
        {types.map(({ type, queries }) => (
          <AdvanceSearchMenu type={type} queries={queries} key={type} />
        ))}
      </div>
      <Outlet />
      {/* display something here */}
    </main>
  );
}

export default AdvanceSearch;
