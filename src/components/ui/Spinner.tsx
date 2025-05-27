import clsx from "clsx";
import React from "react";

const baseClasses =
  "animate-spin stroke-text-primary dark:stroke-text-primary-dark mx-auto my-4";

interface SpinnerProps {
  size?: number;
  className?: string;
}

export default function Spinner({ size = 48, className = "" }: SpinnerProps) {
  const strokeWidth = 4;
  const half = size / 2;
  const radius = half - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const classes = React.useMemo(
    () => clsx(baseClasses, className),
    [className],
  );

  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={classes}
      role="status"
      aria-label="Loading"
    >
      <circle
        cx={half}
        cy={half}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeOpacity="0.25"
      />
      <circle
        cx={half}
        cy={half}
        r={radius}
        fill="none"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.75}
        strokeLinecap="round"
      />
    </svg>
  );
}
