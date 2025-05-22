import { NavLink } from "react-router-dom";
import getNavLinkStyle from "./get-nav-link-style";

interface NavItemProps {
  to: string;
  label: string;
}

export default function NavItem({ to, label }: NavItemProps) {
  return (
    <li>
      <NavLink to={to} className={getNavLinkStyle}>
        {label}
      </NavLink>
    </li>
  );
}
