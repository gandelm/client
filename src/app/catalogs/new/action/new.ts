'use server'

import { create } from "@bufbuild/protobuf"
import { redirect } from "next/navigation"
import { CreateRequestSchema } from "@/generated/protocol/catalog/v1/catalog_pb"
import APIClient from "@/lib/api"

export async function createCatalog(formData: FormData) {
  console.log(formData)
  const request = create(CreateRequestSchema)
  request.version = formData.get("version") as string
  request.name = formData.get("name") as string
  request.description = formData.get("description") as string
  request.priority = parseInt(formData.get("priority") as string)
  request.labels = formData.getAll("labels") as string[]
  await new APIClient().Catalog().Create(request)
  redirect("/catalogs")
}
