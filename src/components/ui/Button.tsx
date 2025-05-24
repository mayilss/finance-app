import React from "react";

export default function Button(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>,
) {
  return (
    <button
      className="self-center border-2 border-primary px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
      {...props}
    />
  );
}
