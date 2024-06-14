import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import AddProducts from "./pages/AddProducts";
import Contact from "./pages/Contact";
import PageNotFound from "./pages/PageNotFound";
import SingleProductPage from "./pages/SingleProductPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: "/",
        element: <HomePage />,
      },
      {
        path: "/products",
        element: <ProductsPage />,
      },
      {
        path: "/products/:id",
        element: <SingleProductPage />,
      },
      {
        path: "/add-products",
        element: <AddProducts />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <PageNotFound />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
