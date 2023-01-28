import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import { hydrateRoot } from 'react-dom/client';
import Layout from './Pages/Layout';

import '../client/assets/styles/index.scss';

const app = (
  <Router>
    <Layout />
  </Router>
);

hydrateRoot(document.getElementById('root'),app);
