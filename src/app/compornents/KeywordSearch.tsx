"use client"
import React, { useState } from "react";

const KeywordSearch = () => {
  const [keyword, setKeyword] = useState("");
  const handleSearch = () => {
    window.open(`/searchkeyword?keyword=${keyword}`, "_blank");
  };

  return (
    <div>
      <div className="flex relative mt-2 rounded-md shadow-sm">
        <input
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
          className="block w-2/3 rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          placeholder="山梨　登山"
        />
        <button
          onClick={handleSearch}
          className="rounded-md bg-indigo-500 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          検索
        </button>
      </div>
    </div>
  );
};
export default KeywordSearch;
