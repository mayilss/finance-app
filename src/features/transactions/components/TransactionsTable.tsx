import { useAppDispatch, useAppSelector } from "@app/hooks";
import Table from "@components/ui/Table";
import { formatCurrency, formatDate } from "@lib/format";
import { removeTransaction } from "../slice";
import React from "react";
import { selectTransactions } from "../selectors";

export default function TransactionsTable() {
  const transactions = useAppSelector(selectTransactions);
  const columns = React.useMemo(() => ["Label", "Amount", "Date", ""], []);

  const dispatch = useAppDispatch();

  const onDelete = (id: string) => {
    dispatch(removeTransaction(id));
  };

  return (
    <Table className="mt-8">
      <Table.Head columns={columns} />
      <Table.Body>
        {transactions.map((transaction) => (
          <Table.Row
            key={transaction.id}
            cells={[
              transaction.label,
              formatCurrency(transaction.amount),
              formatDate(transaction.date),
              <button
                key={transaction.id}
                onClick={() => {
                  onDelete(transaction.id);
                }}
                className="border-2 border-red-500 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200 cursor-pointer"
              >
                Delete
              </button>,
            ]}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
