import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { orderFormSchema } from './OrderFormSchema';
import { Link } from 'react-router-dom';

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20rem;
`
const Form = styled.form`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  label {
    font-size: ${({theme}) => theme.fontSize.h4};
  }
  input {
    margin-left: 1rem;
    margin-right: 1rem;
    font-size: ${({theme}) => theme.fontSize.h4};
  }
  button {
    width: 100%;
    padding: 1.4rem;
    cursor: pointer;
    border-radius: 10px;
    font-size: ${({theme}) => theme.fontSize.h4};
    color: ${({theme}) => theme.colors.darkBlue};
    background-color: ${({theme}) => theme.colors.yellow};
    border: 1px solid ${({theme}) => theme.colors.yellow};
    transition-duration: 250ms;
    text-align: center;
  }
  button:hover {
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.darkBlue};
  }
  button:disabled {
    color: ${({theme}) => theme.colors.white};
    background-color: gray;
    border: none;
    cursor: not-allowed;
  }
`
const Errors = styled.p`
  color: red;
`

const initialFormError: object = {
  name: "",
}

const OrderForm: React.FC = () => {
  const [formErrors, setFormErrors] = useState(initialFormError);
  const [disabled, setDisabled] = useState(true);
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

  const validateForm = (name: any, value: any): void => {
    yup
    .reach(orderFormSchema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ""}))
    .catch((err: any) => setFormErrors({...formErrors, [name]: err.errors[0]}))
  };

  const handleChange = (e: any): void => {
    validateForm(e.target.name, e.target.value);
    setValues({
      ...values,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e: any): void => {
    e.preventDefault();
  }

  useEffect(() => {
    orderFormSchema.isValid(values).then(valid => setDisabled(!valid));
  }, [values]);


  return(
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <div>
          <Errors>{formErrors.name}</Errors>
          <label>
            Name
            <input 
              type="text" 
              name="name"
              value={values.name}
              onChange={handleChange}
              placeholder="Homer Simpson" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.email}</Errors>
          <label>
            Email
            <input 
              type="email" 
              name="email"
              value={values.email}
              onChange={handleChange}
              placeholder="homer@simpson.com" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.phoneNumber}</Errors>
          <label>
            Phone Number
            <input 
            type="telephone" 
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            placeholder="888-800-0008" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.dropOffDate}</Errors>
          <label>
            Drop Off Bins On
            <input 
            type="date"
            name="dropOffDate"
            value={values.dropOffDate}
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <Errors>{formErrors.dropOffAddress}</Errors>
          <label>
            Drop Off Bins At
            <input 
              type="address" 
              name="dropOffAddress"
              value={values.dropOffAddress}
              onChange={handleChange}
              placeholder="123 Evergreen Terrace" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.pickUpDate}</Errors>
          <label>
            Pick Up Bins On
            <input 
            type="date" 
            name="pickUpDate"
            value={values.pickUpDate}
            onChange={handleChange} />
          </label>
        </div>
        <div>
          <Errors>{formErrors.pickUpAddress}</Errors>
          <label>
            Pick Up Bins At
            <input 
              type="address" 
              name="pickUpAddress"
              value={values.pickUpAddress}
              onChange={handleChange}
              placeholder="123 Evergreen Terrace" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.totalBins}</Errors>
          <label>
            Number of Bins
            <input 
            type="number"
            name="totalBins"
            value={values.totalBins}
            onChange={handleChange} />
          </label>
        </div>
        <label>
          <input type="checkbox" />
          I live on the ground floor
        </label>
        <label>
          <input type="checkbox" />
          Drop them off at my doorstep
        </label>
        <Link to="/orderpayment">
          <button disabled={disabled}>Payment</button>
        </Link>
      </Form>
    </FormContainer>
  )
};

export default OrderForm;