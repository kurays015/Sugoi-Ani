import Skeleton from "react-loading-skeleton";

export function SkeletonItem() {
  return (
    <div className="animate-pulseAnimation">
      <div>
        <Skeleton height="210px" width="100%" />
      </div>
    </div>
  );
}

function SkeletonLoader() {
  return Array.from({ length: 20 }).map((_, index) => (
    <SkeletonItem key={index} />
  ));
}

export default SkeletonLoader;
