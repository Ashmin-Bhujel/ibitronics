import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import SingleProductPage from "../pages/SingleProductPage";
import Cart from "../pages/Cart";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "*",
        element: <NotFoundPage />,
      },
    ],
  },
]);
