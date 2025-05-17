import type { NavLinkRenderProps } from "react-router-dom";

const getNavLinkStyle = ({ isActive }: NavLinkRenderProps): string => {
  if (isActive)
    return "text-amber-50 px-4 py-2 hover:bg-navlink-hover rounded-lg bg-navlink-active";
  return "text-amber-50 px-4 py-2 hover:bg-navlink-hover rounded-lg";
};

export default getNavLinkStyle;
