import { useState } from "react";
import { Link } from "react-router-dom";
import SearchForm from "./SearchForm";
import { GiHamburgerMenu } from "react-icons/gi";

function AnimeInfoHeader() {
  const [showNav, setShowNav] = useState(false);

  return (
    <header className="bg-[#1C1C1C] relative py-3 px-16 flex items-center justify-between gap-2 custom-sm:px-3 ">
      <Link to="/" className="custom-sm:hidden md:block">
        <img src="/images/uzaki.png" className="w-[80px]" alt="logo" />
      </Link>
      <SearchForm />
      <nav className="custom-sm:hidden md:block">
        <ul className="flex gap-[1em]">
          <li>
            <Link
              to="/recent"
              className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
            >
              Recent
            </Link>
          </li>
          <li>
            <Link
              to="/popular"
              className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
            >
              Popular
            </Link>
          </li>
          <li>
            <Link
              to="/trending"
              className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
            >
              Trending
            </Link>
          </li>
        </ul>
      </nav>
      {/* mobile resppnsibe below */}
      <div className="text-[1.5rem] custom-sm:text-[#777777] md:hidden">
        <GiHamburgerMenu onClick={() => setShowNav(prev => !prev)} />
      </div>
      <Link to="/" className="md:hidden">
        <img src="/images/uzaki.png" className="w-[80px]" alt="logo" />
      </Link>
      <ul
        className={`md:hidden custom-sm:z-10 absolute flex flex-col gap-3 bg-[#1C1C1C] -bottom-[140px] left-0 p-5 rounded-md transition-all duration-300 ease-in-out ${
          showNav ? "custom-sm:flex" : "custom-sm:hidden"
        }`}
      >
        <Link
          to="/recent"
          className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
        >
          Recent
        </Link>
        <Link
          to="/popular"
          className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
        >
          Popular
        </Link>
        <Link
          to="/trending"
          className="text-[#AAAAAA] transition-all duration-300 ease-in-out hover:text-[#A885DA]"
        >
          Trending
        </Link>
      </ul>
    </header>
  );
}

export default AnimeInfoHeader;
