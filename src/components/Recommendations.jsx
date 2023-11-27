import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";

function Recommendations({ recommendations }) {
  return (
    <div className="max-w-[85%] mx-auto my-8 custom-sm:mx-4 custom-sm:my-5 custom-sm:max-w-full">
      <h1 className="mb-[1em] text-2xl font-medium text-[#aaa]">
        Recommendations
      </h1>
      <div className="grid gridRes gap-[1em] custom-sm:grid-cols-2">
        {recommendations.map(recommendation => (
          <div
            key={recommendation.id}
            className="relative rounded-md overflow-hidden cursor-pointer group"
          >
            <Link to={`/info/${recommendation.id}`}>
              <div
                className={`absolute w-full top-0 bottom-0 transition-all duration-300 ease-in-out group-hover:bg-transparent`}
              ></div>
            </Link>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <CiPlay1 className="text-white text-2xl opacity-0 group-hover:opacity-100" />
            </div>
            <img
              src={recommendation.image}
              className="h-full w-full"
              alt={recommendation.title.userPreferred}
            />
            <div className="absolute bottom-0 bg-customBlack w-full text-center p-3 custom-sm:p-1">
              <h5 className="text-white custom-sm:text-xs ">
                {recommendation.title.userPreferred}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Recommendations;
