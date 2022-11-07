import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { SignupContext } from "./Context";
import axios from "axios";

const Signup = () => {
  const {
    data,
    setData,
    hide,
    setHide,
    hideSignup,
    setHideSignup,
    // error,
    // setError,
    errorName,
    setNameError,
    errorUsername,
    setUsernameError,
    errorEmail,
    setEmailError,
    errorPassword,
    setPasswordError,
  } = useContext(SignupContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const showBtn = () => {
    if (!data.name) {
      setNameError("*please fill Name.");
    } else if (!data.username) {
      setUsernameError("*please fill username.");
    } else if (!data.email) {
      setEmailError("*please fill email.");
    } else if (!data.password) {
      setPasswordError("*please fill password.");
    } else {
      setHide(!hide);
      setHideSignup(!hideSignup);
    }
  };
  const verifyOtp = () => {
    axios
      .post("http://localhost:5000/sign-up", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(error);
    if (data.name === "" || data.username === "" || data.email === "") {
      console.log("Please fill all data !");
    } else {
      axios
        .post("http://localhost:5000/send-otp", data)
        .then((res) => console.log(res))
        .catch((err) => console.log(err));
      localStorage.setItem();
    }
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
          {!errorName ? (
            ""
          ) : (
            <small className="text-left text-red-500">*Please fill name</small>
          )}
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Username"
            autoComplete="off"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl "
          />
          {!errorUsername ? (
            ""
          ) : (
            <small className="text-left text-red-500">
              *Please fill Username
            </small>
          )}
          <input
            type="email"
            name="email"
            value={data.email}
            placeholder="Email"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />
          {!errorEmail ? (
            ""
          ) : (
            <small className="text-left text-red-500">*Please fill Email</small>
          )}
          <input
            type="password"
            name="password"
            value={data.password}
            placeholder="Password"
            autoComplete="off"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />
          {!errorPassword ? (
            ""
          ) : (
            <small className="text-left text-red-500">
              *Please fill password
            </small>
          )}
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
