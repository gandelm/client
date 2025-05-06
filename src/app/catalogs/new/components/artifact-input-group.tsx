"use client";

import Label from "@/components/form/label";
import { Input } from "@/components/ui/input";
import { ListResponse } from "@/generated/protocol/artifact/v1/artifact_pb";
import APIClient from "@/lib/api";
import { Fragment, useEffect, useState } from "react";

// NOTE: Input は、対象のリポジトリからブランチ名を選択式にしたい
export default function ArtifactInputGroup() {
  const [artifacts, setArtifacts] = useState<ListResponse["artifacts"]>([]);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchArtifacts = async () => {
      const response = await new APIClient().Artifact().List();
      setArtifacts(response.artifacts);
      if (response.artifacts.length > 0) {
        setSelected(response.artifacts[0].id);
      }
    };
    fetchArtifacts();
  }, []);

  if (artifacts.length === 0 || selected === undefined) {
    return <div className="w-full">Loading...</div>
  }

  return (
    <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
      {artifacts.map((artifact, index) => (
        <Fragment key={artifact.id}>
          <Label title={artifact.title} desc={artifact.description} />
          <Input type="hidden" name={`artifacts[${index}].id`} value={artifact.id} className="input w-full" />
          <Input type="text" name={`artifacts[${index}].value`} placeholder="main" className="input w-full" />
        </Fragment>
      ))}
    </section>
  )
}

