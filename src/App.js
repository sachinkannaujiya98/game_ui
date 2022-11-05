import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SignIn from "./SignIn";
import Signup from "./Signup";
// import Navbar from "./Navbar";
import Landing from "./Landing";
import VerifyOtp from "./VerifyOtp";
import Forgot from "./Forgot";
function App() {
  return (
    <>
      {/* <Navbar /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/navbar" element={<Navbar />}></Route> */}
          <Route path="/" element={<Landing />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
          <Route path="/verify-otp" element={<VerifyOtp />}></Route>
          <Route path="/forget" element={<Forgot />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
