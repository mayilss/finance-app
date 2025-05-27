import clsx from "clsx";
import Nav from "../nav/Nav";
import SidebarButton from "./SidebarButton";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const baseClasses =
  "fixed right-0 top-0 h-screen w-xs bg-bg dark:bg-bg-dark text-white p-4 z-10 duration-300 ease-in-out rounded-l-lg border-l-2 border-primary";

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const classes = React.useMemo(
    () => clsx(baseClasses, isOpen ? "" : "translate-x-full"),
    [isOpen],
  );
  return (
    <aside className={classes}>
      <div className="text-right">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
      <Nav place="sidebar" />
    </aside>
  );
}
