import { GetResponse } from "@/generated/protocol/catalog/v1/catalog_pb"
import { ListResponse } from "@/generated/protocol/workload/v1/workload_pb"
import APIClient from "@/lib/api"
import { timestampDate } from "@bufbuild/protobuf/wkt"
import { Fragment } from "react"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const catalog: GetResponse = await new APIClient().Catalog().Get(id)

  let workloads: ListResponse | undefined = undefined;
  const workloadId = catalog.catalog?.workloadId
  if (workloadId) {
    workloads = await new APIClient().Workload().List(workloadId)
  }
  return (
    <div className="w-full mx-auto max-w-8/10">
      <div className="mt-4 lg:mt-8">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl/8 font-semibold text-zinc-950 sm:text-xl/8 dark:text-white">
            {catalog.catalog?.version}  {catalog.catalog?.name}
          </h1>
          <span className="inline-flex items-center gap-x-1.5 rounded-md px-1.5 py-0.5 text-sm/5 font-medium sm:text-xs/5 forced-colors:outline bg-lime-400/20 text-lime-700 group-data-hover:bg-lime-400/30 dark:bg-lime-400/10 dark:text-lime-300 dark:group-data-hover:bg-lime-400/15">
            Successful
          </span>
        </div>
        <div className="isolate mt-2.5 flex flex-wrap justify-between gap-x-6 gap-y-4">
          <div className="flex flex-wrap gap-x-10 gap-y-4 py-1.5">
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <svg
                aria-hidden="true"
                className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5V5h14v-.5A1.5 1.5 0 0 0 13.5 3h-11Z"></path>
                <path
                  clipRule="evenodd"
                  d="M15 7H1v4.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V7ZM3 10.25a.75.75 0 0 1 .75-.75h.5a.75.75 0 0 1 0 1.5h-.5a.75.75 0 0 1-.75-.75Zm3.75-.75a.75.75 0 0 0 0 1.5h2.5a.75.75 0 0 0 0-1.5h-2.5Z"
                  fillRule="evenodd"></path>
              </svg>
              <span className="inline-flex gap-3"> {catalog.catalog?.description} </span>
            </span>
            <span className="flex items-center gap-3 text-base/6 text-zinc-950 sm:text-sm/6 dark:text-white">
              <svg
                aria-hidden="true"
                className="size-4 shrink-0 fill-zinc-400 dark:fill-zinc-500"
                data-slot="icon"
                fill="currentColor"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  clipRule="evenodd"
                  d="M4 1.75a.75.75 0 0 1 1.5 0V3h5V1.75a.75.75 0 0 1 1.5 0V3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2V1.75ZM4.5 6a1 1 0 0 0-1 1v4.5a1 1 0 0 0 1 1h7a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-7Z"
                  fillRule="evenodd"></path>
              </svg>
              <span>created at {timestampDate(catalog.catalog?.createdAt!).toISOString()}</span>
            </span>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-primary">編集</button>
            <button className="btn btn-secondary">削除</button>
          </div>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">
          Catalog
        </h2>
        <hr
          className="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10"
          role="presentation"
        />
        <dl className="grid grid-cols-2 grid-cols-[25%_auto] text-base/6 sm:text-sm/6">
          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            id
          </dt>
          <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
            {catalog.catalog?.id}
          </dd>
          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            priority
          </dt>
          <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
            {catalog.catalog?.priority}
          </dd>
          <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
            created_at / updated_at
          </dt>
          <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
            {timestampDate(catalog.catalog?.createdAt!).toISOString()} / {timestampDate(catalog.catalog?.updatedAt!).toISOString()}
          </dd>
        </dl>
      </div>
      {workloads && (
        <div className="mt-12">
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">Workloads</h2>
          <hr className="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10" role="presentation" />
          {workloads.workloads.map((workload) => {
            return (
              <dl key={workload.workloadId} className="grid grid-cols-2 grid-cols-[25%_auto] text-base/6 sm:text-sm/6">
                <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                  エンドポイント
                </dt>
                <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                  <a href={workload.endpoint} className="hover:underline">{workload.endpoint}</a>
                </dd>
                <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                  エントリーポイント
                </dt>
                <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                  <a href={workload.entrypoint} className="hover:underline">{workload.entrypoint}</a>
                </dd>
                {workload.externalLinks.map((link) => {
                  return (
                    <Fragment key={link.title}>
                      <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        {link.title}
                      </dt>
                      <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                        <a href={link.url} className="hover:underline">{link.url}</a>
                      </dd>
                    </Fragment>
                  )
                })}
              </dl>
            );
          })}
        </div>
      )}
      {workloads && (
        <div className="mt-12">
          <h2 className="text-base/7 font-semibold text-zinc-950 sm:text-sm/6 dark:text-white">Deployments</h2>
          <hr className="mt-4 w-full border-t border-zinc-950/10 dark:border-white/10" role="presentation" />
          {workloads.deployments.map((d) => {
            return (
              <dl key={d.message} className="grid grid-cols-2 grid-cols-[25%_auto] text-base/6 sm:text-sm/6">
                <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                  レプリカ
                </dt>
                <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                  {d.replicaStatus?.available} / {d.replicaStatus?.desired} - {d.replicaStatus?.ready} - {d.replicaStatus?.updated}
                </dd>
                <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                  メッセージ
                </dt>
                <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                  {d.message}
                </dd>
                {d.containers.map((c) => {
                  return (
                    <Fragment key={c.name}>
                      <dt className="col-start-1 border-t border-zinc-950/5 pt-3 text-zinc-500 first:border-none sm:border-t sm:border-zinc-950/5 sm:py-3 dark:border-white/5 dark:text-zinc-400 sm:dark:border-white/5">
                        {c.name}
                      </dt>
                      <dd className="pt-1 pb-3 text-zinc-950 sm:border-t sm:border-zinc-950/5 sm:py-3 sm:nth-2:border-none dark:text-white dark:sm:border-white/5">
                        {c.image}
                      </dd>
                    </Fragment>
                  )
                })}
              </dl>
            );
          })}
        </div>
      )}
    </div>
  )
}
