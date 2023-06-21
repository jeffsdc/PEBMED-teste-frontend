import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";

const Default = () => {
  return (
    <div className="layout">
      <Header />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default Default;
