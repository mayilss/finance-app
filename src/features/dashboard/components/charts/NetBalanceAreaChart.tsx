import { useAppSelector } from "@app/hooks";
import AreaChart from "@components/ui/AreaChart";
import { selectNetBalanceChartData } from "@features/transactions/selectors";

export default function NetBalanceArea() {
  const data = useAppSelector(selectNetBalanceChartData);

  return <AreaChart data={data} data-testId="chart" />;
}
