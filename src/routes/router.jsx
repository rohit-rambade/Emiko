import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Faq from "../pages/Faq";
import Careers from "../pages/Careers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "products",
        element: <Product />,
      },
      {
        path: "history",
        element: <History />,
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "carrers",
        element: <Careers />,
      },
    ],
  },
]);
