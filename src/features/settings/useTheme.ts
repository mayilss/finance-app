import { useAppSelector } from "@app/hooks";
import { selectTheme } from "./selectors";

export const useTheme = () => useAppSelector(selectTheme);
