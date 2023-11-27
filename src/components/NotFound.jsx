import { Link } from "react-router-dom"; // If using React Router

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="bg-[#242424] p-8 rounded-lg shadow-lg text-center">
        <img
          src="/images/notfound.jpeg"
          alt="Not Found"
          className="mx-auto mb-8"
          style={{ maxWidth: "300px" }}
        />
        <h1 className="text-4xl font-bold mb-4 text-gray-300">
          404 - Not Found
        </h1>
        <p className="text-lg mb-4">
          Oops! The page you're looking for does not exist.
        </p>
        <Link
          to="/"
          className="bg-[#7248BD] hover:bg-violet-400 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Go to Home
        </Link>
      </div>
    </div>
  );
}

export default NotFound;
