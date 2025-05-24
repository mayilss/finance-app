import NAV_LIST from "../nav-list";
import NavItem from "../nav-item/NavItem";
import SidebarButton from "./SidebarButton";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={`fixed right-0 top-0 h-screen w-xs bg-header dark:bg-header-dark text-white p-4 z-10 ${isOpen ? "" : "translate-x-full"} duration-300 ease-in-out rounded-l-lg border-l-2 border-primary`}
    >
      <div className="text-right">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
      <nav role="navigation">
        <ul className="flex flex-col space-y-4">
          {NAV_LIST.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </ul>
      </nav>
    </div>
  );
}
