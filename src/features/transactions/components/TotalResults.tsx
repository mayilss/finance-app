import { useAppSelector } from "@app/hooks";
import { selectTotalExpence, selectTotalIncome } from "../selectors";

export default function TotalResults() {
  const totalIncome = useAppSelector(selectTotalIncome);
  const totalExpense = useAppSelector(selectTotalExpence);
  const totalBalance = totalIncome - totalExpense;
  return (
    <p className="display flex flex-col mt-8 text-lg font-bold">
      <span className="text-green-500">Total Income: {totalIncome}</span>
      <span className="text-red-500">Total Expence: {totalExpense}</span>
      <span>Total Balance: {totalBalance}</span>
    </p>
  );
}
