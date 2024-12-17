import React, { useState } from "react";
import { Link } from "react-router-dom";

const UserSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userData, setUserData] = useState({});

  const submitHandler = (e) => {
    e.preventDefault();
    // console.log("Hello");
    console.log(firstName, lastName, email, password);
    setUserData({
      fullName: {
        firstName: firstName,
        lastName: lastName,
      },
      email: email,
      password: password,
    });
    console.log(userData);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword("");
  };
  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg font-medium mb-2">What's your name</h3>
          <div className="flex gap-4 mb-6">
            <input
              type="text"
              value={firstName}
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              className="border w-1/2 bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
              required
              placeholder="Enter First name"
            />
            <input
              type="text"
              value={lastName}
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              className="border  w-1/2  bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
              required
              placeholder="Enter Last name"
            />
          </div>
          <h3 className="text-lg font-medium mb-2">What's your email</h3>
          <input
            type="email"
            value={email}
            onChange={(e) => {
              // console.log(e.target.value);
              setEmail(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
            placeholder="email@example.com"
          />
          <h3 className="text-lg font-medium mb-2">Enter Password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
            placeholder="password"
          />
          <button className="font-semibold mb-3 w-full bg-[#111] px-4 py-2 text-white rounded placeholder:text-base">
            Login
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600">
              Login here
            </Link>
          </p>
        </form>
      </div>
      <div>
        {/* <Link
          to="/captain-login"
          className="flex items-center justify-center font-semibold mb-5 w-full bg-[#10b461] px-4 py-2 text-white rounded placeholder:text-base"
        >
          Sign in as Captain
        </Link> */}

        <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.{" "}
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
