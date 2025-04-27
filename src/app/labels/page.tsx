import Table from '@/components/Table'
import APIClient from '@/lib/api'
import { ListResponse } from '@/generated/protocol/label/v1/label_pb'
import { Button } from '@/components/ui/button'

export default async function Page() {
  const response: ListResponse = await new APIClient().Label().List()
  return (
    <div className="w-full mx-auto max-w-8/10">
      <div className="mt-8 flex items-end justify-between">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">ラベル一覧</h2>
        <Button asChild>
          <a href="/labels/new">新規作成</a>
        </Button>
      </div>

      <Table columns={['id', 'title', 'description']}>
        {response.labels.map((label) => (
          <tr key={label.id} className="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/labels/${label.id}`}></a>
              <span className="font-bold">{label.id}</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/labels/${label.id}`}></a>
              <div className={`badge badge-${label.color}`}>
                {label.title}
              </div>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/labels/${label.id}`}></a>
              <span className="font-bold">{label.description}</span>
            </td>
          </tr>
        ))}
      </Table>
    </div>
  )
}
