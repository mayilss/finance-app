import { useAppSelector } from "@app/hooks";
import type { ThemeState } from "@app/types/settings";
import React from "react";
import { selectTheme } from "../theme/selectors";

export default function ThemeSync() {
  const theme = useAppSelector(selectTheme);

  React.useEffect(() => {
    const mql = window.matchMedia("(prefers-color-scheme: dark)");

    const applyMode = ({ mode }: ThemeState) => {
      const effective =
        mode === "system" ? (mql.matches ? "dark" : "light") : mode;
      document.documentElement.classList.toggle("dark", effective === "dark");
    };

    applyMode(theme);

    if (theme.mode === "system") {
      const handler = () => applyMode({ mode: "system" });
      mql.addEventListener("change", handler);
      return () => mql.removeEventListener("change", handler);
    }
  }, [theme]);
  return null;
}
