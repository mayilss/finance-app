import React from "react";

interface DropdownContextValue {
  isOpen: boolean;
  toggle: () => void;
}

const DropdownContext = React.createContext<DropdownContextValue | null>(null);

export function useDropdownContext() {
  const context = React.useContext(DropdownContext);
  if (!context) {
    throw new Error(
      "useDropdownContext must be used within a DropdownProvider",
    );
  }
  return context;
}

export default function DropdownContextProvider({
  children,
  dropdownRef,
}: {
  children: React.ReactNode;
  dropdownRef: React.RefObject<HTMLDivElement | null>;
}) {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = React.useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  return (
    <DropdownContext.Provider value={{ isOpen, toggle }}>
      {children}
    </DropdownContext.Provider>
  );
}
