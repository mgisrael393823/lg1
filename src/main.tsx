import React from "react";
import ReactDOM from "react-dom/client";
import { TempoDevtools } from "tempo-devtools";
import App from "./App.tsx";
import "@/index.css";
import { BrowserRouter } from "react-router-dom";

TempoDevtools.init();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
);
