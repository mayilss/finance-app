import { useAppSelector } from "@app/hooks";
import AreaChart from "@components/ui/AreaChart";
import { selectNetBalanceChartData } from "@features/transactions/selectors";

export default function NetBalanceArea() {
  const data = useAppSelector(selectNetBalanceChartData);

  if (!data.length)
    return (
      <p
        data-cy="chart"
        className="text-text-primary dark:text-text-primary-dark text-center"
      >
        No transaction added yet.
      </p>
    );
  return (
    <div data-cy="chart">
      <AreaChart data={data} />
    </div>
  );
}
