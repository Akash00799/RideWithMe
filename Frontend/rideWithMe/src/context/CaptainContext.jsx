import React, { createContext, useState } from "react";

export const CaptainDataContext = createContext();

const CaptainContext = ({ children }) => {
  const [cap, setCap] = useState({
    fullname: {
      firstname: "",
      lastname: "",
    },
    email: "",
    password: "",
    vehicle: {
      color: "",
      plate: "",
      capacity: "",
      vehicleType: "",
    },
  });

  return (
    <div>
      <CaptainDataContext.Provider value={{ cap, setCap }}>
        {children}
      </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;
