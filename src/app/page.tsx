import { CalendarDaysIcon, BuildingLibraryIcon, FingerPrintIcon, MagnifyingGlassIcon ,MapIcon } from '@heroicons/react/24/outline'
import KeywordResearch from './compornents/KeywordResearch'
import GenreResearch from './compornents/GenreResearch'
import AreaResearch from './compornents/AreaResearch'
import NewEventInfo from './compornents/NewEventInfo'

const features = [
  {
    name: 'エリア検索',
    description:<AreaResearch />,
    icon: MapIcon,
  },
  {
    name: 'ジャンル検索',
    description: <GenreResearch />,
    icon: BuildingLibraryIcon,
  },
  {
    name: 'キーワード検索',
    description:<KeywordResearch />,
    icon: MagnifyingGlassIcon,
  },
  {
    name: '新規登録イベント情報',
    description: <NewEventInfo />,
    icon: CalendarDaysIcon,
  },  

]

export default function Example() {
  return (
    <div className="bg-white py-24 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            さぁ、新しい自分と仲間を見つけよう
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            （仮）あなたがやりたいこと、興味あることに挑戦しましょう。 <br /> 
            （仮）プロジェクトZは、年齢や職業、地域を超えた仲間づくりを応援します。
          </p>
        </div>
        <div className="mx-auto mt-4 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}