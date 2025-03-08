import Table from '@/components/Table'
import DetailButton from '@/components/DetailButton'
import APIClient from '@/lib/api'
import { ListResponse } from '@/generated/catalog/v1/catalog_pb'

export default async function Page() {
  const response: ListResponse = await new APIClient().Catalog().List()
  return (
    <div className="overflow-x">
      <Table columns={['Name', 'SERVER', 'MASTER', 'Owner', '']}>
        {response.catalogs.map((catalog) => (
          <tr key={catalog.id}>
            <td>
              <span className="font-bold text-lg">{catalog.version} / {catalog.name}</span><br />
              <span className="italic text-sm">{catalog.description}</span>
            </td>
            <td>
              <span className="font-bold">rc/v2.1.0</span>
            </td>
            <td>
              <span className="font-bold">rc/v2.1.0</span>
            </td>
            <td>
              <span>atsuya.siphon@example.com</span>
            </td>
            <td>
              <DetailButton href={`/catalogs/${catalog.id}`} />
            </td>
          </tr>
        ))}
      </Table>
    </div>
  )
}
