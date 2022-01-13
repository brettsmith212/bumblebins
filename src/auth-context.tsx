import React, { useState } from 'react';

const AuthContext = React.createContext({
  bins: 0,
  setBins: () => {},
  handleClick: () => {},
  values: {},
  setValues: () => {},
});

export const AuthContextProvider: React.FC = (props) => {
  const [bins, setBins] = useState(0);
  const [values, setValues] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    dropOffDate: "",
    dropOffAddress: "",
    pickUpDate: "",
    pickUpAddress: "",
    totalBins: "",
  });
  const handleClick = (binCount: number): void => {
    setBins(binCount)
  }

  return (
    <AuthContext.Provider
    value={{
      bins,
      setBins,
      handleClick,
      values,
      setValues
    }}>
    {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;

