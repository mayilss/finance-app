import NAV_LIST from "../nav-list";
import NavItem from "../nav-item/NavItem";
import SidebarButton from "../sidebar/SidebarButton";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="w-full mx-auto px-4 py-2 bg-bg dark:bg-bg-dark flex items-center justify-between fixed border-b-border-dark dark:border-b-border border-b-[1px] z-10">
      <div>
        <h1 className="text-3xl font-bold text-primary dark:text-primary-dark">
          uFinance
        </h1>
      </div>
      <nav role="navigation" className="hidden md:block">
        <ul className="flex space-x-4">
          {NAV_LIST.map((item) => (
            <NavItem key={item.to} to={item.to} label={item.label} />
          ))}
        </ul>
      </nav>
      <div className="md:hidden">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
