import { useAppDispatch } from "@app/hooks";
import {
  TRANSACTION_TYPES,
  type Transaction,
  type TransactionFormValues,
} from "@app/types/transaction";
import Button from "@components/ui/Button";
import Input from "@components/ui/Input";
import Select from "@components/ui/Select";
import { useForm } from "react-hook-form";
import { addTransaction } from "../slice";
import { capitalizeFirstLetterLocale } from "@lib/format";

export default function TransactionForm() {
  const dispatch = useAppDispatch();

  const form = useForm<TransactionFormValues>({
    defaultValues: {
      label: "",
      amount: "",
      type: "income",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: TransactionFormValues) => {
    const payload: Transaction = {
      ...data,
      id: crypto.randomUUID(),
      date: new Date().toISOString(),
      amount: Number(data.amount),
    };
    dispatch(addTransaction(payload));
    form.reset();
  };

  return (
    <form
      className="mt-8 space-y-4 max-w-lg mx-auto"
      onSubmit={form.handleSubmit(onSubmit)}
    >
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
        <Button data-cy="add-transaction">Add</Button>
      </div>
    </form>
  );
}
