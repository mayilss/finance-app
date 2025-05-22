import { Outlet } from "react-router-dom";
import Header from "./header/Header";
import React from "react";
import Sidebar from "./sidebar/Sidebar";

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  return (
    <div className="overflow-x-hidden relative">
      <Header toggleSidebar={toggleSidebar} />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <Outlet />
    </div>
  );
}
