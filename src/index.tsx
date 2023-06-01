import React from 'react';
import ReactDOM from 'react-dom/client';
import GlobalStyle from 'styles/GlobalStyle';
import App from './App';
import axios from 'axios';
import { HOST_ADDRESS } from 'HostAddress';

// axios.interceptors.request.use(
//   config => {
//     if (config.url?.includes(HOST_ADDRESS)) {
//       const accessToken = localStorage.getItem('accessToken');
//       if (accessToken) {
//         config.headers.Authorization = `Bearer ${accessToken}`;
//       }
//     } else {
//       delete config.headers.Authorization;
//     }

//     return config;
//   },
//   error => {
//     return Promise.reject(error);
//   }
// );

// axios.interceptors.response.use(
//   response => {
//     // 정상 응답 처리
//     return response;
//   },
//   error => {
//     console.log(error);
//     const { response } = error;
//     const originalRequest = error.config;
//     if (
//       response.data.message === 'jwt expired' &&
//       originalRequest.url?.includes('auth')
//     ) {
//       const refreshToken = localStorage.getItem('refreshToken');
//       axios
//         .get(`${HOST_ADDRESS}/hosts/refresh`, {
//           headers: {
//             Authorization: `Bearer ${refreshToken}`,
//           },
//         })
//         .then(response => console.log(response))
//         .catch(error => {
//           console.log('리프레시', error.response);
//           localStorage.removeItem('accessToken');
//           localStorage.removeItem('refreshToken');
//           localStorage.removeItem('userName');
//           alert('로그아웃 되었습니다.');
//         });
//     }

//     return Promise.reject(error);
//   }
// );

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <>
    <GlobalStyle />
    <App />
  </>
);
