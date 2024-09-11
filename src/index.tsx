import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './componentes/App';
import reportWebVitals from './reportWebVitals';
import http from './utils/http';

http.get('/posts')
http.get('/posts/1')
http.get('http://viacep.com.br/ws/68675000/json/')

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
