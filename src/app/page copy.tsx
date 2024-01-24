import {
  CalendarDaysIcon,
  BuildingLibraryIcon,
  FingerPrintIcon,
  MagnifyingGlassIcon,
  MapIcon,
} from "@heroicons/react/24/outline";
import KeywordSearch from "./compornents/KeywordSearch";
import GenreSearch from "./compornents/GenreSearch";
import AreaSearch from "./compornents/AreaSearch";
import NewEventInfo2 from "./compornents/NewEventInfo2";

const features = [
  {
    name: "エリア検索",
    description: <AreaSearch />,
    icon: MapIcon,
  },
  {
    name: "ジャンル検索",
    description: <GenreSearch />,
    icon: BuildingLibraryIcon,
  },
  {
    name: "キーワード検索",
    description: <KeywordSearch />,
    icon: MagnifyingGlassIcon,
  },
  {
    name: "新規登録グループ情報",
    description: <NewEventInfo2 />,
    icon: CalendarDaysIcon,
  },
];

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            さあ、新しい自分と仲間を見つけよう
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            （仮）あなたがやりたいこと、興味あることに挑戦しましょう。 <br />
            （仮）プロジェクトZは、年齢や職業、地域を超えた仲間づくりを応援します。
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-full sm:mt-4 lg:mt-16 lg:max-w-full">
          <dl className="grid max-w-full grid-cols-1 gap-x-8 gap-y-10 lg:max-w-full lg:grid-cols-3 lg:gap-y-16">
            {features.slice(0, 3).map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
            <div className="lg:col-span-3">
            {features.slice(3).map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon
                      className="h-6 w-6 text-white"
                      aria-hidden="true"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
