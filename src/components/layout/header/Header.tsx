import Logo from "@components/ui/Logo";
import Nav from "../nav/Nav";
import SidebarButton from "../sidebar/SidebarButton";
import UserInfoDropdown from "../user-info/UserInfoDropdown";

interface HeaderProps {
  toggleSidebar: () => void;
}

export default function Header({ toggleSidebar }: HeaderProps) {
  return (
    <header className="w-full mx-auto px-4 py-2 bg-bg dark:bg-bg-dark flex items-center justify-between fixed border-b-border-dark dark:border-b-border border-b-[1px] z-10 h-16">
      <div className="flex-1/3 items-center justify-start">
        <Logo />
      </div>
      <div className="hidden md:flex flex-1/3 justify-center items-center">
        <Nav place="header" />
      </div>
      <div className="hidden md:flex flex-1/3 justify-end items-center">
        <UserInfoDropdown />
      </div>
      <div className="md:hidden">
        <SidebarButton toggleSidebar={toggleSidebar} />
      </div>
    </header>
  );
}
