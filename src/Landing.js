import React from "react";
import BgImage from "./images/bg.jpg";
import Character from "./images/char.png";
const Landing = () => {
  return (
    <div className="relative">
      <img src={BgImage} alt="bg-image " className="md:w-full  " />
      <img
        src={Character}
        alt="avatar"
        className="absolute inset-x-0  bottom-0  md:left-[40%] md:w-[28rem] w-24 left-1/3 "
      />
      <p  className="absolute inset-x-0 md:bottom-96  md:left-[35%] text-gray-200 md:text-3xl bottom-20 left-2">The Largest Community of Games Development</p>
      <button className="  md:w-40 w-32 py-2 rounded-md text-white px-4 absolute inset-x-0 md:bottom-80  md:left-[50%] bg-cyan-500 shadow-lg shadow-cyan-500/50  bottom-6 left-28 ">Start Game</button>
    </div>
  );
};

export default Landing;
