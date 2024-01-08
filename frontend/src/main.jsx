import React from "react";
import ReactDOM from "react-dom/client";
import axios from "axios";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App";
import ProductsPage from "./pages/ProductsPage";
import ManufacturersPage from "./pages/ManufacturersPage";
import SantaListPage from "./pages/SantaListPage";
import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
        loader: async () => {
          const products = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products`
          );
          const manufacturers = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/manufacturers`
          );
          const categories = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/categories`
          );
          return { products, manufacturers, categories };
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
        loader: async () => {
          const data = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/api/products`
          );
          return data;
        },
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
