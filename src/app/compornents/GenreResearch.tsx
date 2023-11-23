"use client";
import React, { useState } from "react";

const GenreResearch = () => {
  const [showPopover, setShowPopover] = useState(false);

  return (
    <div>
      <div className="mt-2 flex items-center gap-x-3">
        <button
          onMouseEnter={() => setShowPopover(true)}
          onMouseLeave={() => setShowPopover(false)}
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
          {showPopover && (
            <div style={{ position: "absolute", top: "100%", left: 0 }}>
              <p>アウトドア詳細選択画面</p>
            </div>
          )}
          アウトドア
        </button>

        <button
          type="button"
          className="w-32 h-12 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
        >
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

export default GenreResearch;
