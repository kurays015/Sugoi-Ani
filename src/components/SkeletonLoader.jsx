// import Skeleton from "react-loading-skeleton";
import { Card, Skeleton, SkeletonText } from "@chakra-ui/react";

export function SkeletonItem() {
  return (
    <Card>
      <Skeleton
        height={{
          base: "280px",
          sm: "160px",
          xs: "280px",
          xl: "240px",
          "2xl": "300px",
          "2xxl": "350px",
        }}
      />
      <SkeletonText mx="2" mt="2" noOfLines={1} skeletonHeight="9" />
    </Card>
  );
}

function SkeletonLoader() {
  return Array.from({ length: 20 }).map((_, index) => (
    <SkeletonItem key={index} />
  ));
}

export default SkeletonLoader;
