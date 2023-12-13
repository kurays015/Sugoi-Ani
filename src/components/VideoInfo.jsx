import { FcDownload } from "react-icons/fc";

import { Link } from "react-router-dom";
function VideoInfo({ downloadSrc }) {
  return (
    <div className="text-center text-primary p-1 custom-xxl:absolute custom-xxl:w-full">
      <p>Thanks for watching!</p>
      <span className=" px-2 rounded-[3px] text-xs flex flex-col items-center justify-center">
        You can also download it here
        <Link to={downloadSrc} target="blank">
          <FcDownload className="text-2xl" />
        </Link>
      </span>
    </div>
  );
}

export default VideoInfo;
