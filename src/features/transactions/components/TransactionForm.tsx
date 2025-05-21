import { useAppDispatch } from "@app/hooks";
import type { Transaction } from "@app/types/transaction";
import Input from "@components/ui/Input";
import { useForm } from "react-hook-form";
import { addTransaction } from "../slice";

export default function TransactionForm() {
  const dispatch = useAppDispatch();

  const form = useForm<Transaction>({
    defaultValues: {
      label: "",
      amount: 0,
    },
    mode: "onBlur",
  });

  const onSubmit = (data: Transaction) => {
    data.id = crypto.randomUUID();
    data.date = new Date().toISOString();
    data.amount = Number(data.amount);
    dispatch(addTransaction(data));
    form.reset();
  };

  return (
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
        Add
      </button>
    </form>
  );
}
