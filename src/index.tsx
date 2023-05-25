import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/GlobalStyle';
import App from './App';
import axios from 'axios';
import { HOST_ADDRESS } from 'HostAddress';

axios.interceptors.request.use(
  config => {
    if (config.url?.includes(HOST_ADDRESS)) {
      const accessToken = localStorage.getItem('accessToken');
      if (accessToken) {
        config.headers.Authorization = `Bearer ${accessToken}`;
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
    const newAccessToken = response.data.accessToken;
    const newRefreshToken = response.data.refreshToken;
    if (newAccessToken && newRefreshToken) {
      localStorage.setItem('accessToken', newAccessToken);
      localStorage.setItem('refreshToken', newRefreshToken);
    }
    return response;
  },
  error => {
    // 에러 응답 처리
    const originalRequest = error.config;
    // 엑세스 토큰 만료(401 Unauthorized) 에러인 경우에만 리프레시 토큰을 사용하여 새로운 액세스 토큰 요청
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const refreshToken = localStorage.getItem('refreshToken');

      return axios
        .post(`${HOST_ADDRESS}/users/refresh`, { refreshToken })
        .then(response => {
          const newAccessToken = response.data.accessToken;
          if (newAccessToken) {
            localStorage.setItem('accessToken', newAccessToken);

            // 새로 받은 액세스 토큰을 사용하여 원래 요청 재시도
            originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return axios(originalRequest);
          }
        })
        .catch(error => {
          // 리프레시 토큰으로 새로운 액세스 토큰을 받아오는데 실패한 경우 로그아웃 등의 처리
          console.error('Error refreshing access token:', error);
        });
    }

    return Promise.reject(error);
  }
);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
