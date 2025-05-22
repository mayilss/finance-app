import TotalResults from "@features/transactions/components/TotalResults";
import TransactionForm from "@features/transactions/components/TransactionForm";
import TransactionsTable from "@features/transactions/components/TransactionsTable";

export default function TransactionsPage() {
  return (
    <div className="px-3 md:px-8 py-16 bg-bg min-h-screen">
      <h1 className="text-3xl font-bold text-text-primary">Transactions</h1>
      <TransactionForm />
      <TransactionsTable />
      <TotalResults />
    </div>
  );
}
