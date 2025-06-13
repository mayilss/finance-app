import { useAppSelector } from "@app/hooks";
import { selectTotalBalance } from "./selectors";

export const useTotalBalance = () => useAppSelector(selectTotalBalance);
