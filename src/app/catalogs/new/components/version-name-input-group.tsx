"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ListResponse } from "@/generated/protocol/version/v1/version_pb";
import { useEffect, useState } from "react";
import APIClient from "@/lib/api";
import { Skeleton } from "@/components/ui/skeleton";

export default function VersionNameInputGroup() {
  const [versions, setVersions] = useState<ListResponse["versions"]>([]);
  const [selected, setSelected] = useState<string | undefined>(undefined);

  useEffect(() => {
    const fetchVersions = async () => {
      const response = await new APIClient().Version().List();
      setVersions(response.versions);
      if (response.versions.length > 0) {
        // データ取得後に初期値を設定
        setSelected(response.versions[0].id);
      }
    };
    fetchVersions();
  }, []);

  if (versions.length === 0 || selected === undefined) {
    return <Skeleton className="w-full" />

  }

  return (
    <Select name="version" value={selected} onValueChange={setSelected}>
      <SelectTrigger className="w-full">
        <SelectValue placeholder="バージョンを選択" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>バージョン</SelectLabel>
          {versions.map((version) => (
            <SelectItem key={version.id} value={version.id}>
              {version.id}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
