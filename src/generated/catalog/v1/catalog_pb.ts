// @generated by protoc-gen-es v2.2.3 with parameter "target=ts,json_types=true,import_extension=ts"
// @generated from file catalog/v1/catalog.proto (package gandelm.catalog.v1, syntax proto3)
/* eslint-disable */

import type { GenEnum, GenFile, GenMessage, GenService } from "@bufbuild/protobuf/codegenv1";
import { enumDesc, fileDesc, messageDesc, serviceDesc } from "@bufbuild/protobuf/codegenv1";
import type { Timestamp, TimestampJson } from "@bufbuild/protobuf/wkt";
import { file_google_protobuf_timestamp } from "@bufbuild/protobuf/wkt";
import type { Message } from "@bufbuild/protobuf";

/**
 * Describes the file catalog/v1/catalog.proto.
 */
export const file_catalog_v1_catalog: GenFile = /*@__PURE__*/
  fileDesc("ChhjYXRhbG9nL3YxL2NhdGFsb2cucHJvdG8SEmdhbmRlbG0uY2F0YWxvZy52MSINCgtMaXN0UmVxdWVzdCI9CgxMaXN0UmVzcG9uc2USLQoIY2F0YWxvZ3MYASADKAsyGy5nYW5kZWxtLmNhdGFsb2cudjEuQ2F0YWxvZyIgCgpHZXRSZXF1ZXN0EhIKCmNhdGFsb2dfaWQYASABKAkiOwoLR2V0UmVzcG9uc2USLAoHY2F0YWxvZxgBIAEoCzIbLmdhbmRlbG0uY2F0YWxvZy52MS5DYXRhbG9nIoYBCg1DcmVhdGVSZXF1ZXN0Eg8KB3ZlcnNpb24YASABKAkSDAoEbmFtZRgCIAEoCRITCgtkZXNjcmlwdGlvbhgDIAEoCRIQCghwcmlvcml0eRgEIAEoDRIvCglhcnRpZmFjdHMYBSADKAsyHC5nYW5kZWxtLmNhdGFsb2cudjEuQXJ0aWZhY3QiPgoOQ3JlYXRlUmVzcG9uc2USLAoHY2F0YWxvZxgBIAEoCzIbLmdhbmRlbG0uY2F0YWxvZy52MS5DYXRhbG9nIj0KDVVwZGF0ZVJlcXVlc3QSLAoHY2F0YWxvZxgBIAEoCzIbLmdhbmRlbG0uY2F0YWxvZy52MS5DYXRhbG9nIj4KDlVwZGF0ZVJlc3BvbnNlEiwKB2NhdGFsb2cYASABKAsyGy5nYW5kZWxtLmNhdGFsb2cudjEuQ2F0YWxvZyIjCg1EZWxldGVSZXF1ZXN0EhIKCmNhdGFsb2dfaWQYASABKAkiEAoORGVsZXRlUmVzcG9uc2UiuwEKB0NhdGFsb2cSCgoCaWQYASABKAkSDAoEbmFtZRgCIAEoCRITCgtkZXNjcmlwdGlvbhgDIAEoCRIPCgd2ZXJzaW9uGAQgASgJEhAKCHByaW9yaXR5GAUgASgNEi4KCmNyZWF0ZWRfYXQYBiABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wEi4KCnVwZGF0ZWRfYXQYByABKAsyGi5nb29nbGUucHJvdG9idWYuVGltZXN0YW1wIlUKCEFydGlmYWN0EgwKBG5hbWUYASABKAkSLgoEdHlwZRgCIAEoDjIgLmdhbmRlbG0uY2F0YWxvZy52MS5BcnRpZmFjdFR5cGUSCwoDdGFnGAMgASgJKmkKDEFydGlmYWN0VHlwZRIdChlBUlRJRkFDVF9UWVBFX1VOU1BFQ0lGSUVEEAASIQodQVJUSUZBQ1RfVFlQRV9DT05UQUlORVJfSU1BR0UQARIXChNBUlRJRkFDVF9UWVBFX0FTU0VUEAIylgMKDkNhdGFsb2dTZXJ2aWNlEkkKBExpc3QSHy5nYW5kZWxtLmNhdGFsb2cudjEuTGlzdFJlcXVlc3QaIC5nYW5kZWxtLmNhdGFsb2cudjEuTGlzdFJlc3BvbnNlEkYKA0dldBIeLmdhbmRlbG0uY2F0YWxvZy52MS5HZXRSZXF1ZXN0Gh8uZ2FuZGVsbS5jYXRhbG9nLnYxLkdldFJlc3BvbnNlEk8KBkNyZWF0ZRIhLmdhbmRlbG0uY2F0YWxvZy52MS5DcmVhdGVSZXF1ZXN0GiIuZ2FuZGVsbS5jYXRhbG9nLnYxLkNyZWF0ZVJlc3BvbnNlEk8KBlVwZGF0ZRIhLmdhbmRlbG0uY2F0YWxvZy52MS5VcGRhdGVSZXF1ZXN0GiIuZ2FuZGVsbS5jYXRhbG9nLnYxLlVwZGF0ZVJlc3BvbnNlEk8KBkRlbGV0ZRIhLmdhbmRlbG0uY2F0YWxvZy52MS5EZWxldGVSZXF1ZXN0GiIuZ2FuZGVsbS5jYXRhbG9nLnYxLkRlbGV0ZVJlc3BvbnNlYgZwcm90bzM", [file_google_protobuf_timestamp]);

