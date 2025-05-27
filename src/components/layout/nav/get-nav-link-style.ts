import clsx from "clsx";
import type { NavLinkRenderProps } from "react-router-dom";

const baseClasses =
  "block text-text-primary dark:text-text-primary-dark px-4 py-2 border-[1px] hover:border-border-dark dark:hover:border-border dark:hover:bg-navlink-hover rounded-lg";

const getNavLinkStyle = ({ isActive }: NavLinkRenderProps): string => {
  return clsx(
    baseClasses,
    isActive
      ? "dark:bg-navlink-active border-border-dark"
      : "border-transparent",
  );
};

export default getNavLinkStyle;
