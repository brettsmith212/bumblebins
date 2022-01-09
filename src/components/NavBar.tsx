import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBar: React.FC = () => {

  return (
    <div>
      <h2>Bumble Bins</h2>
      <Link to="/">Home</Link>
      <Link to="/order">Order</Link>
      <Link to="/contact">Contact</Link>
    </div>
  )
};

export default NavBar;