/**
 * @generated from message gandelm.catalog.v1.ListRequest
 */
export type ListRequest = Message<"gandelm.catalog.v1.ListRequest"> & {
};

/**
 * @generated from message gandelm.catalog.v1.ListRequest
 */
export type ListRequestJson = {
};

/**
 * Describes the message gandelm.catalog.v1.ListRequest.
 * Use `create(ListRequestSchema)` to create a new message.
 */
export const ListRequestSchema: GenMessage<ListRequest, ListRequestJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 0);

/**
 * @generated from message gandelm.catalog.v1.ListResponse
 */
export type ListResponse = Message<"gandelm.catalog.v1.ListResponse"> & {
  /**
   * @generated from field: repeated gandelm.catalog.v1.Catalog catalogs = 1;
   */
  catalogs: Catalog[];
};

/**
 * @generated from message gandelm.catalog.v1.ListResponse
 */
export type ListResponseJson = {
  /**
   * @generated from field: repeated gandelm.catalog.v1.Catalog catalogs = 1;
   */
  catalogs?: CatalogJson[];
};

/**
 * Describes the message gandelm.catalog.v1.ListResponse.
 * Use `create(ListResponseSchema)` to create a new message.
 */
export const ListResponseSchema: GenMessage<ListResponse, ListResponseJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 1);

/**
 * @generated from message gandelm.catalog.v1.GetRequest
 */
export type GetRequest = Message<"gandelm.catalog.v1.GetRequest"> & {
  /**
   * @generated from field: string catalog_id = 1;
   */
  catalogId: string;
};

/**
 * @generated from message gandelm.catalog.v1.GetRequest
 */
export type GetRequestJson = {
  /**
   * @generated from field: string catalog_id = 1;
   */
  catalogId?: string;
};

/**
 * Describes the message gandelm.catalog.v1.GetRequest.
 * Use `create(GetRequestSchema)` to create a new message.
 */
export const GetRequestSchema: GenMessage<GetRequest, GetRequestJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 2);

/**
 * @generated from message gandelm.catalog.v1.GetResponse
 */
export type GetResponse = Message<"gandelm.catalog.v1.GetResponse"> & {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: Catalog;
};

/**
 * @generated from message gandelm.catalog.v1.GetResponse
 */
export type GetResponseJson = {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: CatalogJson;
};

/**
 * Describes the message gandelm.catalog.v1.GetResponse.
 * Use `create(GetResponseSchema)` to create a new message.
 */
export const GetResponseSchema: GenMessage<GetResponse, GetResponseJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 3);

/**
 * @generated from message gandelm.catalog.v1.CreateRequest
 */
export type CreateRequest = Message<"gandelm.catalog.v1.CreateRequest"> & {
  /**
   * @generated from field: string version = 1;
   */
  version: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: uint32 priority = 4;
   */
  priority: number;

  /**
   * @generated from field: repeated gandelm.catalog.v1.Artifact artifacts = 5;
   */
  artifacts: Artifact[];
};

/**
 * @generated from message gandelm.catalog.v1.CreateRequest
 */
export type CreateRequestJson = {
  /**
   * @generated from field: string version = 1;
   */
  version?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string description = 3;
   */
  description?: string;

  /**
   * @generated from field: uint32 priority = 4;
   */
  priority?: number;

  /**
   * @generated from field: repeated gandelm.catalog.v1.Artifact artifacts = 5;
   */
  artifacts?: ArtifactJson[];
};

