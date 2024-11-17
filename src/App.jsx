import React from 'react';
import './App.css';
import {BrowserRouter, Routes} from "react-router-dom";
import {routerSchema} from "./routes/routerSchema";
import {RouterComponent} from "./routes/RouteComponent";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          {routerSchema.map(RouterComponent)}
        </Routes>
      </BrowserRouter>
  );
}

export default App;
