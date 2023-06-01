import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from 'pages/Main/Main';
import AdminPage from './pages/AdminPage/AdminPage';
import ProductDetail from 'pages/Detail/ProductDetail';
import Booking from 'pages/Booking/Booking';
import PaymentCompleted from 'pages/PaymentCompleted/PaymentCompleted';
import axios from 'axios';
import { HOST_ADDRESS } from 'HostAddress';

function App() {
  const [loginStatus, setLoginStatus] = useState(false);

  axios.interceptors.request.use(
    config => {
      if (
        config.url?.includes(HOST_ADDRESS) &&
        !config.url?.includes('refresh')
      ) {
        const accessToken = localStorage.getItem('accessToken');
        if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
      } else if (config.url?.includes('refresh')) {
        const refreshToken = localStorage.getItem('refreshToken');
        if (refreshToken) {
          config.headers.Authorization = `Bearer ${refreshToken}`;
        }
      } else {
        delete config.headers.Authorization;
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  axios.interceptors.response.use(
    response => {
      // 정상 응답 처리
      return response;
    },
    error => {
      console.log(error);

      // const { response } = error;
      // const originalRequest = error.config;

      // if (
      //   response.data.message === 'jwt expired' &&
      //   originalRequest.url?.includes('auth')
      // ) {
      //   axios
      //     .get(`${HOST_ADDRESS}/hosts/refresh`)
      //     .then(response => {
      //       const { refreshToken, accessToken } = response.data;
      //       const newAccessToken = refreshToken;
      //       const newRefreshToken = accessToken;
      //       localStorage.setItem('accessToken', newAccessToken);
      //       localStorage.setItem('refreshToken', newRefreshToken);
      //       originalRequest.headers.Authorization = `Bearer ${accessToken}`;
      //       return axios(originalRequest);
      //     })
      //     .catch(error => {
      //       console.log('리프레시', error.response);
      //       if (error.response.data.message === 'jwt expired') {
      //         localStorage.removeItem('accessToken');
      //         localStorage.removeItem('refreshToken');
      //         localStorage.removeItem('userName');
      //         alert('로그아웃 되었습니다.');
      //         setLoginStatus(false);
      //       }
      //     });
      // }

      return Promise.reject(error);
    }
  );

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main setLoginStatus={setLoginStatus} />} />
        <Route path="/seller" element={<AdminPage />} />
        <Route path="/detail/:id" element={<ProductDetail />} />
        <Route path="/booking/:id" element={<Booking />} />
        <Route path="/success/:id" element={<PaymentCompleted />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
