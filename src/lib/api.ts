import { createConnectTransport } from "@connectrpc/connect-web";
import { createClient } from "@connectrpc/connect";
import { CatalogService, CreateRequest } from "@/generated/catalog/v1/catalog_pb";

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
