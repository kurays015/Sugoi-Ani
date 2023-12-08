import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { GiHamburgerMenu } from "react-icons/gi";
import useCategories from "../hooks/useCategories";

function MobileAnimeInfoHeader() {
  const [showNav, setShowNav] = useState(false);
  const categories = useCategories();

  return (
    <>
      {/* mobile resppnsibe below */}
      <div className="text-[1.5rem] custom-sm:text-[#777777] md:hidden">
        <GiHamburgerMenu onClick={() => setShowNav(prev => !prev)} />
      </div>
      <SearchForm />
      <Link to="/" className="md:hidden">
        <img src="/images/uzaki.png" className="w-[150px]" alt="logo" />
      </Link>
      <ul
        className={`md:hidden custom-sm:z-10 absolute flex flex-col gap-3 bg-[#1C1C1C] -bottom-[140px] left-0 p-5 rounded-md transition-all duration-300 ease-in-out ${
          showNav ? "custom-sm:flex" : "custom-sm:hidden"
        }`}
      >
        {categories.map(category => (
          <li key={category}>
            <Link
              to={category.toLowerCase()}
              className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
            >
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default MobileAnimeInfoHeader;
