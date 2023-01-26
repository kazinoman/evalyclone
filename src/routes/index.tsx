import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NProgress from "@/components/nprogress";
import { publicRoutes } from "./publicRoutes";

const BaseRoutes = () => {
  return (
    // <Suspense fallback={<NProgress />}>
    <BrowserRouter>
      <Routes>
        // PUBLIC routes
        {publicRoutes.map(({ path, Component }, id) => (
          <Route
            key={id}
            path={path}
            element={
              <Suspense fallback={<NProgress />}>
                <Component />
              </Suspense>
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
    // </Suspense>
  );
};

export default BaseRoutes;
