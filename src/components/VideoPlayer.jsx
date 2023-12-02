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
    const defaultSource = qualities.find(q => q.quality === selectedQuality);
    if (defaultSource) {
      loadSource(defaultSource.url);
    }
  }, [qualities, selectedQuality]);

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
    <div className="relative group custom-sm:w-full group xl:w-full  custom-xxl:w-[50%]">
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
