import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../App";
import Home from "../pages/home";

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
        lazy: async () => {
          const module = await import(
            "../pages/documents/shipping-documents"
          );

          return { Component: module.default };
        },
      },
      {
        path: "/documents/passports",
        lazy: async () => {
          const module = await import("../pages/documents/passports");

          return { Component: module.default };
        },
      },
      {
        path: "/documents/vaccines",
        lazy: async () => {
          const module = await import("../pages/documents/vaccines");

          return { Component: module.default };
        },
      },
      {
        path: "/documents/visas",
        lazy: async () => {
          const module = await import("../pages/documents/visas");

          return { Component: module.default };
        },
      },
      {
        path: "*",
        lazy: async () => {
          const module = await import("../pages/not-found");

          return { Component: module.default };
        },
      },
    ],
  },
]);

export default router;