import React from "react";
import Avatar from "../src/images/avatar.png";
import { MdOutlineModeEditOutline } from "react-icons/md";

const UserProfile = () => {
  return (
    <>
      <div className="w-48 mx-auto relative">
        <img src={Avatar} alt="avatar" />
        <div className="absolute bottom-0 left-28 bg-black text-white  text-center py-2 rounded-full h-10 w-10 ">
          <button>
            <MdOutlineModeEditOutline className="text-2xl" />
          </button>
        </div>
      </div>
      <div className="grid md:grid-cols-2 md:gap-10 md:my-8 md:mx-20  grid-rows-2 gap-6  mx-4 my-8 ">
        <div className=" text-xl font-semibold border-2 border-gray-400 rounded-md ">
          <div className="border-b-2  border-gray-400">
            <p>Name *</p>
            <small>rudy</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>Username *</p>
            <small>rudy</small>
          </div>
          <div>
            <label htmlFor="text-area" className="text-xl font-semibold">
              About
            </label>
            <textarea
              type="text"
              placeholder="Say Something about you..."
              className="w-full outline-none"
            />
          </div>
        </div>
        <div className=" text-xl font-semibold border-2 border-gray-400 rounded-md h-auto ">
          <div className="border-b-2  border-gray-400">
            <p>Discord</p>
            <small className="text-gray-400">username#1234</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>Twitter</p>
            <small className="text-gray-400">@username</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>Instagram</p>
            <small className="text-gray-400">@username</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>Opensea</p>
            <small className="text-gray-400">@username</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>LinkedIn</p>
            <small className="text-gray-400">@username</small>
          </div>
          <div className="border-b-2  border-gray-400">
            <p>TikTok</p>
            <small className="text-gray-400">@username</small>
          </div>
          <div>
            <p>Personal Website</p>
            <small className="text-gray-400">https://website.com</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
