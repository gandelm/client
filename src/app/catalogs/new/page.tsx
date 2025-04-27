import { createCatalog } from "@/app/catalogs/new/action/new";
import { ListResponse } from "@/generated/protocol/label/v1/label_pb";
import APIClient from "@/lib/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import Label from "@/components/form/label";
import VersionNameInputGroup from "./components/version-name-input-group";

export default async function Page() {
  const labels: ListResponse = await new APIClient().Label().List()
  return (
    <div className="w-full mx-auto max-w-8/10">
      <div className="my-8 flex items-end justify-between">
        <h2 className="scroll-m-20 text-xl font-semibold tracking-tight">カタログ新規作成</h2>
      </div>

      <form className="form" action={createCatalog}>
        <hr role="presentation" className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"></hr>
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <Label title="バージョン" desc="カタログのベースとなるバージョンを入力してください" />
          <VersionNameInputGroup />
          <Label title="カタログ名" desc="バージョン毎にユニークな名前を入力してください" />
          <Input type="text" name="name" placeholder="test" className="input w-full" />
          <Label title="説明文" desc="カタログの説明文を入力してください" />
          <Input type="text" name="description" placeholder="test env" className="input w-full" />
        </section>

        <hr role="presentation" className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"></hr>
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <Label title="ラベル" desc="環境に付与するラベルを複数選択できます" />
          <div>
            {labels.labels.map((label) => (
              <div key={label.id} className="flex space-x-2 mb-4">
                <Checkbox id={label.id} />
                <div className="grid gap-1.5 leading-none">
                  <Badge variant="default">{label.title}</Badge>
                  <p className="text-sm text-muted-foreground">{label.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <hr role="presentation" className="my-10 mt-6 w-full border-t border-zinc-950/10 dark:border-white/10"></hr>
        <section className="grid gap-x-8 gap-y-6 sm:grid-cols-2">
          <Label title="表示優先度" desc="カタログ一覧における表示優先度を入力してください" />
          <Input type="number" placeholder="0" defaultValue="0" name="priority" />
        </section>

        <hr className="my-10 w-full border-t border-zinc-950/5 dark:border-white/5"></hr>
        <div className="flex justify-end gap-4">
          <Button variant="secondary" asChild>
            <a href="/catalogs">キャンセル</a>
          </Button>
          <Button variant="default">作成</Button>
        </div>
      </form>
    </div>
  )
}
