import React from "react";

interface TableProps extends React.HTMLAttributes<HTMLTableElement> {
  caption: string;
}

export default function Table({ children, caption, ...props }: TableProps) {
  return (
    <div className="container mx-auto" {...props}>
      <table className="w-full bg-bg dark:bg-bg-dark shadow-md rounded-lg overflow-hidden">
        <caption className="sr-only">{caption}</caption>
        {children}
      </table>
    </div>
  );
}

Table.Head = React.memo(TableHead);
Table.Body = TableBody;
Table.Row = React.memo(TableRow);

interface TableHeadProps {
  columns: Array<string>;
}

function TableHead({ columns }: TableHeadProps) {
  return (
    <thead className="bg-gray-400 dark:bg-blue-950">
      <tr>
        {columns.map((column, index) => (
          <th
            scope="col"
            key={index}
            className="text-left p-4 text-text-primary dark:text-text-primary-dark"
          >
            {column}
          </th>
        ))}
      </tr>
    </thead>
  );
}

interface TableBodyProps {
  children: React.ReactNode;
}

function TableBody({ children }: TableBodyProps) {
  return <tbody>{children}</tbody>;
}

interface TableRowProps extends React.HTMLAttributes<HTMLTableRowElement> {
  cells: Array<React.ReactNode | string | number>;
}

function TableRow({ cells, ...props }: TableRowProps) {
  return (
    <tr {...props}>
      {cells.map((cell, index) => (
        <td
          key={index}
          className="text-left p-4 text-text-primary dark:text-text-primary-dark"
        >
          {cell}
        </td>
      ))}
    </tr>
  );
}
