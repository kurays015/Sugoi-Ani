import SkeletonLoader from "./SkeletonLoader";
import Card from "./Card";
function GridCardContainer({ isLoading, animes }) {
  return (
    <div className="grid gridRes gap-[1em] max-w-[1000px] mx-auto p-[2em] custom-sm:grid-cols-2">
      {isLoading ? <SkeletonLoader /> : <Card animes={animes} />}
    </div>
  );
}

export default GridCardContainer;
