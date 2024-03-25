import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home.tsx";
import DataMining from "./pages/DataMining.tsx";
import ProcessDM from "./pages/Week1/ProcessDM.tsx";
import CrispDm from "./pages/Week1/CrispDM.tsx";
import Semma from "./pages/Week1/Semma.tsx";
import Ccc from "./pages/Week1/Ccc.tsx";
import DataPreparation from "./pages/Week2/DataPreparation.tsx";
import DataVisualization from "./pages/Week2/DataVisualization.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/data-mining",
    element: <DataMining />,
  },
  {
    path: "/data-mining/week1",
    element: <ProcessDM />,
  },
  {
    path: "/data-mining/week1/crisp-dm",
    element: <CrispDm />,
  },
  {
    path: "/data-mining/week1/semma",
    element: <Semma />,
  },
  {
    path: "/data-mining/week1/ccc",
    element: <Ccc />,
  },
  {
    path: "/data-mining/week2",
    element: <DataPreparation />,
  },
  {
    path: "/data-mining/week2/data-visual",
    element: <DataVisualization />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
