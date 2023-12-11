import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa6";
import { Link, Outlet } from "react-router-dom";
import { useAdvanceSearchArray } from "../hooks/useAdvanceSearchArray";

function AdvanceSearch() {
  const { genres, type } = useAdvanceSearchArray();
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
              <Link to={`/advance-search/${genre}`} key={genre}>
                {genre}
              </Link>
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
      <Outlet />
    </main>
  );
}

export default AdvanceSearch;
