import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LazyLoader } from "../components";

const LandingPage = lazy(() => import("./landing"));

export const Router = () => (
  <BrowserRouter>
    <Suspense fallback={<LazyLoader />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </Suspense>
  </BrowserRouter>
);
