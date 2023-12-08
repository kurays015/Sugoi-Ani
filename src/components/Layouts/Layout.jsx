import { Outlet } from "react-router-dom";
import CategoriesHeader from "../CategoriesHeader";
import Pagination from "../Pagination";
import AddToFavorites from "../AddToFavorites";

function Layout() {
  return (
    <main className="bg-[#242424] relative">
      <AddToFavorites />
      <CategoriesHeader />
      <Outlet />
      <Pagination />
    </main>
  );
}

export default Layout;
