import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from "../data";
import AuthContext from '../auth-context';
import useOrderForm from '../hooks/useOrderForm'

const FormContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin-bottom: 20rem;

  h2 {
    font-size: ${({theme}) => theme.fontSize.h2};

  }
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
  select{
    margin-left: 1rem;
    width: 5rem;
    height: 3.5rem;

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



const OrderForm: React.FC = () => {
  const ctx = useContext(AuthContext);
  console.log("ORDER FORM BINS: ", ctx.bins)
  console.log("CTX VALUES: ", ctx.values)
  const [formErrors, disabled, handleChange] = useOrderForm();


  const handleSubmit = (e: any): void => {
    e.preventDefault();
  }


  const binCountDropdown = data.bins.map(bin => {
    if (bin.binCount === ctx.bins){
      return <option key={bin.binCount} selected value={bin.binCount}>{bin.binCount}</option>
    } else{
      return <option key={bin.binCount} value={bin.binCount}>{bin.binCount}</option>
    }
    
  });
  
  return(
    <FormContainer>
      <h2>Order Form</h2>
      <Form onSubmit={handleSubmit}>
        <div>
          <Errors>{formErrors.name}</Errors>
          <label>
            Name
            <input 
              type="text" 
              name="name"
              value={ctx.values.name}
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
              value={ctx.values.email}
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
            value={ctx.values.phoneNumber}
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
            value={ctx.values.dropOffDate}
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
              value={ctx.values.dropOffAddress}
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
            value={ctx.values.pickUpDate}
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
              value={ctx.values.pickUpAddress}
              onChange={handleChange}
              placeholder="123 Evergreen Terrace" />
          </label>
        </div>
        <div>
          <Errors>{formErrors.totalBins}</Errors>
          <label>
            Total Bins
            <select name="totalBins" onChange={handleChange}>
              <option value="" disabled>Select # of Bins</option>
              {binCountDropdown}
            </select>
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