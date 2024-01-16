import Artplayer from "artplayer";
import Hls from "hls.js";
import { useEffect, useRef } from "react";
import VideoInfo from "./VideoInfo";

function playM3u8(video, url, art) {
  if (Hls.isSupported()) {
    if (art.hls) art.hls.destroy();
    const hls = new Hls();
    hls.loadSource(url);
    hls.attachMedia(video);
    art.hls = hls;
    art.on("destroy", () => hls.destroy());
  } else if (video.canPlayType("application/vnd.apple.mpegurl")) {
    video.src = url;
  } else {
    art.notice.show = "Unsupported playback format: m3u8";
  }
}

const Player = ({ option, getInstance, ...rest }) => {
  const artRef = useRef();

  useEffect(() => {
    const art = new Artplayer({
      ...option,
      container: artRef.current,
    });

    if (getInstance && typeof getInstance === "function") {
      getInstance(art);
    }

    return () => {
      if (art && art.destroy) {
        art.destroy(false);
      }
    };
  }, []);

  return <div ref={artRef} {...rest}></div>;
};

export default function VideoPlayer({ qualities, downloadSrc }) {
  const transformedArray = qualities.map(item => {
    const { url, quality } = item;
    const newObj = {
      html: quality.toUpperCase(),
      url,
    };
    return newObj;
  });

  const defaultObject = transformedArray?.find(
    item => item.html === "720P" || item.html === "DEFAULT"
  );

  return (
    <div className="relative max-w-full custom-sm:pt-[56.25%] custom-sm:w-full xl:w-[70%] xl:pt-[30%]">
      <Player
        option={{
          layers: [
            {
              html: "",
              style: {
                position: "absolute",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                width: "100%",
                height: "100%",
              },
              disable: !Artplayer.utils.isMobile,
              click: function () {
                art.toggle();
              },
            },
          ],
          url: defaultObject?.url || "",
          type: "m3u8",
          customType: {
            m3u8: playM3u8,
          },
          setting: true,
          playbackRate: true,
          aspectRatio: true,
          subtitleOffset: true,
          quality: transformedArray || [],
          volume: 0.7,
          isLive: false,
          autoSize: true,
          fullscreen: true,
          theme: "#e20611",
          hotkey: true,
          miniProgressBar: true,
          playsInline: true,
          fastForward: true,
          autoPlayback: true,
          autoOrientation: true,
          theme: "#dc2626",
        }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />
      <VideoInfo downloadSrc={downloadSrc} />
    </div>
  );
}
