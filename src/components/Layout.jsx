import { Outlet } from "react-router-dom";
import CategoriesHeader from "./CategoriesHeader";
import Pagination from "./Pagination";
function Layout() {
  return (
    <>
      <CategoriesHeader />
      <Outlet />
      <Pagination />
    </>
  );
}

export default Layout;
