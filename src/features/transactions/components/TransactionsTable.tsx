import { useAppDispatch, useAppSelector } from "@app/hooks";
import Table from "@components/ui/Table";
import React from "react";
import { selectTransactions } from "../selectors";
import { removeTransaction } from "../slice";
import TransactionRow from "./TransactionRow";

export default function TransactionsTable() {
  const columns = React.useMemo(
    () => ["Label", "Amount", "Date", "Transaction Type", "Actions"],
    [],
  );
  const transactions = useAppSelector(selectTransactions);

  const dispatch = useAppDispatch();

  const onDelete = React.useCallback((id: string) => {
    dispatch(removeTransaction(id));
  }, []);

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
