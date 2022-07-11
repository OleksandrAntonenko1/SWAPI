import React, { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { ROUTES } from "constants/index";

const Character = lazy(() => import("pages/Character"));
const Home = lazy(() => import("pages/Home"));

const Router = () => {
  return (
    <Routes>
      <Route path={`${ROUTES.CHARACTER}/:id`} element={<Character />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

export default Router;
