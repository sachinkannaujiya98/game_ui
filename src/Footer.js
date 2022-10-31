import React from "react";
import Facebook from "./images/facebook.png";
import Linkedin from "./images/linkedin.png";
import Twitter from "./images/twitter.png";

const Footer = () => {
    const d = new Date();
    let year = d.getFullYear();
  return (<>
    <div className="md:grid md:grid-cols-3 md:gap-10 ">
      <div className="md:grid md:grid-cols-3 md:text-center md:font-semibold text-center text-lg ">
        <a href="" className="px-2">Mobile App</a>
        <a href="" className="px-2">Community</a>
        <a href="" className="px-2">Company</a>
      </div>
      <div className="grid grid-cols-1  text-center font-semibold text-xl">Meta</div>
      <div className="md:grid md:grid-cols-3 md:text-center md:font-semibold text-center text-lg">
        <a href="" className="px-2">Help desk</a>
        <a href="" className="px-2">Blog</a>
        <a href="" className="px-2">Resources</a>
      </div>
     
    </div>
     <hr className="text-black my-4 mx-12"/>
     <div className="mx-auto w-64 grid grid-cols-3 gap-4 my-8 ">
        <img src={Facebook} alt="" className="rounded-full"/>
        <img src={Linkedin} alt="" className=" w-[50px] rounded-full"/>
        <img src={Twitter} alt="" className=" w-[54px] rounded-full"/>
     </div>
     <p className="md:text-center md:text-xl text-center">© Photo, Inc,{year} .We love our users !</p>
     </>

  );
};

export default Footer;
