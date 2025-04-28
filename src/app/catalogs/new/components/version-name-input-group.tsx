import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ListResponse } from "@/generated/protocol/version/v1/version_pb";
import APIClient from "@/lib/api";

export default async function VersionNameInputGroup() {
  const response: ListResponse = await new APIClient().Version().List()
  var selected: string = ""
  for (const version of response.versions) {
    selected = version.id
    break
  }
  return (
    <Select name="version" value={selected}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="バージョンを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>バージョン</SelectLabel>
          {response.versions.map((version) => (
            <SelectItem key={version.id} value={version.id}>
              {version.id}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}

