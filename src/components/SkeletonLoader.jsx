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

export function AnimeInfoSkeleton() {
  return (
    <div className="bg-[#242424] flex flex-col gap-8 pt-5 h-[100vh]  md:py-12 custom-sm:px-2 custom md:px-14 lg:px-28 xl:px-48  ">
      <section className="rounded-md bg-[#1C1C1C] max-w-[85%] mx-auto flex gap-8 custom-sm:max-w-[100%] custom-sm:h-[500px] custom-sm:justify-center custom-sm:flex custom-sm:flex-col custom-sm:text-center custom-sm:items-center lg:flex-row overflow-hidden w-full">
        <Skeleton w="100%" h="100%" />
      </section>
      <Skeleton h="20px" w="100%" mx="auto" mt="8" />
      <Skeleton h="20px" w="100%" mx="auto" mt="4" />
    </div>
  );
}

export function AnimeCategoriesSkeleton() {
  return Array.from({ length: 20 }).map((_, index) => (
    <SkeletonItem key={index} />
  ));
}

export function VideoSkeleton() {
  return (
    <div className="relative group custom-sm:w-full group xl:w-full  custom-xxl:w-[40%]">
      <Skeleton
        height={{
          base: "280px",
          sm: "160px",
          xs: "250px",
          md: "350px",
          lg: "550px",
          xl: "350px",
          xxl: "300px",
          "2xxl": "350px",
        }}
        startColor="#7A5EB9"
        endColor="#7A5EB9"
        w="100%"
        mx="auto"
        mt="4"
      />
      <img
        src="/images/pika.gif"
        alt="pikachu loader"
        className="absolute top-[50%] left-[50%] -translate-x-[50%] w-[60px]"
      />
    </div>
  );
}
