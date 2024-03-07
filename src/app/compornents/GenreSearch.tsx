"use client";
import Link from "next/link";
import React, { useState } from "react";

type practiceText = {
  linkctl: string;
}

const genres = {
  アウトドア: [
    { label: "ハイキング・登山", value: "mountain" },
    { label: "キャンプ", value: "camp" },
    { label: "バーベーキュー", value: "bbq" },
    { label: "その他アウトドア", value: "otheroutdoor" },
  ],
  スポーツ: [
    { label: "野球", value: "baseball" },
    { label: "サッカー/フットサル", value: "football" },
    { label: "バスケットボール", value: "basketball" },
    { label: "テニス", value: "tennis" },
    { label: "ゴルフ", value: "golf" },
    { label: "武道/格闘技", value: "martialarts" },
    { label: "ヨガ/ストレッチ", value: "yoga" },
    { label: "その他スポーツ", value: "othersports" },
  ],
  教養: [
    { label: "音楽", value: "music" },
    { label: "語学", value: "language" },
    { label: "読書", value: "books" },
    { label: "書道", value: "shodo" },
    { label: "文化/歴史", value: "culture" },
    { label: "ビジネススキル", value: "business" },
    { label: "その他教養", value: "othereducation" },
  ],
  グルメ: [
    { label: "料理", value: "music" },
    { label: "お酒", value: "language" },
    { label: "レストラン", value: "books" },
    { label: "その他教養", value: "othercuisine" },
  ],
  ボランティア: [
    { label: "料理", value: "music" },
    { label: "お酒", value: "language" },
    { label: "レストラン", value: "books" },
    { label: "その他教養", value: "othercuisine" },
  ],
};

const GenreSearch = (props:practiceText) => {
  const [activeGenre, setActiveGenre] = useState<keyof typeof genres | null>(
    null
  );

  const handleGenreHover = (genre: keyof typeof genres) => {
    setActiveGenre(genre);
  };

  const handleGenreLeave = () => {
    setActiveGenre(null);
  };

  const linkDestination = (value: string) => {
    if (props.linkctl === 'group') {
      return `/groupsearch?category=genre&genre=${value}`;
    } else if (props.linkctl=== 'event') {
      return `/eventsearch?category=genre&genre=${value}`;
    }
    return '';
  };


  return (
    <div className="relative">
      <div className="mt-2 flex items-center gap-x-3 grid grid-cols-5">
        {Object.keys(genres).map((genreCategory) => (
          <button
            key={genreCategory}
            onMouseOver={() =>
              handleGenreHover(genreCategory as keyof typeof genres)
            }
            onMouseOut={handleGenreLeave}
            type="button"
            className="whitespace-pre-wrap w-21 h-12 rounded-md bg-white px-1.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 mb-4"
          >
            {activeGenre === genreCategory && (
              <div className="absolute top-12 z-10 left-0 rounded-md bg-white text-sm leading-6 ring-1 ring-inset ring-gray-300">
                <div className="w-screen max-w-md flex-auto overflow-hidden">
                  <ul className="grid grid-cols-2 gap-2">
                  {genres[genreCategory as keyof typeof genres].map(({ label, value }) => (
                    <li key={value}>
                       <Link href={linkDestination(value)}>{label}</Link>
                    </li>
                  ))}
                  </ul>
                </div>
              </div>
            )}
            {genreCategory.toUpperCase()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default GenreSearch;
