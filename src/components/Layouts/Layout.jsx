import { Outlet } from "react-router-dom";
import CategoriesHeader from "../CategoriesHeader";
import Pagination from "../Pagination";
import AddToFavorites from "../AddToFavorites";
import AdvanceSearchMenu from "../AdvanceSearchMenu";
function Layout() {
  return (
    <main className="bg-[#242424] relative">
      <AddToFavorites />
      <CategoriesHeader />
      <AdvanceSearchMenu />
      <Outlet />
      <Pagination />
    </main>
  );
}

export default Layout;
