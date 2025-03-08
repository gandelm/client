import Table from "@/components/Table"
import { GetResponse } from "@/generated/catalog/v1/catalog_pb"
import APIClient from "@/lib/api"
import { timestampDate } from "@bufbuild/protobuf/wkt"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const response: GetResponse = await new APIClient().Catalog().Get(id)
  return (
    <Table columns={['Key', 'Value']}>
      <tr>
        <td> id </td>
        <td> {response.catalog?.id} </td>
      </tr>
      <tr>
        <td> version / name </td>
        <td> {response.catalog?.version} / {response.catalog?.name} </td>
      </tr>
      <tr>
        <td> description </td>
        <td> {response.catalog?.description} </td>
      </tr>
      <tr>
        <td> priority </td>
        <td> {response.catalog?.priority} </td>
      </tr>
      <tr>
        <td> created_at </td>
        <td>
          <span>{timestampDate(response.catalog?.createdAt!).toISOString()}</span>
        </td>
      </tr>
      <tr>
        <td> updated_at </td>
        <td>
          <span>{timestampDate(response.catalog?.updatedAt!).toISOString()}</span>
        </td>
      </tr>
    </Table >
  )
}
