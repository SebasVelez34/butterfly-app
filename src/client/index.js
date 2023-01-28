import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { hydrateRoot } from 'react-dom/client';
import Layout from './Pages/Layout';

import '../client/App.scss'

const app = (
  <Router>
    <Layout />
  </Router>
);

hydrateRoot(document.getElementById('app'),app);
