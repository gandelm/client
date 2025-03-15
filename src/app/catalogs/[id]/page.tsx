import Table from "@/components/Table"
import { GetResponse } from "@/generated/protocol/catalog/v1/catalog_pb"
import { ListResponse } from "@/generated/protocol/workload/v1/workload_pb"
import APIClient from "@/lib/api"
import { timestampDate } from "@bufbuild/protobuf/wkt"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const catalog: GetResponse = await new APIClient().Catalog().Get(id)
  const workloads: ListResponse = await new APIClient().Workload().List(catalog.catalog?.workloadId!)
  return (
    <div>
      <h1 className="text-5xl font-extrabold mb-4">🏗️ Catalog</h1>
      <Table columns={['Key', 'Value']}>
        <tr>
          <td> id </td>
          <td> {catalog.catalog?.id} </td>
        </tr>
        <tr>
          <td> version </td>
          <td> {catalog.catalog?.version} </td>
        </tr>
        <tr>
          <td> name </td>
          <td> {catalog.catalog?.name} </td>
        </tr>
        <tr>
          <td> description </td>
          <td> {catalog.catalog?.description} </td>
        </tr>
        <tr>
          <td> priority </td>
          <td> {catalog.catalog?.priority} </td>
        </tr>
        <tr>
          <td> created_at </td>
          <td>
            <span>{timestampDate(catalog.catalog?.createdAt!).toISOString()}</span>
          </td>
        </tr>
        <tr>
          <td> updated_at </td>
          <td>
            <span>{timestampDate(catalog.catalog?.updatedAt!).toISOString()}</span>
          </td>
        </tr>
      </Table >
      <h1 className="mt-5 text-5xl font-extrabold mb-4">🏗️ Workloads</h1>
      {workloads.workloads.map((workload) => {
        return (
          <Table columns={['Key', 'Value']}>
            <tr>
              <td> エンドポイント </td>
              <td> {workload.endpoint} </td>
            </tr>
            <tr>
              <td> エントリーポイント </td>
              <td> {workload.entrypoint} </td>
            </tr>
            {workload.externalLinks.map((link) => {
              return (
                <tr>
                  <td> {link.title} </td>
                  <td> {link.url} </td>
                </tr>
              )
            })}
          </Table >
        );
      })}
    </div>
  )
}
