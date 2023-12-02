import { Link, useNavigate } from "react-router-dom";
import { useRef } from "react";
import axios from "axios";
import { useAuthContext } from "../hooks/useAuthContext";
import { FaEye } from "react-icons/fa";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { dispatch, error, setError, showPassword, setShowPassword } =
    useAuthContext();
  const anime = JSON.parse(localStorage.getItem("anime") || "[]");

  async function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    try {
      const { data: credentials } = await axios.post(
        "https://sugoiserver.onrender.com/user/login",
        {
          email,
          password,
        }
      );
      if (credentials) {
        sessionStorage.setItem("user", JSON.stringify(credentials));
        dispatch({ type: "LOGIN", payload: credentials });
        navigate(`/watch/${anime.episodes[0]?.id}`);
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
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <div className="text-gray-300 text-sm mb-4">
          Don't have an account?{" "}
          <Link to="/user/signup" className="text-violet-300">
            Sign Up
          </Link>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="bg-indigo-800 hover:bg-indigo-700 text-white py-2 px-4 rounded-md transition-all ease-in-out duration-300 w-full"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
}

export default Login;
