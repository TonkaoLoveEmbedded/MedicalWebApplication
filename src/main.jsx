import { createRoot } from 'react-dom/client'
import './index.css'
import React from "react";
import App from './App.jsx'
import { HashRouter } from 'react-router-dom';
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);
