import React from "react";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-4 font-serif">Welcome to PopX</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit ammt,
          <br />
          consectetur adipiscing elit
        </p>
      </div>

      <div className="flex flex-col items-center">
        <div className="mb-4 bg-violet-500 rounded-lg p-4 w-80 items-center flex justify-center">
          <Link to="/signup">
            <button className="text-white"> Create Account</button>
          </Link>
        </div>
        <div className="mb-4 bg-gray-300 rounded-lg p-4 w-80 items-center flex justify-center ">
          <Link to="/login">
            <button className="text-gray-700">Already registered? Login</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Landing;
