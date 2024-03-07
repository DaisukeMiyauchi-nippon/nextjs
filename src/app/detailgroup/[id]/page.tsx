import { notFound } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";
import { genres, cycles } from "@/app/compornents/ResisterList";
import ImageSlider from "@/app/compornents/ImageSlider";


export default async function Group({
  params: { id },
}: {
  params: { id: number };
}) {


  const { data: group } = await supabase
    .from("GROUP_MAIN")
    .select("*")
    .match({ id })
    .single();

  if (!group) {
    notFound();
  }
  // タイムスタンプをDateオブジェクトに変換
  const createdAtDate = new Date(group.created_at);
  // YYYY/MM/DD形式の日付文字列を作成
  const formattedDate = `${createdAtDate.getFullYear()}/${
    createdAtDate.getMonth() + 1
  }/${createdAtDate.getDate()}`;

  // サイクルをラベル変換
  const activeCycleLabel = cycles.find(
    (cycle) => cycle.value === group.active_cycle
  )?.label;

  // ジャンルをラベル変換
  const GenreLabel = genres.find(
    (genre) => genre.value === group.group_genre
  )?.label;
  
  return (
    <div>
      <h3 className="text-base font-semibold leading-7 text-gray-900 text-center mt-8">
        {group.group_name}
      </h3>

      <div className="flex justify-center gap-16 mt-10">
        <div>
        <ImageSlider 
       imageUrl={group.image_url} 
      imageUrlSub1={group.image_url_sub1} 
      imageUrlSub2={group.image_url_sub2} />
        </div>
        <div>
          <div className="mt-6 border-t border-gray-100">
            <dl className="divide-y divide-gray-100">
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  ジャンル
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {GenreLabel}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  活動サイクル
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {activeCycleLabel}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  拠点住所
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {group.group_address_prefecture}
                  {group.group_address_city}
                  {group.group_address_detail}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  管理者名
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {group.group_manager_name}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  連絡先メールアドレス
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {group.email}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  連絡先電話番号
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {group.phone}
                </dd>
              </div>

              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  ホームページURL
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {group.homepage_url}
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  グループ紹介
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 whitespace-pre-wrap">
                 <pre>{group.detail_intro}</pre>
                </dd>
              </div>
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                <dt className="text-sm font-medium leading-6 text-gray-900">
                  登録日
                </dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {formattedDate}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
  }