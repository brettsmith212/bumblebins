import React, { useState } from 'react';

interface valueObj {
  name: string,
  email: string,
  phoneNumber: string,
  dropOffDate: string,
  dropOffAddress: string,
  pickUpDate: string,
  pickUpAddress: string,
  totalBins: string,
}

interface contextObj {
  bins: number,
  setBins: React.Dispatch<React.SetStateAction<number>>,
  handleClick: (x:number) => void,
  values: valueObj,
  setValues: React.Dispatch<React.SetStateAction<valueObj>>,
}

const AuthContext = React.createContext<contextObj>({
  bins: 0,
  setBins: () => {},
  handleClick: () => {},
  values: {
    name: "",
    email: "",
    phoneNumber: "",
    dropOffDate: "",
    dropOffAddress: "",
    pickUpDate: "",
    pickUpAddress: "",
    totalBins: "",
  },
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

