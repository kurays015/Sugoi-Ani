import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Box,
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Favorites from "./Favorites";
import { useFavorites } from "../hooks/useFavorites";

function AddToFavorites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const { favorites } = useFavorites();

  return (
    <>
      <Box position="absolute" top="5px" right="5px">
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          bg="#777777"
          fontSize="xs"
          position="relative"
          leftIcon={<FaLongArrowAltLeft />}
        >
          {favorites.length > 0 && (
            <span className="absolute -top-1 -left-3 h-5 w-5 bg-violet-400 rounded-full flex items-center justify-center p-3">
              {favorites.length}
            </span>
          )}
          Favorites
        </Button>
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        transitionDuration={300}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody bg="#1C1C1C" color="white">
            <Favorites />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default AddToFavorites;
