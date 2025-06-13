import Table from "@components/ui/Table";
import React from "react";
import { useRemoveTransaction } from "../useRemoveTransaction";
import { useTransactions } from "../useTransactions";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable() {
  const columns = React.useMemo(
    () => ["Label", "Amount", "Date", "Transaction Type", "Actions"],
    [],
  );

  const transactions = useTransactions();
  const onDelete = useRemoveTransaction();

  return (
    <Table
      className="mt-8 overflow-x-auto"
      caption="List of all previous transactions"
    >
      <Table.Head columns={columns} />
      <Table.Body>
        {transactions.map((transaction) => (
          <TransactionRow
            key={transaction.id}
            id={transaction.id}
            label={transaction.label}
            amount={transaction.amount}
            date={transaction.date}
            type={transaction.type}
            onDelete={onDelete}
          />
        ))}
      </Table.Body>
    </Table>
  );
}
