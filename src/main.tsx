import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { DataMining } from "./pages/DataMining.tsx";
import Home from "./pages/Home.tsx";
import { ProcessDM } from "./pages/ProcessDM.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/data-mining",
    element: <DataMining />,
    children: [
      {
        path: "tahapan-data-mining",
        element: <ProcessDM />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
