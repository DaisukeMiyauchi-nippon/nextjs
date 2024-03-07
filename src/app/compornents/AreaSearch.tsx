"use client"
import Link from "next/link";
import React, { useState } from "react";

type practiceText = {
  linkctl: string;
}
const areas = {
  北海道: [
    { label: "北海道", value: "hokkaido" },
  ],
  東北: [
    { label: "青森", value: "aomori" },
    { label: "岩手", value: "iwate" },
    { label: "秋田", value: "akita" },
    { label: "宮城", value: "miyagi" },
    { label: "山形", value: "yamagata" },
    { label: "福島", value: "fukushima" },

  ],
  関東: [
    { label: "東京", value: "tokyo" },
    { label: "神奈川", value: "kanagawa" },
    { label: "千葉", value: "chiba" },
    { label: "埼玉", value: "saitama" },
    { label: "茨城", value: "ibaraki" },
    { label: "栃木", value: "tochigi" },
    { label: "群馬", value: "gunma" },
  ],
  "北陸\n甲信越": [
    { label: "山梨", value: "yamanashi" },
    { label: "長野", value: "nagano" },
    { label: "新潟", value: "niigata" },
    { label: "富山", value: "toyama" },
    { label: "石川", value: "ishikawa" },
    { label: "福井", value: "fukui" },
  ],
  "東海": [
    { label: "愛知", value: "aichi" },
    { label: "静岡", value: "shizuoka" },
    { label: "岐阜", value: "gifu" },
    { label: "三重", value: "mie" },
  ],
  "関西": [
    { label: "大阪", value: "osaka" },
    { label: "兵庫", value: "hyogo" },
    { label: "京都", value: "kyoto" },
    { label: "滋賀", value: "shiga" },
    { label: "奈良", value: "nara" },
    { label: "和歌山", value: "wakayama" },
  ],
  "中国": [
    { label: "岡山", value: "okayama" },
    { label: "広島", value: "hiroshima" },
    { label: "鳥取", value: "tottori" },
    { label: "島根", value: "shimane" },
    { label: "山口", value: "yamaguchi" },
  ],
  "四国": [
    { label: "愛媛", value: "ehime" },
    { label: "香川", value: "kagawa" },
    { label: "高知", value: "kochi" },
    { label: "徳島", value: "tokushima" },
  ],
  "九州\n沖縄": [
    { label: "福岡", value: "fukuoka" },
    { label: "佐賀", value: "saga" },
    { label: "長崎", value: "nagasaki" },
    { label: "熊本", value: "kumamoto" },
    { label: "大分", value: "oita" },
    { label: "宮崎", value: "miyazaki" },
    { label: "鹿児島", value: "kagoshima" },
    { label: "沖縄", value: "okinawa" },

  ],
};

const AreaSearch = (props:practiceText) => {
  const [activeArea, setActiveArea] = useState<keyof typeof areas | null>(null);

  const handleAreaHover = (area: keyof typeof areas) => {
    setActiveArea(area);
  };

  const handleAreaLeave = () => {
    setActiveArea(null);
  };

  const linkDestination = (value: string) => {
    if (props.linkctl === 'group') {
      return `/groupsearch?category=area&place=${value}`;
    } else if (props.linkctl=== 'event') {
      return `/eventsearch?category=area&place=${value}`;
    }
    return '';
  };

  return (
    <div className="relative">
    <div className="mt-2 flex items-center gap-x-3 grid grid-cols-5">
      {Object.keys(areas).map((areaCategory) => (
        <button
          key={areaCategory}
          onMouseOver={() => handleAreaHover(areaCategory as keyof typeof areas)}
          onMouseOut={handleAreaLeave}
          type="button"
          className="whitespace-pre-wrap w-21 h-12 rounded-md bg-white px-1.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
        >
          {activeArea === areaCategory && (
            <div className="absolute top-12 left-1/2 transform -translate-x-1/2">
              <div className="w-screen max-w-md overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul className="grid grid-cols-4 gap-2">
                  {areas[areaCategory as keyof typeof areas].map(({ label, value }) => (
                    <li key={value}>
                       <Link href={linkDestination(value)}>{label}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
          {areaCategory.toUpperCase()}
        </button>
      ))}
    </div>
  
    <div className="mt-2 flex items-center gap-x-3">
      {/* Additional buttons go here */}
    </div>
  </div>
  );
};

export default AreaSearch;
