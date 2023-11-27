import { Link, useParams } from "react-router-dom";
import useWatchEpisode from "../hooks/useWatchEpisode";
import { useEffect, useState } from "react";
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
      <div className="text-white text-2xl">Loading... wait lang! uwu </div>
    );
  if (isError) return <Error error={error} />;
  console.log(videoSources);
  return <VideoPlayer src={videoSources?.sources[4].url} />;
}

export default WatchEpisode;
