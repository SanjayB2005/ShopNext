import React, { useState, useEffect } from 'react';
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import RootLayout from './Layouts/RootLayout';
import Home from './Pages/Home';
import Contact from './Pages/Contact';
import About from './Pages/About';
import Cart from './Pages/Cart';
import LogIn from './Pages/LogIn';
import ProductsLayout from './Layouts/ProductsLayout';
import ProductDetails, { ProductDetailsLoader } from './Pages/ProductDetails';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<RootLayout cart={cart} setSearchQuery={setSearchQuery} />}>
      <Route path='/' element={<ProductsLayout />}>
        <Route index element={<Home searchQuery={searchQuery} />}  />
        <Route path=':id' element={<ProductDetails cart={cart} setCart={setCart} />} loader={ProductDetailsLoader} />
      </Route>
      <Route path='contact' element={<Contact />} />
      <Route path='about' element={<About />} />
      <Route path='cart' element={<Cart cart={cart} setCart={setCart} />} />
      <Route path='login' element={<LogIn />} />
    </Route>
  ));

  return (
    <>
      <ToastContainer theme='dark' position='top-center' autoClose={4000} pauseOnHover={false} />
      <RouterProvider router={router} />
    </>
  );
};

export default App;