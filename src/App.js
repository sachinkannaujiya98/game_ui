import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import SignIn from "./SignIn";
import Signup from "./Signup";
import Navbar from "./Navbar";
import Landing from "./Landing";
function App() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />}></Route>
          <Route path="/sign-in" element={<SignIn />}></Route>
          <Route path="/sign-up" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
