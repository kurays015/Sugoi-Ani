import { Link } from "react-router-dom";
import { useRef } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Button } from "@chakra-ui/react";

function Signup() {
  const {
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
    signUp,
    signUpIsPending,
    emailRef,
    passwordRef,
    confirmPasswordRef,
  } = useAuthContext();

  async function handleSignup(e) {
    e.preventDefault();
    if (passwordRef.current.value === "" || emailRef.current.value === "") {
      return;
    }
    await signUp({
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirmPassword: confirmPasswordRef.current.value,
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 custom-sm:p-3">
      <form
        className="p-5 max-w-md w-full bg-gray-800 rounded-md"
        onSubmit={handleSignup}
      >
        <h5 className="text-white font-semibold text-1xl text-center mb-4">
          Thanks for signing up!
        </h5>
        <div className="mb-4">
          <label htmlFor="email" className="text-white block mb-1">
            Email:{" "}
          </label>
          <input
            disabled={signUpIsPending}
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
            disabled={signUpIsPending}
            ref={passwordRef}
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter your password"
            id="password"
            className="w-full py-2 px-3 bg-gray-700 text-white rounded-md outline-none"
          />
          <div
            className="absolute right-2 top-[57%]"
            onClick={() => setShowPassword(prev => !prev)}
          >
            {showPassword ? (
              <FaEye className="text-gray-400 cursor-pointer" />
            ) : (
              <FaEyeSlash className="text-gray-400 cursor-pointer" />
            )}
          </div>
        </div>
        <div className="mb-4 relative">
          <label htmlFor="confirmPassword" className="text-white block mb-1">
            Confirm Password:
          </label>
          <input
            type={`${showConfirmPassword ? "text" : "password"}`}
            ref={confirmPasswordRef}
            placeholder="Confirm your password"
            id="confirmPassword"
            className="w-full py-2 px-3 bg-gray-700 text-white rounded-sm outline-none"
          />
          <div
            className="absolute right-2 top-[57%]"
            onClick={() => setShowConfirmPassword(prev => !prev)}
          >
            {showConfirmPassword ? (
              <FaEye className="text-gray-400 cursor-pointer" />
            ) : (
              <FaEyeSlash className="text-gray-400 cursor-pointer" />
            )}
          </div>
        </div>
        <div className="text-gray-300 text-sm mb-4">
          Already have an account?
          <span className="text-violet-300">
            <Link to="/user/login"> Login</Link>
          </span>
        </div>
        <div className="flex justify-center min-h-[40px]">
          <Button
            bg="#813DF0"
            color="white"
            isLoading={signUpIsPending}
            loadingText="Please wait..."
            disabled={signUpIsPending}
            type="submit"
          >
            Signup
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

export default Signup;
