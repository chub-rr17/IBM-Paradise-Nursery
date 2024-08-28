import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";

import App from "./App.tsx";
import Router from "./routes";
import { store } from "./store";

import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
        <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
