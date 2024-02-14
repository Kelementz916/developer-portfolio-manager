import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import './styles/styles.css';
import './styles/styles.scss';

const root = createRoot(document.getElementById('app')); // Changed 'root' to 'app'
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);