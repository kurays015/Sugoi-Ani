import { useParams } from "react-router-dom";
import useWatchEpisode from "../hooks/useWatchEpisode";
import VideoPlayer from "../components/VideoPlayer";
import Error from "../components/Error";
import { Skeleton } from "@chakra-ui/react";
import { VideoSkeleton } from "../components/SkeletonLoader";

function WatchEpisode() {
  const { episodeId } = useParams();
  const {
    data: videoSources,
    isLoading,
    isError,
    error,
  } = useWatchEpisode(episodeId);

  if (isLoading) return <VideoSkeleton />;
  if (!videoSources)
    return (
      <h1 className="text-white text-2xl">
        Something went wrong! It's either the anime has no data or server error
      </h1>
    );
  if (isError) return <Error error={error} />;

  return (
    <VideoPlayer
      qualities={videoSources?.sources}
      downloadSrc={videoSources?.download}
    />
  );
}

export default WatchEpisode;
