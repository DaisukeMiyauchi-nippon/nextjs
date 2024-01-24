import { notFound } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";

export default async function Group({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data: group } = await supabase
    .from("GROUP_MAIN")
    .select(
      "group_name, group_genre, group_host_name, detail_intro, HOST_MAIN(address,host_email,host_tel)"
    )
    .match({ id })
    .single();

  if (!group) {
    notFound();
  }

  return (
    <div>
    <h3 className="text-base font-semibold leading-7 text-gray-900 text-center mt-8">
    {group.group_name}
    </h3>
    <div className="flex justify-center gap-16 mt-10">
    <div>
      <img src = "https://www.koeitecmo.co.jp/images/top/index01.jpg"    width={500}
      height={500}></img>
    </div>
    <div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              ジャンル
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {group.group_genre}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              拠点住所
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {group.HOST_MAIN.address}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              管理者名
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {group.group_host_name}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              連絡先メールアドレス
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {group.HOST_MAIN.host_email}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              連絡先電話番号
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {group.HOST_MAIN.tel}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">URL</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              $120,000
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              グループ紹介
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {group.detail_intro}
            </dd>
          </div>
        </dl>
      </div>
    </div>
    </div>
    </div>
  );
}
