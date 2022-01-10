import React, { useState } from 'react';

const AuthContext = React.createContext({
  formErrors: {},
  setFormErrors: {},
});

const initialFormError = {
  name: ""
}

export const AuthContextProvider: React.FC = (props) => {
  const [formErrors, setFormErrors] = useState(initialFormError);

  return (
    <AuthContext.Provider
    value={{
      formErrors,
      setFormErrors,
    }}>
    {props.children}
    </AuthContext.Provider>
  )
};

export default AuthContext;