/**
 * Describes the message gandelm.catalog.v1.CreateRequest.
 * Use `create(CreateRequestSchema)` to create a new message.
 */
export const CreateRequestSchema: GenMessage<CreateRequest, CreateRequestJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 4);

/**
 * @generated from message gandelm.catalog.v1.CreateResponse
 */
export type CreateResponse = Message<"gandelm.catalog.v1.CreateResponse"> & {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: Catalog;
};

/**
 * @generated from message gandelm.catalog.v1.CreateResponse
 */
export type CreateResponseJson = {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: CatalogJson;
};

/**
 * Describes the message gandelm.catalog.v1.CreateResponse.
 * Use `create(CreateResponseSchema)` to create a new message.
 */
export const CreateResponseSchema: GenMessage<CreateResponse, CreateResponseJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 5);

/**
 * @generated from message gandelm.catalog.v1.UpdateRequest
 */
export type UpdateRequest = Message<"gandelm.catalog.v1.UpdateRequest"> & {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: Catalog;
};

/**
 * @generated from message gandelm.catalog.v1.UpdateRequest
 */
export type UpdateRequestJson = {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: CatalogJson;
};

/**
 * Describes the message gandelm.catalog.v1.UpdateRequest.
 * Use `create(UpdateRequestSchema)` to create a new message.
 */
export const UpdateRequestSchema: GenMessage<UpdateRequest, UpdateRequestJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 6);

/**
 * @generated from message gandelm.catalog.v1.UpdateResponse
 */
export type UpdateResponse = Message<"gandelm.catalog.v1.UpdateResponse"> & {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: Catalog;
};

/**
 * @generated from message gandelm.catalog.v1.UpdateResponse
 */
export type UpdateResponseJson = {
  /**
   * @generated from field: gandelm.catalog.v1.Catalog catalog = 1;
   */
  catalog?: CatalogJson;
};

/**
 * Describes the message gandelm.catalog.v1.UpdateResponse.
 * Use `create(UpdateResponseSchema)` to create a new message.
 */
export const UpdateResponseSchema: GenMessage<UpdateResponse, UpdateResponseJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 7);

/**
 * @generated from message gandelm.catalog.v1.DeleteRequest
 */
export type DeleteRequest = Message<"gandelm.catalog.v1.DeleteRequest"> & {
  /**
   * @generated from field: string catalog_id = 1;
   */
  catalogId: string;
};

/**
 * @generated from message gandelm.catalog.v1.DeleteRequest
 */
export type DeleteRequestJson = {
  /**
   * @generated from field: string catalog_id = 1;
   */
  catalogId?: string;
};

/**
 * Describes the message gandelm.catalog.v1.DeleteRequest.
 * Use `create(DeleteRequestSchema)` to create a new message.
 */
export const DeleteRequestSchema: GenMessage<DeleteRequest, DeleteRequestJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 8);

/**
 * @generated from message gandelm.catalog.v1.DeleteResponse
 */
export type DeleteResponse = Message<"gandelm.catalog.v1.DeleteResponse"> & {
};

/**
 * @generated from message gandelm.catalog.v1.DeleteResponse
 */
export type DeleteResponseJson = {
};

/**
 * Describes the message gandelm.catalog.v1.DeleteResponse.
 * Use `create(DeleteResponseSchema)` to create a new message.
 */
export const DeleteResponseSchema: GenMessage<DeleteResponse, DeleteResponseJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 9);

/**
 * @generated from message gandelm.catalog.v1.Catalog
 */
export type Catalog = Message<"gandelm.catalog.v1.Catalog"> & {
  /**
   * @generated from field: string id = 1;
   */
  id: string;

  /**
   * @generated from field: string name = 2;
   */
  name: string;

  /**
   * @generated from field: string description = 3;
   */
  description: string;

  /**
   * @generated from field: string version = 4;
   */
  version: string;

  /**
   * @generated from field: uint32 priority = 5;
   */
  priority: number;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: Timestamp;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: Timestamp;
};

/**
 * @generated from message gandelm.catalog.v1.Catalog
 */
