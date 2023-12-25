import { Link, NavLink } from "react-router-dom";
//react icons
import uzaki from "/images/uzaki.png";
import SearchForm from "./SearchForm";
import { useCategories } from "../hooks/useCategories";
import { useCategoryContext } from "../hooks/useCategoryContext";
import useLogout from "../hooks/useLogout";

function CategoriesHeader() {
  const categories = useCategories();
  const { setPageNumber } = useCategoryContext();
  const { logout } = useLogout();

  return (
    <header className="flex flex-col items-center justify-center py-6 gap-[1em] custom-sm:px-[2em] custom-sm:pb-3">
      <div className="h-[100px]">
        <Link className="text-white" to="/">
          <img src={uzaki} className="h-full" />
        </Link>
      </div>
      <nav>
        <ul className="flex gap-5">
          {categories.map(category => (
            <NavLink
              key={category}
              to={category.toLowerCase()}
              onClick={() => setPageNumber(1)}
            >
              {({ isActive }) => (
                <span
                  className={`${
                    isActive
                      ? "bg-[#6735AE] text-white"
                      : "text-slate-300 hover:text-slate-200 hover:bg-slate-700"
                  } text-sm transition-colors px-2.5 py-2 rounded-md relative z-10 `}
                >
                  {category}
                </span>
              )}
            </NavLink>
          ))}
        </ul>
      </nav>
      <SearchForm />
      {/* <button onClick={logout} className="text-white bg-blue-300">
        Logout
      </button> */}
    </header>
  );
}

export default CategoriesHeader;
