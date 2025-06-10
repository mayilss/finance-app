import clsx from "clsx";
import React from "react";
import DropdownContextProvider, { useDropdownContext } from "./dropdownContext";

interface DropdownProps {
  children: React.ReactNode;
  className?: string;
}

export default function Dropdown({ children, className }: DropdownProps) {
  const classes = clsx("relative", className);

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  return (
    <DropdownContextProvider dropdownRef={dropdownRef}>
      <div ref={dropdownRef} className={classes}>
        {children}
      </div>
    </DropdownContextProvider>
  );
}

Dropdown.Trigger = DropdownTrigger;
Dropdown.Menu = DropdownMenu;
Dropdown.MenuItem = DropdownMenuItem;

interface DropdownTriggerProps {
  children: React.ReactNode;
  className?: string;
}

function DropdownTrigger({ children, className }: DropdownTriggerProps) {
  const { toggle } = useDropdownContext();
  const classes = clsx(
    "flex items-center justify-center cursor-pointer",
    className,
  );

  return (
    <div className={classes} onClick={toggle}>
      {children}
    </div>
  );
}

interface DropdownMenuProps {
  children: React.ReactNode;
}

function DropdownMenu({ children }: DropdownMenuProps) {
  const { isOpen } = useDropdownContext();

  if (!isOpen) return null;
  return (
    <div className="absolute w-full bg-bg dark:bg-bg-dark border border-border-dark dark:border-border rounded-lg shadow-lg p-4 top-[calc(100%+20px)] right-0">
      <ul className="flex flex-col w-full items-end space-y-2 text-text-primary dark:text-text-primary-dark">
        {children}
      </ul>
    </div>
  );
}

function DropdownMenuItem({ children }: { children: React.ReactNode }) {
  return (
    <li className="px-4 py-2 rounded-lg flex justify-end dark:hover:bg-border-dark hover:bg-border border-b border-border-dark dark:border-border w-full cursor-pointer">
      {children}
    </li>
  );
}
