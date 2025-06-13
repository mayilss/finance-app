import { useAppSelector } from "@app/hooks";
import { selectTransactions } from "./selectors";

export const useTransactions = () => useAppSelector(selectTransactions);
