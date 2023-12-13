"use client";
import Link from "next/link";
import React, { useState } from "react";

const GenreSearch = () => {
  const [showPopoverOutdoor, setShowPopoverOutdoor] = useState(false);
  const [showPopoverSports, setShowPopoverSports] = useState(false);
  const [showPopoverEducation, setShowPopoverEducation] = useState(false);

  return (
    <div className="relative">
      <div className="mt-2 flex items-center gap-x-3">
        <button
          onMouseOver={() => setShowPopoverOutdoor(true)}
          onMouseOut={() => setShowPopoverOutdoor(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopoverOutdoor && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul className="grid grid-cols-2 gap-2">
                <li><Link href="/search?genre=mountain">
                  ハイキング・登山
                </Link></li>
                <li><Link href="/search?genre=camp">
                  キャンプ
                </Link></li>
                <li><Link href="/search?genre=bbq">
                  バーベーキュー
                </Link></li>
                <li><Link href="/search?genre=otheroutdoor">
                  その他アウトドア
                </Link></li>
                </ul>
              </div>
            </div>
            
          )}
          アウトドア
        </button>

        <button
          onMouseOver={() => setShowPopoverSports(true)}
          onMouseOut={() => setShowPopoverSports(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopoverSports && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <ul className="grid grid-cols-2 gap-2">
                <li><Link href="/search?genre=baseball">
                  野球
                </Link></li>
                <li><Link href="/search?genre=football">
                  サッカー/フットサル
                </Link></li>
                <li><Link href="/search?genre=basketball">
                  バスケットボール
                </Link></li>
                <li><Link href="/search?genre=tenniss">
                  テニス
                </Link></li>
                <li><Link href="/search?genre=golf">
                  ゴルフ
                </Link></li>
                <li><Link href="/search?genre=martialarts">
                武道/格闘技
                </Link></li>
                <li><Link href="/search?genre=martialarts">
                ヨガ/ストレッチ
                </Link></li>
                <li><Link href="/search?genre=othersports">
                その他スポーツ
                </Link></li>
                </ul>
              </div>
            </div>
          )}
          スポーツ
        </button>

        <button
          onMouseOver={() => setShowPopoverEducation(true)}
          onMouseOut={() => setShowPopoverEducation(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopoverEducation && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul className="grid grid-cols-2 gap-2">
                <li>
                    <Link href="/search?genre=music">
                      音楽
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=language">
                      語学
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=books">
                      読書
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=shodo">
                      書道
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=culture">
                      文化/歴史
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=business">
                      ビジネススキル
                    </Link>
                  </li>
                  <li>
                    <Link href="/search?genre=othereducation">
                      その他教養
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          教養
        </button>
      </div>

      <div className="mt-2 flex items-center gap-x-3">
        <button
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          ボランティア
        </button>
        <button
          type="button"
          className="w-32 h-12  rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          食事・お酒
        </button>
        <button
          type="button"
          className="w-32 h-12  rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          観光施設・名所めぐり
        </button>
      </div>
    </div>
  );
};

export default GenreSearch;
