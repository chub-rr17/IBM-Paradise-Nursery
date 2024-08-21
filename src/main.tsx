import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";
import Router from "./routes";

import "./index.css";
import { RouterProvider } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={Router} />
    <App />
  </StrictMode>
);
