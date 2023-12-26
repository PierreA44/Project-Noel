import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

// import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import HomePage from "./pages/HomePage";
import ManufacturersPage from "./pages/ManufacturersPage";
import SantaListPage from "./pages/SantaListPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    children: [
      {
        path: "/products",
        element: <ProductsPage />,
        loader: async () => {
          const data = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products`
          );
          return data;
        },
      },
      {
        path: "/manufacturers",
        element: <ManufacturersPage />,
        loader: async () => {
          const data = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/manufacturers`
          );
          return data;
        },
      },
      {
        path: "/santalist",
        element: <SantaListPage />,
      },
    ],
  },
  {
    path: "*",
    element: <h1>404 Not Found</h1>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
