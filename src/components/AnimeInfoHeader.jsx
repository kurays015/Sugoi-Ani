import { Link } from "react-router-dom";
import MobileAnimeInfoHeader from "./MobileAnimeInfoHeader";

function AnimeInfoHeader() {
  return (
    <header className="bg-[#1C1C1C] relative py-3 px-16 flex items-center justify-between gap-2 custom-sm:px-3 custom-sm:gap-5 custom-xxl:px-10">
      <Link to="/" className="custom-sm:hidden md:block">
        <img src="/images/uzaki.png" className="w-[80px]" alt="logo" />
      </Link>
      <nav className="custom-sm:hidden md:block md:order-3">
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
      {/* responsive header */}
      <MobileAnimeInfoHeader />
    </header>
  );
}

export default AnimeInfoHeader;
