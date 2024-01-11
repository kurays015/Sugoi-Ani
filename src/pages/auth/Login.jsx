import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button, useToast } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { useGetAnimeDataInLocalStorage } from "../../hooks/useLocalStorage";
import { jwtDecode } from "jwt-decode";
import { removeEmailDomain } from "../../utils/removeEmailDomain";

function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigate = useNavigate();
  const anime = useGetAnimeDataInLocalStorage();
  const toast = useToast();

  const { showLoginPassword, setShowLoginPassword, login, loginPending } =
    useAuthContext();

  async function handleLogin(e) {
    e.preventDefault();
    if (passwordRef.current.value === "" || emailRef.current.value === "") {
      return;
    }
    await login({
      email: emailRef.current.value,
      password: passwordRef.current.value,
    });
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
            disabled={loginPending}
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
            disabled={loginPending}
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
        <div className="text-gray-300 text-sm mb-4">
          Don't have an account?{" "}
          <Link to="/user/signup" className="text-violet-300">
            Sign Up
          </Link>
        </div>
        <div className="flex justify-center min-h-[40px]">
          <Button
            bg="#813DF0"
            color="white"
            isLoading={loginPending}
            loadingText="Please wait..."
            disabled={loginPending}
            type="submit"
          >
            Login
          </Button>
        </div>
        <div className="flex items-center justify-between my-5">
          <hr className="w-full border-gray-300 border-1" />
          <span className="text-sm text-gray-400 px-4">or</span>
          <hr className="w-full border-gray-300 border-1" />
        </div>
        <div className="text-center flex justify-center">
          <GoogleLogin
            onSuccess={credentialResponse => {
              const decoded = jwtDecode(credentialResponse.credential);
              navigate(`/watch/${anime.episodes[0]?.id}`);
              toast({
                title: `Welcome back! ${removeEmailDomain(decoded?.email)}`,
                status: "success",
                isClosable: true,
                duration: 2000,
              });
            }}
            onError={() => {
              toast({
                title: "Something went wrong.",
                status: "error",
                isClosable: true,
                duration: 4000,
              });
            }}
            useOneTap
          />
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
