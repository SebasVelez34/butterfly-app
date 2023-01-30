import React from 'react';
import { BrowserRouter } from "react-router-dom";
import { hydrateRoot } from 'react-dom/client';
import App from './App';
import '../client/assets/styles/index.scss';

const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

hydrateRoot(document.getElementById('root'), app);
