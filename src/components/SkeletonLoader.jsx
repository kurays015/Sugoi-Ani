import Skeleton from "react-loading-skeleton";

export function SkeletonItem() {
  return (
    <div className="animate-pulseAnimation">
      <div>
        <Skeleton height="300px" width="100%" />
      </div>
      <h5 className="text-white">
        <Skeleton width={100} />
      </h5>
    </div>
  );
}

function SkeletonLoader() {
  return Array.from({ length: 20 }).map((_, index) => (
    <SkeletonItem key={index} />
  ));
}

export default SkeletonLoader;
