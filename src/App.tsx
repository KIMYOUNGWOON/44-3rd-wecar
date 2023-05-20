import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';
import SellerPage from './pages/SellerPage/SellerPage';
import ProductDetail from 'pages/Detail/ProductDetail';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/detail" element={<ProductDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
