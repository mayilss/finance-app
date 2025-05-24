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
      <div className="px-3 md:px-8 py-16 bg-bg dark:bg-bg-dark min-h-screen">
        <Outlet />
      </div>
    </div>
  );
}
