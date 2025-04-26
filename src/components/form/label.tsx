interface TableProps {
  title: string;
  desc: string;
}

export default function Label({ title, desc }: TableProps) {
  return (
    <div className="space-y-1">
      <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">{title}</h2>
      <p data-slot="text" className="text-base/6 text-zinc-500 sm:text-sm/6 dark:text-zinc-400">{desc}</p>
    </div>
  );
}
