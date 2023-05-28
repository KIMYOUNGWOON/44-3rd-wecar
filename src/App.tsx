import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';
import AdminPage from './pages/AdminPage/AdminPage';
import ProductDetail from 'pages/Detail/ProductDetail';
import Booking from 'pages/Booking/Booking';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seller" element={<AdminPage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/booking" element={<Booking />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
