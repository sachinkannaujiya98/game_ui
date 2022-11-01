import React from "react";

const SignIn = () => {
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className=" bg-gray-200 p-4">
        <h1 className="py-4  text-center text-xl">Meta Login </h1>
        <form className="text-center flex flex-col">
          <input
            type="text"
            placeholder="Username"
            required
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />

          <input
            type="text"
            placeholder="Password"
            required
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />
        </form>
        <div className=" flex flex-col justify-center items-center">
          <button
            type="submit"
            className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold w-32"
          >
            Login
          </button>
        </div>
        <div className="text-right font-semibold text-sm mt-2 underline">
          <a href="/">Forgot Password</a>
        </div>
        <div className="text-center">
          <a href="/sign-up">Sign Up</a>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
