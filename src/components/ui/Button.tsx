import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "error";
}

export default function Button({ variant = "primary", ...props }: ButtonProps) {
  return (
    <button
      className={`${variant == "error" ? "bg-error hover:bg-error-hover dark:hover:bg-error-dark" : "bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover-dark"} self-center px-4 py-2 text-text-primary-dark rounded-lg transition-colors duration-200 cursor-pointer`}
      {...props}
    />
  );
}
