export const THEME_MODES = ["light", "dark", "system"] as const;
export type Theme = (typeof THEME_MODES)[number];

export type ThemeState = {
  mode: Theme;
};
