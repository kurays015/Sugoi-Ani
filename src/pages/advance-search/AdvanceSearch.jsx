import { Outlet } from "react-router-dom";
import AdvanceSearchMenu from "../../components/AdvanceSearchMenu";
import { useAdvanceSearchArray } from "../../hooks/useAdvanceSearchArray";

function AdvanceSearch() {
  const { types } = useAdvanceSearchArray();

  return (
    <main className="text-center">
      <div className=" flex items-center justify-center gap-5 my-3">
        {types.map(({ type, queries }) => (
          <AdvanceSearchMenu type={type} queries={queries} key={type} />
        ))}
      </div>
      {/* <p className="text-white">in progress...</p> */}
      <Outlet />
    </main>
  );
}

export default AdvanceSearch;
