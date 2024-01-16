import React from "react";
import { Outlet } from "react-router-dom";
import AnimeInfoHeader from "../AnimeInfoHeader";

function AnimeLayout() {
  return (
    <>
      <AnimeInfoHeader />
      <Outlet />
      <div className="text-center text-xs text-primary my-2">
        Made with 💜 by Christ
      </div>
    </>
  );
}

export default AnimeLayout;
