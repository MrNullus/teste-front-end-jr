import React from "react";
import { createBrowserRouter } from "react-router-dom";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <>Hello World</>,
  },
];

const router = createBrowserRouter(routes);

export { router };
