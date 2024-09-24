import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Dashboard from "../Pages/Dashboard";
import Products from "../Pages/Products";
import ErrorPage from "../Pages/ErrorPage";
import Cart from "../Pages/Cart";
import SingleProduct from "../Components/SingleProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/products",
        element: <Dashboard />,
      },
      {
        path: "/dashboard/category",
        element: <Dashboard />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:productsId",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);
