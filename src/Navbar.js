import React from "react";
// import { Link } from "react-router-dom";
import Logo from "./images/logo.png";
const Navbar = () => {
  return (
    <div className="md:flex md:justify-between md:items-center px-4 shadow-lg">
      <ul className=" md:flex md:items-center gap-4 text-blue-400 md:text-xl md:font-semibold ">
        <li>
          <img src={Logo} alt="logo" className="w-36 px-2" />
        </li>
        <li>Features</li>
        <li>Pricing</li>
        <li>Community</li>
        <li>Support</li>
      </ul>
      <div className="flex gap-2 py-2">
        <a
          href="/sign-in"
          className=" border-[1px] border-blue-500 px-5 py-1 rounded-md text-blue-500 "
        >
          Log in
        </a>
        <a
          href="/sign-up"
          className=" border-[1px] border-blue-600 px-5 py-1 rounded-md text-white bg-blue-500 shadow-lg shadow-blue-500/50"
        >
          Register
        </a>
      </div>
    </div>
  );
};

export default Navbar;
