import { NavLink } from "react-router-dom";
import getNavLinkStyle from "../get-nav-link-style";
import SidebarButton from "./SidebarButton";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-xs bg-header text-white p-4 z-10 ${isOpen ? "translate-x-full" : ""} duration-300 ease-in-out rounded-l-lg border-l-2 border-primary`}
    >
      <div className="text-right">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
      <nav role="navigation">
        <ul className="flex flex-col space-y-4">
          <li>
            <NavLink to="/" className={getNavLinkStyle}>
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/transactions" className={getNavLinkStyle}>
              Transactions
            </NavLink>
          </li>
          <li>
            <NavLink to="/debts" className={getNavLinkStyle}>
              Debts
            </NavLink>
          </li>
          <li>
            <NavLink to="/settings" className={getNavLinkStyle}>
              Settings
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
