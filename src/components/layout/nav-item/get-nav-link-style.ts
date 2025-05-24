import type { NavLinkRenderProps } from "react-router-dom";

const getNavLinkStyle = ({ isActive }: NavLinkRenderProps): string => {
  if (isActive)
    return "text-text-primary dark:text-text-primary-dark px-4 py-2 border-[1px] border-transparent hover:border-border dark:hover:bg-navlink-hover rounded-lg dark:bg-navlink-active";
  return "text-text-primary dark:text-text-primary-dark px-4 py-2 border-[1px] border-transparent hover:border-border dark:hover:bg-navlink-hover rounded-lg";
};

export default getNavLinkStyle;
