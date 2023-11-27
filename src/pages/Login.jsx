import { Link, useNavigate } from "react-router-dom";
import { useRef, useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "../context/AuthContext";

function Login() {
  const navigate = useNavigate();
  const emailRef = useRef();
  const passwordRef = useRef();
  const { user, dispatch } = useAuthContext();

  async function handleLogin(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    // if (!user || !user.token) {
    //   throw new Error("token is null");
    // }

    const { data: credentials } = await axios.post(
      "http://localhost:3000/login",
      // {
      //   headers: {
      //     "Content-Type": "application/json",
      //     "Authorization": `Bearer ${user.token}`,
      //   },
      // },
      {
        email,
        password,
      }
    );
    if (credentials) {
      localStorage.setItem("user", JSON.stringify(credentials));
      dispatch({ type: "LOGIN", payload: credentials });
      navigate("/test");
    }
  }

  return (
    <form
      className="p-5 max-w-[400px] bg-slate-600 flex flex-col gap-5 mx-auto mt-[10em] rounded-md"
      onSubmit={handleLogin}
    >
      <h5 className="text-white font-semibold text-2xl">Hello</h5>
      <div>
        <label htmlFor="email" className="text-white">
          Email:{" "}
        </label>
        <input
          ref={emailRef}
          type="email"
          placeholder="Enter your email"
          id="email"
          className="outline-none w-full py-1 pl-1 placeholder:text-sm"
        />
      </div>
      <div>
        <label htmlFor="password" className="text-white">
          Password:{" "}
        </label>
        <input
          ref={passwordRef}
          type="password"
          placeholder="Enter your password"
          id="password"
          className="outline-none w-full py-1 pl-1 placeholder:text-sm"
        />
      </div>
      <div className="text-gray-300 text-sm">
        Don't have an account?
        <span className="text-green-300">
          <Link to="/signup"> signup</Link>
        </span>
      </div>
      <div className="text-center">
        <button
          type="submit"
          className="border border-solid border-white p-2 px-5 bg-green-700 text-white hover:bg-green-600 transition-all ease-in-out duration-300 "
        >
          Login
        </button>
      </div>
    </form>
  );
}

export default Login;
