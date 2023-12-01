import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaEye } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmPasswordRef = useRef();
  const {
    dispatch,
    error,
    setError,
    showPassword,
    setShowPassword,
    showConfirmPassword,
    setShowConfirmPassword,
  } = useAuthContext();

  async function handleSignup(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

    if (confirmPassword !== password) {
      setError("Passwords don't match");
      return;
    }

    try {
      const { data: credentials } = await axios.post(
        "https://sugoiserver.onrender.com/user/signup",

        {
          email,
          password,
        }
      );
      if (credentials) {
        sessionStorage.setItem("user", JSON.stringify(credentials));
        dispatch({ type: "LOGIN", payload: credentials });
        navigate("/");
      } else {
        console.log(credentials);
      }
    } catch (err) {
      setError(err.response.data.error);
      console.log(err.response.data.error);
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 custom-sm:p-3">
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
            type={`${showPassword ? "text" : "password"}`}
            placeholder="Enter your password"
            id="password"
            className="w-full py-2 px-3 bg-gray-700 text-white rounded-md outline-none"
          />
          <div className="absolute right-2 top-[57%]">
            <FaEye
              className="text-gray-400"
              onClick={() => setShowPassword(prev => !prev)}
            />
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
          <div className="absolute right-2 top-[57%]">
            <FaEye
              className="text-gray-400"
              onClick={() => setShowConfirmPassword(prev => !prev)}
            />
          </div>
        </div>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="text-gray-300 text-sm mb-4">
          Already have an account?
          <span className="text-violet-300">
            <Link to="/user/login"> Login</Link>
          </span>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-all ease-in-out duration-300 w-full "
          >
            Signup
          </button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
