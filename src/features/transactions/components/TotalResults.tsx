import { useAppSelector } from "@app/hooks";
import { selectTotalExpence, selectTotalIncome } from "../selectors";
import { formatCurrency } from "@lib/format";

export default function TotalResults() {
  const totalIncome = useAppSelector(selectTotalIncome);
  const totalExpense = useAppSelector(selectTotalExpence);
  const totalBalance = totalIncome - totalExpense;
  return (
    <p className="display flex flex-col mt-8 text-lg font-semibold">
      <span className="text-success">
        Total Income: {formatCurrency(totalIncome)}
      </span>
      <span className="text-error">
        Total Expence: {formatCurrency(totalExpense)}
      </span>
      <span className={totalBalance < 0 ? "text-error" : "text-success"}>
        Total Balance: {formatCurrency(totalBalance)}
      </span>
    </p>
  );
}
