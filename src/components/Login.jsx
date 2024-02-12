import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex items-start justify-center min-h-screen mt-10">
      <div className="text-center mb-8 space-y-3">
        <h1 className="text-4xl font-bold font-serif">
          SignIn to your
          <br /> PopX account
        </h1>
        <p className="text-lg text-gray-700">
          Lorem ipsum dolor sit ammt,
          <br />
          consectetur adipiscing elit
        </p>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative mt-7">
            <label
              htmlFor="email"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-xl"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-xl"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-xl"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-xl"
            />
          </div>
          <Link to="/profile">
            <button className="bg-gray-400 hover:bg-blue-300 text-white font-bold py-4 px-[136px] rounded-lg focus:outline-none focus:shadow-outline text-xl">
              Login
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
