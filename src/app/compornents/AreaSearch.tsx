"use client"
import Link from "next/link";
import React, { useState } from "react";

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
    { label: "東京", value: "music" },
    { label: "神奈川", value: "language" },
    { label: "千葉", value: "books" },
    { label: "埼玉", value: "shodo" },
    { label: "茨城", value: "culture" },
    { label: "栃木", value: "business" },
    { label: "群馬", value: "othereducation" },
  ],
  "北陸・甲信越": [
    { label: "山梨", value: "music" },
    { label: "長野", value: "language" },
    { label: "新潟", value: "books" },
    { label: "富山", value: "shodo" },
    { label: "石川", value: "culture" },
    { label: "福井", value: "business" },
  ],
  "東海": [
    { label: "愛知", value: "music" },
    { label: "静岡", value: "language" },
    { label: "岐阜", value: "books" },
    { label: "三重", value: "shodo" },
  ],
  "関西": [
    { label: "大阪", value: "music" },
    { label: "兵庫", value: "language" },
    { label: "京都", value: "books" },
    { label: "滋賀", value: "shodo" },
    { label: "奈良", value: "culture" },
    { label: "和歌山", value: "business" },
  ],
  "中国": [
    { label: "岡山", value: "music" },
    { label: "広島", value: "language" },
    { label: "鳥取", value: "books" },
    { label: "島根", value: "shodo" },
    { label: "山口", value: "culture" },
  ],
  "四国": [
    { label: "愛媛", value: "music" },
    { label: "香川", value: "language" },
    { label: "高知", value: "books" },
    { label: "徳島", value: "shodo" },
  ],
  "九州・沖縄": [
    { label: "福岡", value: "music" },
    { label: "佐賀", value: "language" },
    { label: "長崎", value: "books" },
    { label: "熊本", value: "shodo" },
    { label: "大分", value: "culture" },
    { label: "宮崎", value: "business" },
    { label: "鹿児島", value: "othereducation" },
    { label: "沖縄", value: "othereducation" },

  ],
};

const AreaSearch = () => {
  const [activeArea, setActiveArea] = useState<keyof typeof areas | null>(null);

  const handleAreaHover = (area: keyof typeof areas) => {
    setActiveArea(area);
  };

  const handleAreaLeave = () => {
    setActiveArea(null);
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
          className="w-22 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
        >
          {activeArea === areaCategory && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul className="grid grid-cols-4 gap-2">
                  {areas[areaCategory as keyof typeof areas].map(({ label, value }) => (
                    <li key={value}>
                      <Link href={`/search?area=${value}`}>{label}</Link>
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
