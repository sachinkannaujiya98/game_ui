import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const SignIn = () => {
  const [login, setLogin] = useState({});
  const [loginData, setLoginData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin((values) => ({ ...values, [name]: value }));
    console.log(login);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let token = localStorage.getItem("userToken");
    axios
      .get("http://192.168.29.221:5000/accessRoute", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setLoginData(res))
      .catch((err) => console.log(err));
    console.log("logindata", loginData.data.data.password);

    const { username, password } = loginData.data.data;
    console.log("password", password);
    console.log("username", username);

    if (password === login.password && username === login.username) {
      console.log("login successfully");
    } else {
      console.log("Something Went Wrong !");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className=" bg-gray-200 p-4">
        <h1 className="py-4  text-center text-xl">Meta Login </h1>
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
          <input
            type="text"
            name="username"
            value={login.username}
            placeholder="Username Name"
            onChange={handleChange}
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />

          <input
            type="text"
            name="password"
            value={login.password}
            placeholder="Password"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />
          <div className=" flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold w-32"
            >
              Login
            </button>
          </div>
        </form>

        <div className="text-right font-semibold text-sm mt-2 underline">
          <Link to="/">Forgot Password</Link>
        </div>
        <div className="text-center">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
