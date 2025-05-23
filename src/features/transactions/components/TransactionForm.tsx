import { useAppDispatch } from "@app/hooks";
import { TRANSACTION_TYPES, type Transaction } from "@app/types/transaction";
import Input from "@components/ui/Input";
import { useForm } from "react-hook-form";
import { addTransaction } from "../slice";
import Select from "@components/ui/Select";

type FormValues = Omit<Transaction, "amount"> & {
  amount: string;
};

export default function TransactionForm() {
  const dispatch = useAppDispatch();

  const form = useForm<FormValues>({
    defaultValues: {
      label: "",
      amount: "",
      type: "Income",
    },
    mode: "onBlur",
  });

  const onSubmit = (data: FormValues) => {
    data.id = crypto.randomUUID();
    data.date = new Date().toISOString();
    const payload: Transaction = {
      ...data,
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
            label: type,
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
        <button
          data-cy="add-transaction"
          className="self-center border-2 border-primary px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover transition-colors duration-200 cursor-pointer"
        >
          Add
        </button>
      </div>
    </form>
  );
}
