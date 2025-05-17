import { NavLink } from "react-router-dom";
import getNavLinkStyle from "./get-nav-link-style";

export default function Header() {
  return (
    <header className="container mx-auto px-4 py-2 bg-header flex items-center justify-between">
      <div>
        <h1 className="text-3xl font-bold text-white">uFinance</h1>
      </div>
      <nav role="navigation">
        <ul className="flex space-x-4">
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
    </header>
  );
}
