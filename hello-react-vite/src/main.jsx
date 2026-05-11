import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './ch13/App';
import { BrowserRouter } from 'react-router-dom';
import Ex7_App from './ch13/ex/Ex7_App';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Ex7_App />
  </BrowserRouter>,
);
