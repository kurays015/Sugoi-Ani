import { Link } from "react-router-dom";
import { CiPlay1 } from "react-icons/ci";

function Related({ relations }) {
  return (
    <div className="max-w-[85%] mx-auto my-8 custom-sm:mx-4 custom-sm:my-5 custom-sm:max-w-full">
      <h1 className="mb-[1em] text-2xl font-medium text-[#aaa]">Related</h1>
      <div className="grid gridRes gap-[1em] custom-sm:grid-cols-2">
        {relations.map(relation => (
          <div
            key={relation.id}
            className="relative rounded-md overflow-hidden cursor-pointer group"
          >
            <Link to={`/info/${relation.id}`}>
              <div
                className={`absolute w-full top-0 bottom-0 transition-all duration-300 ease-in-out group-hover:bg-transparent`}
              ></div>
            </Link>
            <div className="absolute top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
              <CiPlay1 className="text-white text-2xl opacity-0 group-hover:opacity-100" />
            </div>
            <img
              src={relation.image}
              className="h-full w-full"
              alt={relation.title.userPreferred}
            />
            <div className="absolute bottom-0 bg-customBlack w-full text-center p-3">
              <h5 className="text-white custom-sm:text-xs">
                {relation.title.userPreferred}
              </h5>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Related;
