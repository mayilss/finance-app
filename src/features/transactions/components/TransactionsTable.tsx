import { useAppDispatch, useAppSelector } from "@app/hooks";
import { TRANSACTION_TYPES } from "@app/types/transaction";
import Table from "@components/ui/Table";
import { capitalizeFirstLetterLocale, formatCurrency } from "@lib/format";
import React from "react";
import { selectTransactions } from "../selectors";
import { removeTransaction } from "../slice";
import Button from "@components/ui/Button";

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
      className="mt-8 overflow-x-auto"
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
              transaction.date,
              <span
                key={transaction.id}
                className={
                  transaction.type === TRANSACTION_TYPES[0]
                    ? "text-success"
                    : "text-error"
                }
              >
                {capitalizeFirstLetterLocale(transaction.type)}
              </span>,
              <Button
                variant="error"
                key={transaction.id}
                onClick={() => {
                  onDelete(transaction.id);
                }}
                aria-label={`Delete transaction ${transaction.label}`}
              >
                Delete
              </Button>,
            ]}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
