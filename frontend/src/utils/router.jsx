import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";
import Home from "../pages/Home";
import ProductsPage from "../pages/ProductsPage";
import NotFoundPage from "../pages/NotFoundPage";
import SingleProductPage from "../pages/SingleProductPage";
import Cart from "../pages/Cart";
import Dashboard from "../pages/Dashboard";
import AboutUs from "../pages/AboutUs";
import DashboardOrders from "../components/DashboardOrders";
import DashboardUsers from "../components/DashboardUsers";
import DashboardProducts from "../components/DashboardProducts";

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
        path: "/about",
        element: <AboutUs />,
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <DashboardOrders />,
          },
          {
            path: "/dashboard/orders",
            element: <DashboardOrders />,
          },
          {
            path: "/dashboard/users",
            element: <DashboardUsers />,
          },
          {
            path: "/dashboard/products",
            element: <DashboardProducts />,
          },
        ],
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
