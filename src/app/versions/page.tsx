import { ListResponse, Version } from "@/generated/protocol/version/v1/version_pb"
import { columns } from "./columns"
import { DataTable } from "./data-table"
import APIClient from "@/lib/api"

async function getData(): Promise<Version[]> {
  const response: ListResponse = await new APIClient().Version().List()
  return response.versions
}

export default async function DemoPage() {
  const data = await getData()

  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={data} />
    </div>
  )
}
