import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import { DarkModeContextProvider } from './context/DarkModeContext';

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);
root.render(
   <DarkModeContextProvider>
    <BrowserRouter>
       <App />
    </BrowserRouter>
    </DarkModeContextProvider>
);
