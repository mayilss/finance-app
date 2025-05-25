interface SidebarButtonProps {
  toggleSidebar: () => void;
}

export default function SidebarButton({ toggleSidebar }: SidebarButtonProps) {
  return (
    <button
      className="text-primary hover:text-primary-hover focus:outline-none"
      onClick={toggleSidebar}
      aria-label="Toggle sidebar"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M4 6h16M4 12h16m-7 6h7"
        />
      </svg>
    </button>
  );
}
