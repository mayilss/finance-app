import { useAppSelector } from "@app/hooks";
import { formatCurrency } from "@lib/format";
import { selectTotalExpense, selectTotalIncome } from "../selectors";

export default function TotalResults() {
  const totalIncome = useAppSelector(selectTotalIncome);
  const totalExpense = useAppSelector(selectTotalExpense);
  return (
    <p className="display flex flex-col mt-8 text-lg font-semibold">
      <span className="text-success" data-cy="total-income">
        Total Income: {formatCurrency(totalIncome)}
      </span>
      <span className="text-error" data-cy="total-expense">
        Total Expense: {formatCurrency(totalExpense)}
      </span>
    </p>
  );
}
