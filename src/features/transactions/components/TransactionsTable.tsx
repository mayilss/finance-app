import { useAppDispatch, useAppSelector } from "@app/hooks";
import Table from "@components/ui/Table";
import { formatCurrency, formatDate } from "@lib/format";
import { removeTransaction } from "../slice";
import React from "react";
import { selectTransactions } from "../selectors";
import { TRANSACTION_TYPES } from "@app/types/transaction";

export default function TransactionsTable() {
  const transactions = useAppSelector(selectTransactions);
  const columns = React.useMemo(
    () => ["Label", "Amount", "Date", "Transaction Type", "Actions"],
    [],
  );

  const dispatch = useAppDispatch();

  const onDelete = (id: string) => {
    dispatch(removeTransaction(id));
  };

  return (
    <Table
      className="mt-8 overflow-scroll"
      caption="List of all previous transactions"
    >
      <Table.Head columns={columns} />
      <Table.Body>
        {transactions.map((transaction) => (
          <Table.Row
            data-cy="transaction-row"
            key={transaction.id}
            cells={[
              transaction.label,
              formatCurrency(transaction.amount),
              formatDate(transaction.date),
              <span
                key={transaction.id}
                className={
                  transaction.type === TRANSACTION_TYPES[0]
                    ? "text-success"
                    : "text-error"
                }
              >
                {transaction.type}
              </span>,
              <button
                key={transaction.id}
                onClick={() => {
                  onDelete(transaction.id);
                }}
                className="border-2 border-error px-4 py-2 bg-error text-white rounded-lg hover:bg-red-600 transition-colors duration-200 cursor-pointer"
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
