import React from 'react';
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const HomeContainer = styled.section`
  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    width: 25rem;
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

const Home: React.FC = () => {

  return (
    <HomeContainer>
      <Link to="/order">
        <button>Order Now!</button>
      </Link>
    </HomeContainer>
  )
};

export default Home;