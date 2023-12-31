import { AnimeCategoriesSkeleton } from "./SkeletonLoader";

import Card from "./Card";
function GridCardContainer({ isLoading, animes }) {
  return (
    <div className="grid gap-[1em] max-w-[1000px] mx-auto p-[2em] custom-sm:grid-cols-2 custom-600px:gap-6 md:grid-cols-3 lg:grid-cols-4  xl:grid-cols-5 xl:max-w-full xl:px-48">
      {isLoading ? <AnimeCategoriesSkeleton /> : <Card animes={animes} />}
    </div>
  );
}

export default GridCardContainer;
