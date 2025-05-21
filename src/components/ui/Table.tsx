export default function Table({
  children,
  ...props
}: React.HTMLAttributes<HTMLTableElement>) {
  return (
    <div className="container mx-auto" {...props}>
      <table className="w-full bg-white shadow-md rounded-lg overflow-hidden">
        <caption className="sr-only">List of all previous transactions</caption>
        {children}
      </table>
    </div>
  );
}

Table.Head = TableHead;
Table.Body = TableBody;
Table.Row = TableRow;

interface ITableHeadProps {
  columns: Array<string>;
}

function TableHead({ columns }: ITableHeadProps) {
  return (
    <thead className="bg-gray-200">
      <tr>
        {columns.map((column, index) => (
          <th
            scope="col"
            key={index}
            className="text-left p-4 text-text-primary"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface ITableBodyProps {
  children: React.ReactNode;
}

function TableBody({ children }: ITableBodyProps) {
  return <tbody>{children}</tbody>;
}

interface ITableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  cells: Array<React.ReactNode | string | number>;
}

function TableRow({ cells, ...props }: ITableRowProps) {
  return (
    <tr {...props}>
      {cells.map((cell, index) => (
        <td key={index} className="text-left p-4 text-text-primary">
          {cell}
        </td>
      ))}
    </tr>
  );
}
