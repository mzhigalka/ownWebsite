import ReactDOM from "react-dom/client";
import "./styles/index.css";
import React from "react";
import App from "./App";
import "./i18n";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
