import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarContainer = styled.nav`
  hr {
    border: 0.5px solid ${({theme}) => theme.colors.yellow};
    opacity: 0.4;
  }
`
const NavbarWrapper = styled.div`
  height: 6rem;
  padding: 0 7rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    gap: 1.8rem;
  }
`
const LinkLogo = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.h2};
  cursor: pointer;
  transition-duration: 250ms;

  :hover {
    color: ${({theme}) => theme.colors.lightBlue};
  }
`
const LinkNav = styled(Link)`
  font-size: ${({ theme }) => theme.fontSize.h4};
  transition-duration: 250ms;
  

  :hover {
    color: ${({theme}) => theme.colors.lightBlue};
  }
`

const NavBar: React.FC = () => {

  return (
    <NavbarContainer>
      <NavbarWrapper>
        <div>
          <LinkLogo to="/">Bumble Bins</LinkLogo>
        </div>
        <div>
          <LinkNav to="/">Home</LinkNav>
          <LinkNav to="/order">Order</LinkNav>
          <LinkNav to="/contact">Contact</LinkNav>
        </div>
      </NavbarWrapper>
    </NavbarContainer>
  )
};

export default NavBar;