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
          <Route exact path="/" element={<Landing />}></Route>
          <Route exact path="/sign-in" element={<SignIn />}></Route>
          <Route exact path="/sign-up" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
