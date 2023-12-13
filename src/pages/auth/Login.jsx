import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Spinner } from "@chakra-ui/react";
import { useGetAnimeDataInLocalStorage } from "../../hooks/useLocalStorage";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const anime = useGetAnimeDataInLocalStorage();
  const {
    dispatch,
    error,
    setError,
    isPending,
    setIsPending,
    showLoginPassword,
    setShowLoginPassword,
  } = useAuthContext();

  async function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    try {
      setIsPending(true);
      const { data: credentials } = await axios.post(
        `${import.meta.env.VITE_BACKEND_LOGIN}/user/login`,
        {
          email,
          password,
        }
      );
      if (credentials) {
        sessionStorage.setItem("user", JSON.stringify(credentials));
        dispatch({ type: "LOGIN", payload: credentials });
        navigate(`/watch/${anime.episodes[0]?.id}`);
      }
    } catch (err) {
      console.log(err);
      setError(err.response.data.error);
      setIsPending(false);
      console.log(err.response.data.error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 custom-sm:p-3">
      <form
        className="p-5 max-w-md w-full bg-gray-800 rounded-md"
        onSubmit={handleLogin}
      >
        <h5 className="text-white font-semibold text-1xl text-center mb-4">
          You need to login first...
        </h5>
        <div className="mb-4">
          <label htmlFor="email" className="text-white block mb-1">
            Email:
          </label>
          <input
            ref={emailRef}
            type="email"
            placeholder="Enter your email"
            id="email"
            className="w-full py-2 px-3 bg-gray-700 text-white rounded-md outline-none"
          />
        </div>
        <div className="mb-4 relative">
          <label htmlFor="password" className="text-white">
            Password:{" "}
          </label>
          <input
            ref={passwordRef}
            type={`${showLoginPassword ? "text" : "password"}`}
            placeholder="Enter your password"
            id="password"
            className="w-full py-2 px-3 bg-gray-700 text-white rounded-md outline-none"
          />
          <div
            className="absolute right-2 top-[57%]"
            onClick={() => setShowLoginPassword(prev => !prev)}
          >
            {showLoginPassword ? (
              <FaEye className="text-gray-400 cursor-pointer" />
            ) : (
              <FaEyeSlash className="text-gray-400 cursor-pointer" />
            )}
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="text-gray-300 text-sm mb-4">
          Don't have an account?{" "}
          <Link to="/user/signup" className="text-violet-300">
            Sign Up
          </Link>
        </div>
        <div className="flex justify-center min-h-[40px]">
          <button
            disabled={isPending}
            type="submit"
            className={`bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-all ease-in-out duration-300 w-[50%] flex items-center justify-center ${
              isPending ? "opacity-50" : ""
            }`}
          >
            {isPending ? (
              <Spinner color="white" speed="2s" size="xs" />
            ) : (
              "Login"
            )}
          </button>
        </div>
      </form>
      <h5 className="text-white text-xs text-center my-5">
        I'm only using a free server deployment, that's why sometimes logging in
        and signing up takes time. Please wait or reload the page.
      </h5>
    </div>
  );
}

export default Login;
