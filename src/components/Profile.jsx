import React from "react";
import image from "./image.jpg";

const Profile = () => {
  const fullName = localStorage.getItem("fullName");
  const email = localStorage.getItem("email");
  return (
    <div>
      <nav className="flex justify-center mb-8 font-bold text-3xl mt-5 border stroke-slate-800">
        Account Settings
      </nav>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="flex gap-4 ">
          <img src={image} className="h-[100px] w-[100px] rounded-full" />
          <div className="flex flex-col">
            <h2 className="text-xl font-bold text-black">{fullName}</h2>
            <p className="text-gray-600">{email}</p>
          </div>
        </div>
        <p className="flex items-start justify-center ml-10  mt-11 text-gray-700 w-full">
          Lorem ipsum dolor sit amet, consectetur adipiscing
          <br />
          Elit. Mauris nec tincidunt neque. Duis nulla lectus,
          <br />
          tristique ac mattis quis, efficitur ac nunc.
          <br />
          --------------------------------------------------------
        </p>
      </div>
    </div>
  );
};

export default Profile;
