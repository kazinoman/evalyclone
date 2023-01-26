import { lazy } from "react";
import { PUBLIC_ROUTES } from "./paths";

export const publicRoutes = [
  {
    path: PUBLIC_ROUTES.HOME,
    Component: lazy(() => import("@/pages/home")),
  },
  {
    path: PUBLIC_ROUTES.SIGNIN,
    Component: lazy(() => import("@/pages/login")),
  },
  {
    path: PUBLIC_ROUTES.SINGUP,
    Component: lazy(() => import("@/pages/signup")),
  },
  {
    path: PUBLIC_ROUTES.NOTFOUND,
    Component: lazy(() => import("@/pages/404")),
  },
];
