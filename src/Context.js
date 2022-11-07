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
  const [hide, setHide] = useState(true);
  const [hideSignup, setHideSignup] = useState(true);
  const [error, setError] = useState();
  const [errorName, setNameError] = useState();
  const [errorUsername, setUsernameError] = useState();
  const [errorEmail, setEmailError] = useState();
  const [errorPassword, setPasswordError] = useState();
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
          hide,
          setHide,
          hideSignup,
          setHideSignup,
          error,
          setError,
          errorName,
          setNameError,
          errorUsername,
          setUsernameError,
          errorEmail,
          setEmailError,
          errorPassword,
          setPasswordError,
        }}
      >
        <App />
      </SignupContext.Provider>
    </div>
  );
};

export default Context;
