"use client";
import React from "react";
import { useSearchParams } from "next/navigation";
import SearchList from "../compornents/SearchList";

const GenreSearchResult = () => {
  const searchParams = useSearchParams();
  const word = searchParams.get("word");

  return (
    <div className="bg-white px-2 py-12 sm:py-12 lg:px-4">
      <div className="mx-auto max-w-4xl ">
        <div className="text-xl font-bold tracking-tight text-gray-900 text-center">
          検索結果一覧
        </div>
        <div>
          <SearchList keyword={word} category="genre" />
        </div>
      </div>
    </div>
  );
};
export default GenreSearchResult;
