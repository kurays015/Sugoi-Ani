import { useRef, useEffect, useState } from "react";
import Hls from "hls.js";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";
import QualitySettings from "./QualitySettings";

function VideoPlayer({ qualities }) {
  const [selectedQuality, setSelectedQuality] = useState("default");
  const [showQualitySettings, setShowQualitySettings] = useState(false);
  const videoRef = useRef(null);
  let hls = null;

  useEffect(() => {
    loadSource();
  }, [selectedQuality]);

  const loadSource = () => {
    const selectedSource = qualities.find(q => q.quality === selectedQuality);
    if (!selectedSource || !videoRef.current) return;

    const src = selectedSource.url;

    if (Hls.isSupported()) {
      if (hls) {
        hls.destroy();
      }
      hls = new Hls();
      hls.loadSource(src);
      hls.attachMedia(videoRef.current);
      // videoRef.current.autoplay = true; // Set autoPlay attribute for HLS playback
    } else if (videoRef.current.canPlayType("application/vnd.apple.mpegurl")) {
      videoRef.current.src = src;
    }
  };

  const handleQualitySettings = () => {
    setShowQualitySettings(true);
  };

  return (
    <div className="relative group w-[800px] custom-sm:w-full group">
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
      <video controls ref={videoRef} className="w-full h-full"></video>
      <p className="text-center text-[#777777]">Thanks for watching!</p>
      <QualitySettings
        qualities={qualities}
        showQualitySettings={showQualitySettings}
        setShowQualitySettings={setShowQualitySettings}
        setSelectedQuality={setSelectedQuality}
      />
    </div>
  );
}

export default VideoPlayer;
