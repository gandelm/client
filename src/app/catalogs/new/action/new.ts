'use server'

import { redirect } from "next/navigation"
import { CreateRequest, } from "@/generated/protocol/catalog/v1/catalog_pb"
import APIClient from "@/lib/api"
import { parseFormData } from 'parse-nested-form-data'

export async function createCatalog(formData: FormData) {
  var parsedData = parseFormData(formData)
  console.log(parsedData)
  const request = parsedData as CreateRequest
  await new APIClient().Catalog().Create(request)
  redirect("/catalogs")
}
