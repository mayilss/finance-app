import Button from "@components/ui/Button";
import Table from "@components/ui/Table";
import { capitalizeFirstLetterLocale, formatCurrency } from "@lib/format";
import React from "react";

interface TransactionRowProps {
  id: string;
  label: string;
  amount: number;
  date: string;
  type: "income" | "expense";
  onDelete: (id: string) => void;
}

function TransactionRow({
  id,
  label,
  amount,
  date,
  type,
  onDelete,
}: TransactionRowProps) {
  return (
    <Table.Row
      data-cy={`transaction-row-${label}`}
      key={id}
      cells={[
        label,
        formatCurrency(amount),
        date,
        <span
          key={`${id}-type`}
          className={type === "income" ? "text-success" : "text-error"}
        >
          {capitalizeFirstLetterLocale(type)}
        </span>,
        <Button
          variant="error"
          key={`${id}-delete`}
          onClick={() => {
            onDelete(id);
          }}
          aria-label={`Delete transaction ${label}`}
        >
          Delete
        </Button>,
      ]}
    />
  );
}

export default React.memo(TransactionRow);
