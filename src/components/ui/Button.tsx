import clsx from "clsx";
import React from "react";

const baseClasses =
  "self-center px-4 py-2 text-text-primary-dark rounded-lg transition-colors duration-200 cursor-pointer";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "error";
}

function Button({ variant = "primary", className, ...props }: ButtonProps) {
  const classes = React.useMemo(
    () =>
      clsx(
        baseClasses,
        variant === "error"
          ? "bg-error hover:bg-error-hover dark:hover:bg-error-dark"
          : "bg-primary hover:bg-primary-hover dark:hover:bg-primary-hover-dark",
        className,
      ),
    [variant, className],
  );

  return <button className={classes} {...props} />;
}

export default React.memo(Button);
