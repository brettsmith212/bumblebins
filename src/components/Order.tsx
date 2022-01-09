import React from 'react';
import styled from 'styled-components';
import OrderCard from './OrderCard';

const OrderContainer = styled.section`
  padding: 3rem;
  display: flex;
  gap: 2rem;
`

const Order: React.FC = () => {

  return (
    <OrderContainer>
      <OrderCard />
      <OrderCard />
      <OrderCard />
      <OrderCard />
    </OrderContainer>
  )
};

export default Order;