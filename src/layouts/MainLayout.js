import React from "react";
import { Outlet } from "react-router-dom";
import Menubar from "../components/Menubar/Menubar";

const MainLayout = () => {
  return (
    <div>
      <header>
        <nav>
          <Menubar></Menubar>
        </nav>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default MainLayout;
