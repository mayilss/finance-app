import { useAppSelector } from "@app/hooks";
import { selectTotalBalance } from "@features/transactions/selectors";
import { formatCurrency } from "@lib/format";
import React, { Suspense } from "react";

const NetBalanceArea = React.lazy(
  () => import("@components/charts/NetBalanceArea"),
);

export default function DashboardPage() {
  const totalBalance = useAppSelector(selectTotalBalance);
  return (
    <div className="px-8 py-16 bg-bg h-screen">
      <h2 className="text-2xl font-bold">
        Net Balance: {formatCurrency(totalBalance)}
      </h2>
      <Suspense fallback={<div>Loading chart...</div>}>
        <NetBalanceArea />
      </Suspense>
    </div>
  );
}
