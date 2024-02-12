import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleCreateAccount = () => {
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("email", email);
    navigate("/profile");
  };

  return (
    <div className="flex items-start justify-center min-h-screen mt-10">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold font-serif mb-8">
          Create your
          <br /> PopX account
        </h1>
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <label
              htmlFor="fullName"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-lg"
            >
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="phoneNumber"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-lg"
            >
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="email"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-lg"
            >
              Email Address<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="password"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-lg"
            >
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="relative">
            <label
              htmlFor="companyName"
              className="absolute top-0 left-0 px-3 -mt-3 bg-white text-violet-500 text-lg"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="border border-gray-300 rounded-md w-80 h-12 px-6 focus:outline-none focus:border-gray-500 text-lg"
            />
          </div>
          <div className="flex items-center my-auto">
            <div className="flex items-start justify-start">
              <label htmlFor="agency" className="mr-2 text-lg text-gray-700">
                Are you an Agency?<span className="text-red-500">*</span>
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="radio"
                id="yes"
                name="agency"
                value="yes"
                className="mr-1"
              />
              <label htmlFor="yes" className="mr-4 text-lg text-gray-700">
                Yes
              </label>
              <input
                type="radio"
                id="no"
                name="agency"
                value="no"
                className="mr-1"
              />
              <label htmlFor="no" className="text-lg text-gray-700">
                No
              </label>
            </div>
          </div>
          <button
            onClick={handleCreateAccount}
            className="bg-violet-500 hover:bg-blue-300 text-white font-bold py-4 px-32 rounded-lg focus:outline-none focus:shadow-outline text-lg"
          >
            Create Account
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
