import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../App";
import Home from "../pages/home";
import Passports from "../pages/documents/passports";
import Documentation from "../pages/documents/shipping-documents";
import Vaccines from "../pages/documents/vaccines";
import Visas from "../pages/documents/visas";
import NotFound from "../pages/not-found";

export const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/documents/shipping-documents",
        element: <Documentation />,
      },
      {
        path: "/documents/passports",
        element: <Passports />,
      },
      {
        path: "/documents/vaccines",
        element: <Vaccines />,
      },
      {
        path: "/documents/visas",
        element: <Visas />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
