import { useAriaLive } from "@app/hooks";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import {
  TRANSACTION_TYPES,
  type TransactionFormValues,
} from "@features/transactions/types";
import { capitalizeFirstLetterLocale } from "@lib/format";
import { useForm } from "react-hook-form";
import { useAddTransaction } from "../useAddTransaction";

export default function TransactionForm() {
  const addTransaction = useAddTransaction();
  const { announce, LiveRegion } = useAriaLive();

  const form = useForm<TransactionFormValues>({
    defaultValues: {
      label: "",
      amount: "",
      type: "income",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: TransactionFormValues) => {
    addTransaction(data);
    announce(
      `Transaction added: ${data.type} of ${data.amount} for ${data.label}`,
    );
    form.reset();
  };

  return (
    <form
      className="mt-8 space-y-4 max-w-lg mx-auto"
      onSubmit={form.handleSubmit(onSubmit)}
    >
      <LiveRegion />
      <div className="flex flex-col space-y-4">
        <Select
          control={form.control}
          name="type"
          label="Transaction Type"
          options={TRANSACTION_TYPES.map((type) => ({
            label: capitalizeFirstLetterLocale(type),
            value: type,
          }))}
          data-cy="transaction-type"
        />
        <Input
          control={form.control}
          name="label"
          label="Label"
          data-cy="transaction-label"
        />
        <Input
          control={form.control}
          name="amount"
          label="Amount"
          type="number"
          data-cy="transaction-amount"
        />
        <Button aria-label="Add transaction" data-cy="add-transaction">
          Add
        </Button>
      </div>
    </form>
  );
}
