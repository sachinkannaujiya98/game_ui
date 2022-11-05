import React, { useContext } from "react";
import axios from "axios";
import { SignupContext } from "./Context";
const VerifyOtp = () => {
  const { data, setData, initialState } = useContext(SignupContext);
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setData((values) => ({ ...values, [name]: value }));
    console.log(data);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post("http://localhost:5000/sign-up", data)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    localStorage.setItem();
    setData(initialState);
  };
  return (
    <div className="h-screen flex items-center justify-center w-full ">
      <div className=" bg-gray-200 p-4">
        <h1 className="py-4  text-center text-xl">Email Verification</h1>
        <form onSubmit={handleSubmit} className="text-center flex flex-col">
          <input
            type="text"
            name="otp"
            value={data.otp}
            placeholder="Enter OTP"
            onChange={handleChange}
            className="my-4 border-none outline-none  placeholder-black bg-gray-400 p-2  text-xl"
          />
          <div className=" flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-blue-400 px-6 py-1 rounded-sm text-white font-semibold w-32"
            >
              Verify
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VerifyOtp;
