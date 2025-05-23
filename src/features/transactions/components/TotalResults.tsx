import { useAppSelector } from "@app/hooks";
import { formatCurrency } from "@lib/format";
import {
  selectTotalBalance,
  selectTotalExpense,
  selectTotalIncome,
} from "../selectors";

export default function TotalResults() {
  const totalIncome = useAppSelector(selectTotalIncome);
  const totalExpense = useAppSelector(selectTotalExpense);
  const totalBalance = useAppSelector(selectTotalBalance);
  return (
    <p className="display flex flex-col mt-8 text-lg font-semibold">
      <span className="text-success">
        Total Income: {formatCurrency(totalIncome)}
      </span>
      <span className="text-error">
        Total Expense: {formatCurrency(totalExpense)}
      </span>
      <span className={totalBalance < 0 ? "text-error" : "text-success"}>
        Net Balance: {formatCurrency(totalBalance)}
      </span>
    </p>
  );
}
