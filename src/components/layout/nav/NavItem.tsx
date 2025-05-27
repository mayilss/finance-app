import React from "react";
import { NavLink } from "react-router-dom";
import getNavLinkStyle from "./get-nav-link-style";

interface NavItemProps {
  to: string;
  label: string;
}

function NavItem({ to, label }: NavItemProps) {
  const handleMouseEnter = React.useCallback(() => {
    if (to === "/") {
      import("@pages/DashboardPage");
    }
  }, [to]);
  return (
    <li>
      <NavLink
        to={to}
        className={getNavLinkStyle}
        aria-label={`Link to ${label}`}
        onMouseEnter={handleMouseEnter}
      >
        {label}
      </NavLink>
    </li>
  );
}

export default React.memo(NavItem);
