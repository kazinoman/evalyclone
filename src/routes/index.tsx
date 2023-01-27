import React, { useEffect, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NProgress from "@/components/nprogress";
import { publicRoutes } from "./publicRoutes";
import { ButtomHeader } from "src/layout/header";

const BaseRoutes = () => {
  return (
    <BrowserRouter>
      <ButtomHeader />
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
  );
};

export default BaseRoutes;
