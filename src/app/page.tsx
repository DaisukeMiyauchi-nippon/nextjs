import GenreSearch from "./compornents/GenreSearch";
import AreaSearch from "./compornents/AreaSearch";
import NewGroupInfo from "./compornents/NewGroupInfo";
import KeywordSearch from "./compornents/KeywordSearch";
import DateSearch from "./compornents/DateSearch";
import NewEventInfo from "./compornents/NewEventInfo";

type text ={
  key:string;
}
export default function Main() {
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-2xl lg:text-center">
        <p className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          さあ、新しい自分と仲間を見つけよう
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          （仮）あなたがやりたいこと、興味あることに挑戦しましょう。 <br />
          （仮）プロジェクトZは、年齢や職業、地域を超えた仲間づくりを応援します。
        </p>
      </div>
      <div className="flex justify-center gap-2 m-12">
        <div className="container w-full p-10 md:w-1/2 flex-col">
          <div className="text-center font-bold">グループを検索する</div>
          <div className="text-left">地域から検索する</div>
          <div className="text-center">
            <AreaSearch linkctl="group" />
          </div>
          <div className="text-left">ジャンルから検索する</div>
          <div className="text-center">
            <GenreSearch linkctl="group" />
          </div>
          <div className="text-left">キーワードから検索する</div>
          <div className="text-center">
            <KeywordSearch />
          </div>
        </div>

        <div className="container w-full p-10 md:w-1/2 flex-col">
          <div className="text-center font-bold">イベントを検索する</div>
          <div className="text-left">地域から検索する</div>
          <div className="text-center">
            <AreaSearch linkctl="event" />
          </div>
          <div className="text-left">ジャンルから検索する</div>
          <div className="text-center">
            <GenreSearch linkctl="event" />
          </div>
          <div className="text-left">キーワードから検索する</div>
          <div className="text-center">
            <KeywordSearch />
          </div>
          <div className="text-left">日付から検索する</div>
          <div className="text-left">
            <DateSearch />
          </div>
        </div>
      </div>
      <div className="container w-full p-10 flex-col gap-2 m-12">
        <div className="text-left font-bold">新規グループ情報</div>
          <NewGroupInfo />
      </div>
      <div className="container w-full p-10 flex-col gap-2 m-12">
        <div className="text-left font-bold">新規イベント情報</div>
          <NewEventInfo />
      </div>
    </div>
  );
}
