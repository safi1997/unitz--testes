import React from "react";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./pages/About";
import Features from "./pages/Features";
import Safi from "./pages/Safi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "Features",
    element: <Features />,
  },
  {
    path: "About",
    element: <About />,
  },
  {
    path: "Safi",
    element: <Safi />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
