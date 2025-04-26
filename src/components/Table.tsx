import { ReactNode } from "react";

interface TableProps {
  columns: string[];
  children: ReactNode;
}

export default function Table({ columns, children }: TableProps) {
  return (
    <div className="flow-root">
      <div className="">
        <div className="inline-block min-w-full align-middle sm:px-(--gutter)">
          <table className="min-w-full text-left text-sm/6 text-zinc-950 dark:text-white">
            <thead className="text-zinc-500 dark:text-zinc-400">
              <tr>
                {columns.map((col, index) => (
                  <th key={index} className="border-b border-b-zinc-950/10 px-4 py-2 font-medium first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) dark:border-b-white/10 sm:first:pl-1 sm:last:pr-1">{col}</th>
                ))}

              </tr>
            </thead>
            <tbody>
              {children}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
