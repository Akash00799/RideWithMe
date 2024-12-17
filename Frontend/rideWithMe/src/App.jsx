import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import UserLogin from "../src/pages/UserLogin";
import UserSignup from "../src/pages/UserSignup";
import CaptainLogin from "../src/pages/CaptainLogin";
import CaptainSignup from "../src/pages/CaptainSignup";
import { UserDataContext } from "./context/UserContext";
import { useContext } from "react";

const App = () => {
  const ans = useContext(UserDataContext);
  console.log(ans);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<CaptainLogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
      </Routes>
    </div>
  );
};

export default App;
