import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { IoSettingsOutline } from "react-icons/io5";
import QualitySettings from "./QualitySettings";
import VideoInfo from "./VideoInfo";

function VideoPlayer({ qualities, downloadSrc }) {
  const [selectedQuality, setSelectedQuality] = useState("default");
  const [showQualitySettings, setShowQualitySettings] = useState(false);
  const videoRef = useRef(null);
  let hls = null;

  useEffect(() => {
    const storedPlaybackState = JSON.parse(
      localStorage.getItem("videoPlaybackState")
    );

    const defaultSource = qualities.find(q => q.quality === selectedQuality);
    if (defaultSource) {
      loadSource(defaultSource.url);
    }

    if (storedPlaybackState && videoRef.current) {
      videoRef.current.currentTime = storedPlaybackState.currentTime;
      if (storedPlaybackState.isPlaying) {
        videoRef.current.play();
      }
    }
  }, [qualities, selectedQuality]);

  useEffect(() => {
    if (videoRef.current) {
      const savePlaybackState = () => {
        localStorage.setItem(
          "videoPlaybackState",
          JSON.stringify({
            currentTime: videoRef.current.currentTime,
            isPlaying: !videoRef.current.paused,
          })
        );
      };

      videoRef.current.addEventListener("pause", savePlaybackState);
      videoRef.current.addEventListener("seeked", savePlaybackState);

      return () => {
        videoRef.current.removeEventListener("pause", savePlaybackState);
        videoRef.current.removeEventListener("seeked", savePlaybackState);
      };
    }
  }, []);

  const loadSource = selectedSourceUrl => {
    if (!selectedSourceUrl || !videoRef.current) return;

    if (Hls.isSupported()) {
      if (hls) {
        hls.destroy();
      }
      hls = new Hls();
      hls.loadSource(selectedSourceUrl);
      hls.attachMedia(videoRef.current);
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = selectedSourceUrl;
    }
  };

  const handleQualityClick = (quality, sourceUrl) => {
    setSelectedQuality(quality);
    setShowQualitySettings(false);
    loadSource(sourceUrl);
  };

  const handleQualitySettings = () => {
    setShowQualitySettings(true);
  };

  return (
    <div className="relative group custom-sm:w-full group xl:w-full  custom-xxl:w-[40%]">
      <video
        controls
        ref={videoRef}
        className="w-full h-full custom-xxl:w-[800px]"
      ></video>
      <QualitySettings
        qualities={qualities}
        showQualitySettings={showQualitySettings}
        setShowQualitySettings={setShowQualitySettings}
        handleQualityClick={handleQualityClick}
      />
      <div
        className={`absolute top-2 right-2 text-white z-10 opacity-0 group-hover:opacity-100 ${
          showQualitySettings ? "hidden" : "block"
        }`}
      >
        <IoSettingsOutline
          onClick={handleQualitySettings}
          className="cursor-pointer text-1xl"
        />
      </div>
      <VideoInfo downloadSrc={downloadSrc} />
    </div>
  );
}

export default VideoPlayer;
