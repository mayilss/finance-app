import { useAppDispatch, useAppSelector } from "@app/hooks";
import type { Transaction } from "@app/types/transaction";
import Input from "@components/ui/Input";
import {
  addTransaction,
  removeTransaction,
} from "@features/transactions/slice";
// import resolver from "@lib/resolver";
import { useForm } from "react-hook-form";

export default function TransactionsPage() {
  const transactions = useAppSelector((state) => state.transaction);
  const dispatch = useAppDispatch();
  const form = useForm<Transaction>({
    defaultValues: {
      label: "",
      amount: 0,
    },
    mode: "onBlur",
  });

  const onDelete = (id: string) => {
    dispatch(removeTransaction(id));
  };

  const onSubmit = (data: Transaction) => {
    data.id = crypto.randomUUID();
    data.date = new Date().toISOString();
    data.amount = Number(data.amount);
    dispatch(addTransaction(data));
    form.reset();
  };

  return (
    <div className="px-8 py-16 bg-bg h-screen">
      <h1 className="text-3xl font-bold text-text-primary">Transactions</h1>
      <form className="mt-8 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
        <div className="flex space-x-4 ">
          <Input control={form.control} name="label" label="Label" />
          <Input
            control={form.control}
            name="amount"
            label="Amount"
            type="number"
          />
        </div>
        <button className="border-2 border-primary px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer">
          Submit
        </button>
      </form>
      <div className="container mx-auto mt-8">
        <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-200">
            <tr>
              <th className="text-left p-4 text-text-primary">Label</th>
              <th className="text-left p-4 text-text-primary">Amount</th>
              <th className="text-left p-4 text-text-primary">Date</th>
              <th className="text-left p-4 text-text-primary"></th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="text-left p-4 text-text-primary">
                  {transaction.label}
                </td>
                <td className="text-left p-4 text-text-primary">
                  ${transaction.amount.toFixed(2)}
                </td>
                <td className="text-left p-4 text-text-primary">
                  {transaction.date.split("T")[0]}
                </td>
                <td className="text-left p-4 text-text-primary">
                  <button
                    onClick={() => {
                      onDelete(transaction.id);
                    }}
                    className="border-2 border-red-500 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 cursor-pointer"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
