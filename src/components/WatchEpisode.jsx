import { useParams } from "react-router-dom";
import useWatchEpisode from "../hooks/useWatchEpisode";
import VideoPlayer from "./VideoPlayer";
import Error from "./Error";
function WatchEpisode() {
  const { episodeId } = useParams();
  const {
    data: videoSources,
    isLoading,
    isError,
    error,
  } = useWatchEpisode(episodeId);

  if (isLoading)
    return (
      <div className="text-white text-2xl text-center w-full">
        Wait lang... uwu!
      </div>
    );
  if (isError) return <Error error={error} />;
  return <VideoPlayer qualities={videoSources?.sources} />;
}

export default WatchEpisode;
