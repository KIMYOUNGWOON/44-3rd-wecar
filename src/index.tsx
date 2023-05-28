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
    console.log(response);

    return response;
  },
  error => {
    console.log(error);

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
