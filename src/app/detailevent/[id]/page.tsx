import { notFound } from "next/navigation";
import { supabase } from "@/utils/supabase/supabaseClient";

export default async function Event({
  params: { id },
}: {
  params: { id: number };
}) {
  const { data: event } = await supabase
    .from("EVENT_MAIN")
    .select("*")
    .match({ id })
    .single();

  if (!event) {
    notFound();
  }
   // タイムスタンプをDateオブジェクトに変換
  const createdAtDate = new Date(event.created_at);
    // YYYY/MM/DD形式の日付文字列を作成
    const formattedDate = `${createdAtDate.getFullYear()}/${
      createdAtDate.getMonth() + 1
    }/${createdAtDate.getDate()}`;

  return (
    <div>
    <h3 className="text-base font-semibold leading-7 text-gray-900 text-center mt-8">
    {event.event_name}
    </h3>
    <div className="flex justify-center gap-16 mt-10">
    <div>
      <img src = {event.image_url}  width={500} height={500}></img>
    </div>
    <div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              ジャンル
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {event.event_genre}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              開催日
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {event.event_date}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              開催場所
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {event.event_place}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              開催住所
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
            {event.event_prefecture}{event.event_address}
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">
              主催者
            </dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {event.event_host}
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">ホームページURL</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              {event.homepage_url}
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
