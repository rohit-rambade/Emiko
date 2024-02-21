import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Product from "../pages/Product";
import Faq from "../pages/Faq";
import Careers from "../pages/Careers";
import About from "../pages/About";
import History from "../pages/History";

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
        path: "aboutus",
        element: <About />,
        children: [
          {
            path: "history",
            element: <History />,
          },
        ],
      },
      {
        path: "faq",
        element: <Faq />,
      },
      {
        path: "carrers",
        element: <Careers />,
      },
      {
        path: "history",
        element: <History />,
      },
    ],
  },
]);
