import React, { useState, useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { data } from "../data"
import AuthContext from "../auth-context"

const Cards = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
  justify-content: space-evenly;
`
const CardContainer = styled.div`
  border-radius: 10px;
  width: 25rem;
  padding: 1.5rem;
  cursor: pointer;
  box-shadow:
  5.3px 1.9px 6.8px rgba(0, 0, 0, 0.033),
  10.6px 3.7px 16.4px rgba(0, 0, 0, 0.044),
  16.4px 5.8px 30.8px rgba(0, 0, 0, 0.049),
  24.2px 8.5px 54.9px rgba(0, 0, 0, 0.052),
  37.5px 13.2px 102.8px rgba(0, 0, 0, 0.055),
  77px 27px 246px rgba(0, 0, 0, 0.07);

  :hover {
    transform: scale(1.05);
  }
`
const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  img {
    width: 40rem;
    cursor: pointer;
    transition-duration: 250ms;
  }
  h3 {
    font-size: ${({theme}) => theme.fontSize.h3};
  }
  p {
    font-size: ${({theme}) => theme.fontSize.p};
  }
  button {
    padding: 1.4rem;
    cursor: pointer;
    border-radius: 10px;
    font-size: ${({theme}) => theme.fontSize.h4};
    color: ${({theme}) => theme.colors.darkBlue};
    background-color: ${({theme}) => theme.colors.yellow};
    border: 1px solid ${({theme}) => theme.colors.yellow};
    transition-duration: 250ms;
  }
  button:hover {
    background-color: ${({theme}) => theme.colors.darkBlue};
    color: ${({theme}) => theme.colors.white};
    border: 1px solid ${({theme}) => theme.colors.darkBlue};
  }
`

const OrderCard: React.FC = () => {
  const ctx = useContext(AuthContext)

  const bumbleBinsCards = data.bins.map(bin => {
    return(
      <CardContainer key={bin.binCount} onClick={() => ctx.handleClick(bin.binCount)}>
        <CardWrapper>
          <img src="src/components/assets/bumblebin.png"/>
          <h3>{bin.binCount} Bins</h3>
          <p>Here are the benefits of Bumble Bins!</p>
          <button>Order Now</button>
        </CardWrapper>
      </CardContainer>
    )
  });

  return (
    <Link to="/orderform">
      <Cards>
        {bumbleBinsCards}
      </Cards>
    </Link>
  )
};

export default OrderCard;
