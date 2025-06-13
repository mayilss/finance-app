import Spinner from "@components/ui/Spinner";
import { useNetBalanceChartData } from "@features/transactions/useNetBalanceChartData";
import React, { Suspense } from "react";

const AreaChart = React.lazy(() => import("@components/ui/AreaChart"));

export default function NetBalanceAreaChart() {
  const data = useNetBalanceChartData();

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
