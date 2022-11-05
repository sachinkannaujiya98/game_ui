import React, { useState, createContext } from "react";
import App from "./App";
export const SignupContext = createContext();
const Context = () => {
  const initialState = {
    username: "",
    name: "",
    password: "",
    email: "",
    otp: "",
  };
  const [data, setData] = useState(initialState);
  const [userOtp, setUserOtp] = useState();
  //   const [finalData, setFinalData] = useState([]);

  return (
    <div>
      <SignupContext.Provider
        value={{
          data,
          setData,
          initialState,
          userOtp,
          setUserOtp,
        }}
      >
        <App />
      </SignupContext.Provider>
    </div>
  );
};

export default Context;
