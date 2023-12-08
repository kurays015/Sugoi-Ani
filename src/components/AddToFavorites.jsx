import { useRef } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Flex,
  Box,
} from "@chakra-ui/react";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Favorites from "./Favorites";

function AddToFavorites() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Flex justifyContent="flex-end">
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
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton color="white" />
          <DrawerBody bg="#1C1C1C" color="white">
            <Favorites />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
}

export default AddToFavorites;
