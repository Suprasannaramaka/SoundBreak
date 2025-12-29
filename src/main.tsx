import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter , Routes } from "react-router-dom";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
       <App />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
