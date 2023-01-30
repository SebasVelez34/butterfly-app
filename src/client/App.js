import React from "react";
import { Routes, Route } from "react-router-dom";
import routes from '../routes';

import PageNotFound from './components/PageNotFound'

const App = ({ serverData = null }) => {
  return (
    <div>
      <Routes>
        {routes.map((route) => {
          const { path, fetchInitialData, component: Comp } = route;

          return (
            <Route
              key={path}
              path={path}
              element={
                <Comp data={serverData} fetchInitialData={fetchInitialData} />
              }
            />
          );
        })}
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  )
};

export default App;
