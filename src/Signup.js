import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const initialState = {
    username: "",
    name: "",
    password: "",
    email: "",
  };
  const [data, setData] = useState(initialState);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://192.168.29.221:5000/signup", data)
      .then((res) => res)
      .catch((err) => console.log(err));
    // localStorage.setItem();
    setData(initialState);
  };

  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className=" bg-gray-200 p-4">
        <h1 className="py-4  text-center text-xl">Meta Signup </h1>
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
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
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl"
          />

          <button
            type="submit"
            className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold"
          >
            Sign Up
          </button>
        </form>
        <div className=" flex flex-col items-center">
          <Link to="/sign-in" className="my-2">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
