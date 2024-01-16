import { useParams } from "react-router-dom";
import useWatchEpisode from "../hooks/useWatchEpisode";
import VideoPlayer from "../components/ArtPlayer";
import { EpisodeError, ApiError } from "../components/Errors";
import { VideoSkeleton } from "../components/SkeletonLoader";
import { useEffect } from "react";

function WatchEpisode() {
  const { episodeId } = useParams();
  const {
    data: videoSources,
    isLoading,
    isError,
    error,
  } = useWatchEpisode(episodeId);

  useEffect(() => {
    if (videoSources) {
      localStorage.setItem(
        "src",
        JSON.stringify(videoSources?.download) || null
      );
    }
  }, [videoSources?.download]);

  if (isLoading) return <VideoSkeleton />;
  if (!videoSources) return <EpisodeError />;
  if (isError) return <ApiError error={error.message} />;

  return <VideoPlayer qualities={videoSources?.sources} />;
}

export default WatchEpisode;
