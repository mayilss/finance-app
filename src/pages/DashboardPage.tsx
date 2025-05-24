import { useAppSelector } from "@app/hooks";
import { selectTotalBalance } from "@features/transactions/selectors";
import { formatCurrency } from "@lib/format";
import React, { Suspense } from "react";

const NetBalanceAreaChart = React.lazy(
  () => import("@features/dashboard/components/charts/NetBalanceAreaChart"),
);

export default function DashboardPage() {
  const totalBalance = useAppSelector(selectTotalBalance);
  return (
    <div>
      <h2
        className="text-2xl font-bold text-text-primary dark:text-text-primary-dark"
        data-cy="net-balance"
      >
        Net Balance: {formatCurrency(totalBalance)}
      </h2>
      <Suspense fallback={<div>Loading chart...</div>}>
        <NetBalanceAreaChart />
      </Suspense>
    </div>
  );
}
