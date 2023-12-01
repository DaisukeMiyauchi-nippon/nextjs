"use client";
import Link from "next/link";
import React, { useState } from "react";

const GenreSearch = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div className="relative">
      <div className="mt-2 flex items-center gap-x-3">
        <button
          onMouseOver={() => setShowPopover(true)}
          onMouseOut={() => setShowPopover(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopover && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <Link href="https://www.yahoo.co.jp/">
                  アウトドア詳細選択画面
                </Link>
              </div>
            </div>
          )}
          アウトドア
        </button>

        <button
          onMouseOver={() => setShowPopover(true)}
          onMouseOut={() => setShowPopover(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopover && (
            <div className="absolute z-10 top-12 left-1/2 transform -translate-x-1/2 w-screen max-w-md flex overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                <ul>
                  <li>
                    <Link href="https://www.google.co.jp/">
                      スポーツ詳細選択画面
                    </Link>
                  </li>
                  <li>
                    <Link href="https://www.google.co.jp/">
                      スポーツ詳細選択画面
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          )}
          スポーツ
        </button>

        <button
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
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
