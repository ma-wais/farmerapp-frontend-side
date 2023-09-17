import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import App from "./pages/app/ECommerse/App.js";
import { BrowserRouter } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
ReactDOM.createRoot(document.getElementById("root") as HTMLDivElement).render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
        <ToastContainer
          draggable
          theme="colored"
          hideProgressBar
          autoClose={2000}
          position="top-center"
          toastStyle={{
            minHeight: "0px",
            borderRadius: "12px",
            margin: "10px 0.2rem",
          }}
        />
      </PersistGate>
    </Provider>
  </BrowserRouter>
);
