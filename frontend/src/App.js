import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Product from './pages/Product';
import Checkout from './pages/Checkout';
import Customize from './pages/Customize';
import About from './pages/About';
import Contact from './pages/Contact';
import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import { CartProvider } from './context/CartContext';

export default function App(){
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/shop' element={<Shop/>} />
          <Route path='/product/:id' element={<Product/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/customize' element={<Customize/>} />
          <Route path='/about' element={<About/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='/admin/login' element={<AdminLogin/>} />
          <Route path='/admin/dashboard' element={<AdminDashboard/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}
