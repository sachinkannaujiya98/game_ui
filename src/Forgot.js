import React from "react";
import { useNavigate } from "react-router-dom";
import goBack from "../src/images/back.webp";
const Forgot = () => {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const handleSubmit = () => {};
  return (
    <div>
      <div className="h-screen flex items-center justify-center w-full ">
        <div className=" bg-gray-200 p-4">
          <button onClick={back}>
            <img src={goBack} alt="go back" className="w-8" />
          </button>

          <h1 className="py-4   text-center text-2xl">Meta </h1>
          <p className="text-md font-thin text-center">Forget Password</p>
          <form onSubmit={handleSubmit} className="text-center flex flex-col">
            <input
              type="text"
              name="username"
              required
              //   value={login.username}
              placeholder="Email"
              //   onChange={handleChange}
              className="my-8 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
            />
            <div className=" flex flex-col justify-center items-center">
              <button
                type="submit"
                className="bg-blue-400 px-6 py-1 rounded-sm text-white font-thin w-32"
              >
                Send OTP
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
