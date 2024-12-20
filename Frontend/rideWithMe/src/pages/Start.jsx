import React from "react";
import { Link } from "react-router-dom";

const Start = () => {
  return (
    <div>
      <div className="bg-contain bg-[url(https://images.unsplash.com/photo-1647692833760-83032ecf3e3e?q=80&w=686&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  pt-8  h-screen w-full flex flex-col justify-between">
        <img
          className="w-16 ml-8"
          src="https://www.edigitalagency.com.au/wp-content/uploads/Uber-logo-white-png-900x313.png"
          alt=""
        />
        <div className="bg-white py-4 px-4 pb-7">
          <h2 className="text-[30px] font-bold">Get Started with Uber</h2>
          <Link
            to="/login"
            className="flex justify-center items-center w-full bg-black text-white py-3 rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Start;