export type CatalogJson = {
  /**
   * @generated from field: string id = 1;
   */
  id?: string;

  /**
   * @generated from field: string name = 2;
   */
  name?: string;

  /**
   * @generated from field: string description = 3;
   */
  description?: string;

  /**
   * @generated from field: string version = 4;
   */
  version?: string;

  /**
   * @generated from field: uint32 priority = 5;
   */
  priority?: number;

  /**
   * @generated from field: google.protobuf.Timestamp created_at = 6;
   */
  createdAt?: TimestampJson;

  /**
   * @generated from field: google.protobuf.Timestamp updated_at = 7;
   */
  updatedAt?: TimestampJson;
};

/**
 * Describes the message gandelm.catalog.v1.Catalog.
 * Use `create(CatalogSchema)` to create a new message.
 */
export const CatalogSchema: GenMessage<Catalog, CatalogJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 10);

/**
 * @generated from message gandelm.catalog.v1.Artifact
 */
export type Artifact = Message<"gandelm.catalog.v1.Artifact"> & {
  /**
   * @generated from field: string name = 1;
   */
  name: string;

  /**
   * @generated from field: gandelm.catalog.v1.ArtifactType type = 2;
   */
  type: ArtifactType;

  /**
   * @generated from field: string tag = 3;
   */
  tag: string;
};

/**
 * @generated from message gandelm.catalog.v1.Artifact
 */
export type ArtifactJson = {
  /**
   * @generated from field: string name = 1;
   */
  name?: string;

  /**
   * @generated from field: gandelm.catalog.v1.ArtifactType type = 2;
   */
  type?: ArtifactTypeJson;

  /**
   * @generated from field: string tag = 3;
   */
  tag?: string;
};

/**
 * Describes the message gandelm.catalog.v1.Artifact.
 * Use `create(ArtifactSchema)` to create a new message.
 */
export const ArtifactSchema: GenMessage<Artifact, ArtifactJson> = /*@__PURE__*/
  messageDesc(file_catalog_v1_catalog, 11);

/**
 * @generated from enum gandelm.catalog.v1.ArtifactType
 */
export enum ArtifactType {
  /**
   * UNKNOWN is the default value and should not be used.
   *
   * @generated from enum value: ARTIFACT_TYPE_UNSPECIFIED = 0;
   */
  UNSPECIFIED = 0,

  /**
   * CONTAINER_IMAGE represents a container image artifact.
   *
   * @generated from enum value: ARTIFACT_TYPE_CONTAINER_IMAGE = 1;
   */
  CONTAINER_IMAGE = 1,

  /**
   * ASSET represents a generic asset artifact.
   *
   * @generated from enum value: ARTIFACT_TYPE_ASSET = 2;
   */
  ASSET = 2,
}

/**
 * @generated from enum gandelm.catalog.v1.ArtifactType
 */
export type ArtifactTypeJson = "ARTIFACT_TYPE_UNSPECIFIED" | "ARTIFACT_TYPE_CONTAINER_IMAGE" | "ARTIFACT_TYPE_ASSET";

/**
 * Describes the enum gandelm.catalog.v1.ArtifactType.
 */
export const ArtifactTypeSchema: GenEnum<ArtifactType, ArtifactTypeJson> = /*@__PURE__*/
  enumDesc(file_catalog_v1_catalog, 0);

/**
 * @generated from service gandelm.catalog.v1.CatalogService
 */
export const CatalogService: GenService<{
  /**
   * @generated from rpc gandelm.catalog.v1.CatalogService.List
   */
  list: {
    methodKind: "unary";
    input: typeof ListRequestSchema;
    output: typeof ListResponseSchema;
  },
  /**
   * @generated from rpc gandelm.catalog.v1.CatalogService.Get
   */
  get: {
    methodKind: "unary";
    input: typeof GetRequestSchema;
    output: typeof GetResponseSchema;
  },
  /**
   * @generated from rpc gandelm.catalog.v1.CatalogService.Create
   */
  create: {
    methodKind: "unary";
    input: typeof CreateRequestSchema;
    output: typeof CreateResponseSchema;
  },
  /**
   * @generated from rpc gandelm.catalog.v1.CatalogService.Update
   */
  update: {
    methodKind: "unary";
    input: typeof UpdateRequestSchema;
    output: typeof UpdateResponseSchema;
  },
  /**
   * @generated from rpc gandelm.catalog.v1.CatalogService.Delete
   */
  delete: {
    methodKind: "unary";
    input: typeof DeleteRequestSchema;
    output: typeof DeleteResponseSchema;
  },
}> = /*@__PURE__*/
  serviceDesc(file_catalog_v1_catalog, 0);

