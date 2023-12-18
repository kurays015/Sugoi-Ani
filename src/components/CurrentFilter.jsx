import { Tag, TagLabel, TagCloseButton, HStack } from "@chakra-ui/react";
import { FaTags } from "react-icons/fa6";
function CurrentFilter({ currentFilters, filterQueryParams, searchParams }) {
  const genre = searchParams.get("genres");
  return (
    <HStack
      gap={4}
      justifyContent="center"
      flexWrap="wrap"
      px={{
        base: "32px",
      }}
    >
      {currentFilters.length && (
        <div>
          <FaTags className="text-blue-300 custom-sm:text-xl" />
        </div>
      )}
      {currentFilters.map(value => (
        <Tag
          key={value}
          borderRadius="full"
          variant="solid"
          colorScheme="blue"
          display="flex"
          alignItems="center"
          justifyContent="center"
          maxWidth="100px"
        >
          <TagLabel fontSize={{ base: ".7rem" }}>
            {genre ? value.replace(/[\[\]"]+/g, "") : value}
          </TagLabel>
          <TagCloseButton onClick={() => filterQueryParams(value)} />
        </Tag>
      ))}
    </HStack>
  );
}

export default CurrentFilter;
