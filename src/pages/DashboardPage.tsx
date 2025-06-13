import NetBalanceAreaChart from "@features/dashboard/components/charts/NetBalanceAreaChart";
import { useTotalBalance } from "@features/transactions/useTotalBalance";
import { formatCurrency } from "@lib/format";

export default function DashboardPage() {
  const totalBalance = useTotalBalance();

  return (
    <div>
      <h2
        className="text-2xl font-bold text-text-primary dark:text-text-primary-dark"
        data-cy="net-balance"
      >
        Net Balance: {formatCurrency(totalBalance)}
      </h2>
      <NetBalanceAreaChart />
    </div>
  );
}
