import { useParams } from "react-router-dom";
import useWatchEpisode from "../hooks/useWatchEpisode";
import VideoPlayer from "../components/VideoPlayer";
import { EpisodeError, ApiError } from "../components/Errors";
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
  if (!videoSources) return <EpisodeError />;
  if (isError) return <ApiError error={error} />;

  return (
    <VideoPlayer
      qualities={videoSources?.sources}
      downloadSrc={videoSources?.download}
    />
  );
}

export default WatchEpisode;
