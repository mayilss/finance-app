import { useAppSelector } from "@app/hooks";
import { selectIsAuthenticated } from "./selectors";

export const useCheckAuth = () => useAppSelector(selectIsAuthenticated);
