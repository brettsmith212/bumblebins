import * as React from 'react';
import { Route, Routes } from 'react-router-dom';

import { ThemeProvider } from "styled-components";
import { theme } from "./components/styles/Theme";
import GlobalStyles from "./components/styles/Global";
import Home from './components/Home';
import Order from './components/Order';
import Contact from './components/Contact';
import NavBar from './components/NavBar';
import OrderForm from './components/OrderForm';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <NavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/order' element={<Order />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/orderform' element={<OrderForm />} />
        </Routes>
      </>
    </ThemeProvider>
  )
}