import { Link } from "react-router-dom";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Footer from "../components/Footer";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Home() {
  return (
    <>
      <div
        style={{ backgroundImage: "url(/images/aniwave-cover.jpg)" }}
        className="bg-cover bg-center bg-no-repeat text-white relative block text-center py-[30px] custom-sm:py-0 custom-sm:min-h-[500px] custom-xxl:mt-32"
      >
        <div className="flex items-center justify-center text-center absolute bottom-3 left-[50%] -translate-x-[50%] -translate-y-[50%] custom-500px:-translate-y-[0]">
          <Link
            to="recent"
            className=" bg-[#7248BD] w-[250px] rounded-[50px] flex items-center justify-center gap-[.5em] text-[1.2rem] py-[.7em] custom-sm:z-50"
          >
            Watch Anime <MdOutlineArrowRightAlt className="text-5xl" />
          </Link>
        </div>
        <div
          style={{ backgroundImage: "url(/images/animegirl.png)" }}
          className="bg-contain bg-center bg-no-repeat h-[550px] flex justify-center custom-xxl:h-[500px]"
        ></div>
      </div>
      <div className="text-center flex flex-col items-center justify-center">
        <div className="flex items-center gap-[1em]">
          <h1 className="text-[#808080]">Developed by:</h1>
          <Link to="https://github.com/kurays015" target="blank">
            <FaGithub className="text-3xl text-[#d1c7c7] hover:-translate-y-1 duration-300 ease-in-out" />
          </Link>
        </div>
        <div className=" mt-5 custom-sm:mt-0">
          <h2 className="text-[#808080]">Get in touch</h2>
          <div className="flex items-center justify-center gap-5 mt-3">
            <Link
              to="https://www.facebook.com/illidanstormrageee/"
              target="blank"
            >
              <FaFacebook className="cursor-pointer text-3xl text-[#d1c7c7] hover:-translate-y-1 duration-300 ease-in-out" />
            </Link>
            <Link to="https://twitter.com/ChristNarvarte" target="blank">
              <FaXTwitter className="cursor-pointer text-3xl text-[#d1c7c7] hover:-translate-y-1 duration-300 ease-in-out" />
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
