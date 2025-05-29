import { useAppSelector } from "@app/hooks";
import Spinner from "@components/ui/Spinner";
import { selectNetBalanceChartData } from "@features/transactions/selectors";
import React, { Suspense } from "react";

const AreaChart = React.lazy(() => import("@components/ui/AreaChart"));

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
      <Suspense fallback={<Spinner data-cy="loading-chart" />}>
        <AreaChart data={data} />
      </Suspense>
    </div>
  );
}
