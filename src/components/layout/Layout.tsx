import { NavLink, Outlet } from "react-router-dom";
import getNavLinkStyle from "./get-nav-link-style";

export default function Layout() {
  return (
    <>
      <header className="container mx-auto px-4 py-2 bg-header flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">uFinance</h1>
        </div>
        <nav className="flex space-x-4">
          <NavLink to="/" className={getNavLinkStyle}>
            Dashboard
          </NavLink>
          <NavLink to="/transactions" className={getNavLinkStyle}>
            Transactions
          </NavLink>
          <NavLink to="/debts" className={getNavLinkStyle}>
            Debts
          </NavLink>
          <NavLink to="/settings" className={getNavLinkStyle}>
            Settings
          </NavLink>
        </nav>
      </header>
      <Outlet />
    </>
  );
}
