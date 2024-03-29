import { Link } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";
import { FaGoogle } from "react-icons/fa";
import useGoogleCredentials from "../../hooks/useGoogleCredentials";

function Login() {
  const { emailRef, passwordRef } = useAuthContext();
  const { showLoginPassword, setShowLoginPassword, login, loginPending } =
    useAuthContext();
  const googleLogin = useGoogleCredentials();

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
          Welcome back!
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
            colorScheme="purple"
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
          <span className="text-sm text-gray-300 px-4">or</span>
          <hr className="w-full border-gray-300 border-1" />
        </div>
        <div className="text-center flex justify-center">
          <Button
            onClick={() => googleLogin()}
            variant="outline"
            colorScheme="gray"
            rightIcon={<FaGoogle />}
            _hover={{ bgColor: "gray.500", color: "white" }}
            color="gray.400"
            borderRadius="30px"
            fontSize=".8rem"
            padding="5px 30px"
          >
            Sign in with Google
          </Button>
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
