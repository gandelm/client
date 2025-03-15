import { createConnectTransport } from "@connectrpc/connect-web";
import { createClient } from "@connectrpc/connect";
import { CatalogService, CreateRequest } from "@/generated/protocol/catalog/v1/catalog_pb";
import { WorkloadService } from "@/generated/protocol/workload/v1/workload_pb";

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
