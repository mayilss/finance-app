import clsx from "clsx";
import NavItem from "./NavItem";
import React from "react";

const NAV_LIST = [
  { to: "/", label: "Dashboard" },
  { to: "/transactions", label: "Transactions" },
  { to: "/debts", label: "Debts" },
  { to: "/settings", label: "Settings" },
] as const;

interface NavProps {
  place: "sidebar" | "header";
}

export default function Nav({ place }: NavProps) {
  const classes = React.useMemo(
    () =>
      clsx("flex", place === "sidebar" ? "flex-col space-y-2" : "space-x-4"),
    [place],
  );

  return (
    <nav role="navigation">
      <ul className={classes}>
        {NAV_LIST.map((item) => (
          <NavItem key={item.to} to={item.to} label={item.label} />
        ))}
      </ul>
    </nav>
  );
}
