import { Link } from "react-router-dom";
//react icons
import ChipTabs from "./ChipTabs";
import uzaki from "/images/uzaki.png";
import SearchForm from "./SearchForm";

function CategoriesHeader() {
  const categories = ["Recent", "Popular", "Trending"];

  return (
    <header className="flex flex-col items-center justify-center py-6 gap-[1em] custom-sm:px-[2em] custom-sm:pb-3">
      <div className="h-[100px]">
        <Link className="text-white" to="/">
          <img src={uzaki} className="h-full" />
        </Link>
      </div>
      <nav>
        <ChipTabs categories={categories} />
      </nav>
      <SearchForm />
    </header>
  );
}

export default CategoriesHeader;
