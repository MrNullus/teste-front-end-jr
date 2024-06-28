import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";

interface RouteConfig {
  path: string;
  element: React.ReactNode;
}

const routes: RouteConfig[] = [
  {
    path: "/",
    element: <Home />,
  },
];

const router = createBrowserRouter(routes);

export { router };
