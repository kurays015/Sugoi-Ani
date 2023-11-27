import React from "react";
import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "./AnimeInfoHeader";

function AnimeLayout() {
  return (
    <>
      <AnimeInfoHeader />
      <Outlet />
    </>
  );
}

export default AnimeLayout;
