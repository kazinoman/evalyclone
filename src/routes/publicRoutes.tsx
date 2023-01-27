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
  {
    path: PUBLIC_ROUTES.ALLPRODUCTS,
    Component: lazy(() => import("@/pages/products")),
  },
  {
    path: PUBLIC_ROUTES.SINGLEPRODUCT,
    Component: lazy(() => import("@/pages/singleProduct")),
  },
  {
    path: PUBLIC_ROUTES.CATEGORY,
    Component: lazy(() => import("@/pages/category")),
  },
  {
    path: PUBLIC_ROUTES.SINGLECATEGORY,
    Component: lazy(() => import("@/pages/categoryProduct")),
  },
];
