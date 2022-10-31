import React from "react";

const Service = () => {
  return (
    <>
      <div className="md:flex md:justify-between md:items-center md:py-12 bg-gray-200 md:my-12 my-10">
        <p className="md:w-3/4 md:pl-8 md:text-2xl text-md font-thin break-all py-4 px-2">
          Esse sunt qui excepteur est irure ut ut do est dolore non consequat
          magna proident. Consequat dolore consectetur do magna culpa consequat
          eu est id laborum. Culpa deserunt reprehenderit ad velit non et.
        </p>
        <div className="md:pr-8 text-center py-4">
          <button
            type="submit"
            className=" border border- border-blue-800  bg-blue-500 rounded-md py-1 px-6  mr-4 text-white font-semibold"
          >
            Join today
          </button>
          <button
            type="submit"
            className=" border border- border-blue-800  text-blue-500 font-semibold bg-white rounded-md py-1 px-6  mr-4"
          >
            Contact us
          </button>
        </div>
      </div>

      <div className="md:flex md:justify-center my-8 md-w-full ">
        <video controls loop>
          <source
            src="https://dd2cgqlmnwvp5.cloudfront.net/homepage/videos/cross-platform.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </>
  );
};

export default Service;
