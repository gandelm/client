import Table from '@/components/Table'
import APIClient from '@/lib/api'
import { ListResponse } from '@/generated/protocol/catalog/v1/catalog_pb'
import { timestampDate } from '@bufbuild/protobuf/wkt'
import { Button } from '@/components/ui/button'

export default async function Page() {
  const response: ListResponse = await new APIClient().Catalog().List()
  return (
    <div className="w-full mx-auto max-w-8/10">
      <div className="my-8 flex items-end justify-between">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">カタログ一覧</h2>
        <Button asChild>
          <a href="/catalogs/new">新規作成</a>
        </Button>
      </div>

      <Table columns={['Name', 'SERVER', 'MASTER', 'Created At', 'Updated At', 'Priority', 'Labels']}>
        {response.catalogs.map((catalog) => (
          <tr key={catalog.id} className="has-[[data-row-link][data-focus]]:outline-2 has-[[data-row-link][data-focus]]:-outline-offset-2 has-[[data-row-link][data-focus]]:outline-blue-500 dark:focus-within:bg-white/[2.5%] hover:bg-zinc-950/[2.5%] dark:hover:bg-white/[2.5%]">
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span className="font-bold text-lg">{catalog.version} / {catalog.name}</span><br />
              <span className="italic text-sm">{catalog.description}</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span className="font-bold">rc/v2.1.0</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span className="font-bold">rc/v2.1.0</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span>{timestampDate(catalog.createdAt!).toISOString()}</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span>{timestampDate(catalog.updatedAt!).toISOString()}</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              <span>{catalog.priority}</span>
            </td>
            <td className="relative px-4 first:pl-(--gutter,--spacing(2)) last:pr-(--gutter,--spacing(2)) border-b border-zinc-950/5 dark:border-white/5 py-4 sm:first:pl-1 sm:last:pr-1">
              <a data-row-link="true" aria-label="Order #3000" className="absolute inset-0 focus:outline-hidden" href={`/catalogs/${catalog.id}`}></a>
              {catalog.labels.map((label) => (
                <span key={label}>{label}</span>
              ))}
            </td>
          </tr>
        ))}
      </Table>
    </div>
  )
}
