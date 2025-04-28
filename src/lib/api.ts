import { createConnectTransport } from "@connectrpc/connect-web";
import { createClient } from "@connectrpc/connect";
import { CatalogService, CreateRequest } from "@/generated/protocol/catalog/v1/catalog_pb";
import { WorkloadService } from "@/generated/protocol/workload/v1/workload_pb";
import { LabelService, CreateRequest as LabelCreateRequest } from "@/generated/protocol/label/v1/label_pb";
import { VersionService, CreateRequest as VersionCreateRequest } from "@/generated/protocol/version/v1/version_pb";

export default class APIClient {
  private tp: any

  constructor() {
    this.tp = createConnectTransport({
      baseUrl: "http://localhost:8080",
      useBinaryFormat: true,
    });
  }

  Catalog(): Catalog {
    return new Catalog(this.tp);
  }

  Workload(): Workload {
    return new Workload(this.tp);
  }

  Label(): Label {
    return new Label(this.tp);
  }

  Version(): Version {
    return new Version(this.tp);
  }
}

export class Workload {
  private client

  constructor(tp: any) {
    this.client = createClient(WorkloadService, tp);
  }

  async Get(catalog_id: string, workload_id: string) {
    return this.client.get({ catalogId: catalog_id, workloadId: workload_id });
  }

  async List(catalog_id: string) {
    return this.client.list({ catalogId: catalog_id });
  }
}

export class Catalog {
  private client

  constructor(tp: any) {
    this.client = createClient(CatalogService, tp);
  }

  async Get(id: string) {
    return this.client.get({ catalogId: id });
  }

  async List() {
    return this.client.list({});
  }

  async Create(request: CreateRequest) {
    return this.client.create(request);
  }

  async Delete(id: string) {
    return this.client.delete({ catalogId: id });
  }
}

export class Label {
  private client

  constructor(tp: any) {
    this.client = createClient(LabelService, tp);
  }

  async Get(id: string) {
    return this.client.get({ labelId: id });
  }

  async List() {
    return this.client.list({});
  }

  async Create(request: LabelCreateRequest) {
    return this.client.create(request);
  }

  async Delete(id: string) {
    return this.client.delete({ labelId: id });
  }
}

export class Version {
  private client

  constructor(tp: any) {
    this.client = createClient(VersionService, tp);
  }

  async Get(id: string) {
    return this.client.get({ versionId: id });
  }

  async List() {
    return this.client.list({});
  }

  async Create(request: VersionCreateRequest) {
    return this.client.create(request);
  }

  async Delete(id: string) {
    return this.client.delete({ versionId: id });
  }
}
