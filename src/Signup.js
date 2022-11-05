import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { SignupContext } from "./Context";
import axios from "axios";

const Signup = () => {
  const [hide, setHide] = useState(true);
  const [hideSignup, setHideSignup] = useState(true);
  // const navigate = useNavigate();
  const { data, setData } = useContext(SignupContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:5000/send-otp", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    localStorage.setItem();
  };

  const showBtn = () => {
    setHide(!hide);
    setHideSignup(!hideSignup);
  };
  const verifyOtp = () => {
    axios
      .post("http://localhost:5000/sign-up", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div className="h-screen flex items-center justify-center w-full">
      <div className=" bg-gray-200 p-4">
        {hideSignup ? (
          <h1 className="py-4  text-center text-xl">Meta Signup </h1>
        ) : (
          <h1 className="py-4  text-center text-xl">Email verification </h1>
        )}

        <form
          onSubmit={handleSubmit}
          className={
            hideSignup
              ? "text-center flex flex-col"
              : "text-center flex flex-col hidden"
          }
        >
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="Name"
            onChange={handleChange}
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            autoComplete="off"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl "
          />
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            autoComplete="off"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />

          <button
            type="submit"
            onClick={showBtn}
            className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div
          className={
            hideSignup
              ? " flex flex-col items-center"
              : " flex flex-col items-center hidden"
          }
        >
          <Link to="/sign-in" className="my-2">
            Sign In
          </Link>
        </div>
        <div className={hide ? "flex flex-col hidden" : "flex flex-col "}>
          <input
            type="otp"
            name="otp"
            value={data.otp}
            placeholder="Enter OTP"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl "
          />
          <button
            type="type"
            onClick={verifyOtp}
            className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold mb-4"
          >
            Verify
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
