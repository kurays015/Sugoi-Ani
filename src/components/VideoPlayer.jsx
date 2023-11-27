import { useRef, useEffect } from "react";
import Hls from "hls.js";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { IoSettingsOutline } from "react-icons/io5";

function VideoPlayer({ src }) {
  const videoRef = useRef(null);
  let hls = null;

  useEffect(() => {
    loadSource();
  }, [src]);

  const loadSource = () => {
    if (!src) return;
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

  // const rewind = () => {
  //   videoRef.current.currentTime -= 10; // Rewind by 10 seconds
  // };

  // const forward = () => {
  //   videoRef.current.currentTime += 10; // Forward by 10 seconds
  // };

  return (
    <div className="relative group w-[800px] custom-sm:w-full">
      <video controls ref={videoRef} className="w-full h-full"></video>
      <p className="text-center text-white text-1xl">testing palang ito hehe</p>
      {/* <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%] flex justify-around w-full opacity-0  transition-all duration-300 group-hover:opacity-100">
        <button onClick={rewind}>
          <TbRewindBackward10 className="text-white text-2xl" />
        </button>
        <button onClick={forward}>
          <TbRewindForward10 className="text-white text-2xl" />
        </button>
      </div> */}
      {/* <button className="absolute top-[2%] right-[2%] text-white">
        <IoSettingsOutline />
      </button> */}
    </div>
  );
}

export default VideoPlayer;
