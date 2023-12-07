import { Outlet } from "react-router-dom";
import CategoriesHeader from "../CategoriesHeader";
import Pagination from "../Pagination";
function Layout() {
  return (
    <main className="bg-[#242424]">
      <CategoriesHeader />
      <Outlet />
      <Pagination />
    </main>
  );
}

export default Layout;
