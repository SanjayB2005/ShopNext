import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

const RootLayout = ({ cart, setSearchQuery }) => {
  return (
    <>
      <Navbar cart={cart} setSearchQuery={setSearchQuery} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;