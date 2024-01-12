import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { GiHamburgerMenu } from "react-icons/gi";
import { useCategories } from "../hooks/useCategories";
import useLogout from "../hooks/useLogout";
import Cookies from "js-cookie";

function MobileAnimeInfoHeader() {
  const [showNav, setShowNav] = useState(false);
  const categories = useCategories();

  const { logout } = useLogout();
  const user =
    JSON.parse(Cookies.get("user") || null) || Cookies.get("googleUser");

  return (
    <>
      {/* mobile responsive below */}
      <div className="text-[1.5rem] custom-sm:text-primary md:hidden">
        <GiHamburgerMenu onClick={() => setShowNav(prev => !prev)} />
      </div>
      <SearchForm />
      <Link to="/" className="md:hidden">
        <img src="/images/uzaki.png" className="w-[150px]" alt="logo" />
      </Link>
      <ul
        className={`md:hidden custom-sm:z-10 absolute flex flex-col gap-3 bg-[#1C1C1C] -bottom-[154px] left-0 p-5 rounded-md transition-all duration-300 ease-in-out ${
          showNav ? "custom-sm:flex" : "custom-sm:hidden"
        }`}
      >
        {categories.map(category => (
          <li key={category}>
            <Link
              to={`/${category.toLowerCase()}`}
              className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
            >
              {category}
            </Link>
          </li>
        ))}
        {user && (
          <button onClick={logout} className="text-[#AAAAAA] text-start">
            Logout
          </button>
        )}
      </ul>
    </>
  );
}

export default MobileAnimeInfoHeader;
