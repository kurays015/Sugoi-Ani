import { Link } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useAuthContext } from "../context/AuthContext";
//react icons
import ChipTabs from "./ChipTabs";
import uzaki from "/images/uzaki.png";
import SearchForm from "./SearchForm";

function CategoriesHeader() {
  const { logout } = useLogout();
  const { user } = useAuthContext();

  const categories = ["Recent", "Popular", "Trending"];

  return (
    <header className="flex flex-col items-center justify-center py-6 gap-[1em]">
      <div className="h-[100px]">
        <Link className="text-white" to="/">
          <img src={uzaki} className="h-full" />
        </Link>
      </div>
      <nav className="">
        <ChipTabs categories={categories} />
      </nav>
      <SearchForm />
    </header>
  );
}

export default CategoriesHeader;
