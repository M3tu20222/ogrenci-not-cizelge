import React from 'react';

export const Table = ({ children, ...props }: React.TableHTMLAttributes<HTMLTableElement>) => (
  <table {...props}>{children}</table>
);

export const TableHeader = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <thead {...props}>{children}</thead>
);

export const TableBody = ({ children, ...props }: React.HTMLAttributes<HTMLTableSectionElement>) => (
  <tbody {...props}>{children}</tbody>
);

export const TableRow = ({ children, ...props }: React.HTMLAttributes<HTMLTableRowElement>) => (
  <tr {...props}>{children}</tr>
);

export const TableHead = ({ children, ...props }: React.ThHTMLAttributes<HTMLTableHeaderCellElement>) => (
  <th {...props}>{children}</th>
);

export const TableCell = ({ children, ...props }: React.TdHTMLAttributes<HTMLTableDataCellElement>) => (
  <td {...props}>{children}</td>
);