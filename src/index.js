import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import './index.css';
import Home from './pages/Home/Home.js'
import TheProduct from './pages/The_Product/TheProduct.js'
import Order from './pages/Order/Order.js'
import About from './pages/About/About.js'
import NavBar from './navbar/NavBar.js';
import "@fontsource/aileron";
import "@fontsource/aileron/400.css"; 
import "@fontsource/aileron/400-italic.css"; 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="the-product" element={<TheProduct />} />
          <Route path="order" element={<Order />} />
        </Route>
        <Route path="*" element={<div>No Page Found</div>} />
      </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
