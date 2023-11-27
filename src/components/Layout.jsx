import { Outlet } from "react-router-dom";
import CategoriesHeader from "./CategoriesHeader";
import Pagination from "./Pagination";
function Layout() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
      <Pagination />
      <div className="text-center text-xs text-[#777777]">
        Made by Christ 💜
      </div>
    </>
  );
}

export default Layout;
