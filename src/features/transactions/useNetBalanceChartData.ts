import { useAppSelector } from "@app/hooks";
import { selectNetBalanceChartData } from "./selectors";

export const useNetBalanceChartData = () =>
  useAppSelector(selectNetBalanceChartData);
