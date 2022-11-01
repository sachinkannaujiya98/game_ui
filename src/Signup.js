import React, { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("https://localhost:5000/signup", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
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
            placeholder="Username"
            onChange={handleChange}
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />
          <input
            type="text"
            name="username"
            value={data.username}
            placeholder="Name"
            onChange={handleChange}
            className="my-4 border-none outline-none placeholder-black bg-gray-400 p-2  text-xl "
          />
          <input
            type="text"
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
          <a href="/" className="my-2">
            Sign In
          </a>
        </div>
      </div>
    </div>
  );
};

export default Signup;
