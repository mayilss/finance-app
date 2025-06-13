import { useAppDispatch } from "@app/hooks";
import type { Theme } from "./types";
import { setTheme } from "./slice";

export const useSetTheme = () => {
  const dispatch = useAppDispatch();

  return (mode: Theme) => {
    dispatch(setTheme(mode));
  };
};
