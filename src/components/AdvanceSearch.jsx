import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useAdvanceSearchArray } from "../hooks/useAdvanceSearchArray";
import { useCategoryContext } from "../hooks/useCategoryContext";

function AdvanceSearch() {
  const { genres, type } = useAdvanceSearchArray();
  const { setPageNumber } = useCategoryContext();
  return (
    <main className="text-center">
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<FaChevronDown />}
          bg="lightblue"
          color="#242424"
        >
          Genres
        </MenuButton>
        <MenuList>
          {genres.map(genre => (
            <MenuItem key={genre}>
              <Link
                to={`/advance-search/${genre}`}
                key={genre}
                onClick={() => setPageNumber(1)}
              >
                {genre}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <h5 className="text-white my-5">in progress...</h5>
      <Outlet />
    </main>
  );
}

export default AdvanceSearch;
