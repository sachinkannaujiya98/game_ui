import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const SignIn = () => {
  const [login, setLogin] = useState({});
  const [message, setMessage] = useState();
  const [loginData, setLoginData] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setLogin((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://192.168.29.221:5000/login", login)
      .then((res) => localStorage.setItem("userToken", res.data.data.token))
      .catch((err) => console.log(err));
    let token = localStorage.getItem("userToken");
    axios
      .get("http://192.168.29.221:5000/accessRoute", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => setLoginData(res))
      .catch((err) => console.log(err));
    const { username, password } = loginData.data.data;
    if (password === login.password && username === login.username) {
      setMessage("Login successfully");
      navigate("/user-profile");
    } else {
      setMessage("Invalid credential !");
    }
  };
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className=" bg-gray-200 p-4">
        <h1 className="py-4  text-center text-xl">Meta Login </h1>
        <p className="text-2xl text-red-400 text-center">{message}</p>
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
          <input
            type="text"
            name="username"
            required
            value={login.username}
            placeholder="Username"
            onChange={handleChange}
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />

          <input
            type="text"
            name="password"
            required
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
          <Link to="/forget">Forgot Password</Link>
        </div>
        <div className="text-center">
          <Link to="/sign-up">Sign Up</Link>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
