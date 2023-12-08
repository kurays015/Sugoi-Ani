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

function AddToFavorites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Box position="absolute" top="5px" right="5px">
        <Button
          ref={btnRef}
          colorScheme="teal"
          onClick={onOpen}
          bg="#777777"
          fontSize="xs"
          leftIcon={<FaLongArrowAltLeft />}
        >
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
