import { Link } from "react-router-dom";
import MobileAnimeInfoHeader from "./MobileAnimeInfoHeader";
import { useCategories } from "../hooks/useCategories";
import useLogout from "../hooks/useLogout";
import { getCookies } from "../hooks/useCookies";
import { IoMdArrowDropdown } from "react-icons/io";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from "@chakra-ui/react";

function AnimeInfoHeader() {
  const { logout } = useLogout();
  const user = getCookies("user") || getCookies("googleUser") || null;

  const categories = useCategories();
  return (
    <header className="bg-[#1C1C1C] relative py-3 px-16 flex items-center justify-between gap-2 custom-sm:px-3 custom-sm:gap-5 custom-xxl:px-10">
      <Link to="/" className="custom-sm:hidden md:block">
        <img src="/images/uzaki.png" className="w-[80px]" alt="logo" />
      </Link>
      <nav className="custom-sm:hidden md:block md:order-3">
        <ul className="flex items-center gap-[1em]">
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
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<IoMdArrowDropdown className="text-primary" />}
                variant="unstyled"
              />
              <MenuList bg="#1c1c1c" zIndex="99" borderColor="gray">
                <MenuItem
                  bg="#1c1c1c"
                  color="white"
                  _hover={{ backgroundColor: "#777777" }}
                  onClick={logout}
                >
                  Logout
                </MenuItem>
              </MenuList>
            </Menu>
          )}
        </ul>
      </nav>
      {/* responsive header */}
      <MobileAnimeInfoHeader />
    </header>
  );
}

export default AnimeInfoHeader;
