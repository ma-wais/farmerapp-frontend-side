import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <App />
    <ToastContainer
      draggable
      theme="colored"
      hideProgressBar
      position="top-center"
      toastStyle={{
        minHeight: "0px",
        borderRadius: "12px",
        margin: "10px 0.2rem",
      }}
    />
  </BrowserRouter>
);
