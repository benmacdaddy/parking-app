import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AuthPage from './routes/AuthPage';
import TicketsPage from './routes/TicketsPage';
import AboutUs from './routes/AboutUs';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from './store/auth-context';

// testing

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
    <BrowserRouter>
    <link href="https://api.mapbox.com/mapbox-gl-js/v1.6.1/mapbox-gl.css" rel="stylesheet" />
    <Routes>
      <Route path="/authpage" element={<AuthPage />}/>
      <Route path="/ticketpage" element={<TicketsPage />}/>
      <Route path="/" element={<AboutUs />}/>

    </Routes>
    </BrowserRouter>
    </AuthContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
