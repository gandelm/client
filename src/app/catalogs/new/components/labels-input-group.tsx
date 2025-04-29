import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { ListResponse } from "@/generated/protocol/label/v1/label_pb";
import APIClient from "@/lib/api";

export default async function LabelsInputGroup() {
  const response: ListResponse = await new APIClient().Label().List()
  const labels = response.labels;
  return (
    <div>
      {labels.map((label) => (
        <div key={label.id} className="flex space-x-2 mb-4">
          <Checkbox name="labels" value={label.id} />
          <div className="grid gap-1.5 leading-none">
            <Badge variant="default">{label.title}</Badge>
            <p className="text-sm text-muted-foreground">{label.description}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

