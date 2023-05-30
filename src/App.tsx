import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';
import AdminPage from './pages/AdminPage/AdminPage';
import ProductDetail from 'pages/Detail/ProductDetail';
import Booking from 'pages/Booking/Booking';
import PaymentCompleted from 'pages/PaymentCompleted/PaymentCompleted';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seller" element={<AdminPage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/success/:id" element={<PaymentCompleted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
