import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CaptainDataContext } from "../context/CaptainContext";
import axios from "axios";

const CaptainSignup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [vehicleColor, setVehicleColor] = useState("");
  const [vehiclePlate, setVehiclePlate] = useState("");
  const [vehicleCapacity, setVehicleCapacity] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [captainData, setCaptainData] = useState({});

  const navigate = useNavigate();

  const { cap, setCap } = useContext(CaptainDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();

    const captainData = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email: email,
      password: password,
      vehicle: {
        color: vehicleColor,
        plate: vehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType,
      },
    };

    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/captains/register`,
      captainData
    );

    if (response.status === 201) {
      const data = response.data;
      setCap(data.captain);
      localStorage.setItem("token", data.token);
      navigate("/captain-home");
    }

    // setFirstName("");
    // setLastName("");
    // setEmail("");
    // setPassword("");
    // setVehicleColor("");
    // setVehiclePlate("");
    // setVehicleCapacity("");
    // setVehicleType("");

    // console.log("Hello");

    // console.log(firstName, lastName, email, password);

    // setUserData({
    //   fullName: {
    //     firstName: firstName,
    //     lastName: lastName,
    //   },
    //   email: email,
    //   password: password,
    // });
    // console.log(userData);
  };
  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-5"
          src="https://pngimg.com/d/uber_PNG24.png"
          alt=""
        />
        <form onSubmit={submitHandler}>
          <h3 className="text-lg w-full font-medium mb-2">
            What's our Captain's name
          </h3>
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
          <h3 className="text-lg font-medium mb-2">
            What's our captain's email
          </h3>
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

          <h3 className="text-lg font-medium mb-2">Vehicle Color</h3>
          <input
            type="text"
            value={vehicleColor}
            onChange={(e) => {
              setVehicleColor(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
            placeholder="Enter Vehicle Color"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Plate</h3>
          <input
            type="text"
            value={vehiclePlate}
            onChange={(e) => {
              setVehiclePlate(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
            placeholder="Enter Vehicle Plate"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Capacity</h3>
          <input
            type="number"
            value={vehicleCapacity}
            onChange={(e) => {
              setVehicleCapacity(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
            placeholder="Enter Vehicle Capacity"
          />

          <h3 className="text-lg font-medium mb-2">Vehicle Type</h3>
          <select
            value={vehicleType}
            onChange={(e) => {
              setVehicleType(e.target.value);
            }}
            className="border mb-6 w-full bg-[#eeeeee] px-4 py-2 text-lg rounded placeholder:text-base"
            required
          >
            <option value="" disabled>
              Select Vehicle Type
            </option>
            <option value="car">Car</option>
            <option value="auto">Auto</option>
            <option value="bike">Bike</option>
          </select>

          <button className="font-semibold mb-3 w-full bg-[#111] px-4 py-2 text-white rounded placeholder:text-base">
            Create Captain Account
          </button>
          <p className="text-center mb-4">
            Already have an account?{" "}
            <Link to="/captain-login" className="text-blue-600">
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

        {/* <p className="text-[10px] leading-tight">
          This site is protected by reCAPTCHA and the{" "}
          <span className="underline">Google Privacy Policy</span> and{" "}
          <span className="underline">Terms of Service apply</span>.{" "}
        </p> */}
      </div>
    </div>
  );
};

export default CaptainSignup;
