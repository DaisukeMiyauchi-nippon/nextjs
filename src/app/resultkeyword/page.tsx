"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'

const ResultKeyword = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword')

  return (
    <div>
      Searched keyword: {keyword}
      {/* 他の検索結果に関するコンポーネントやロジックを追加できます */}
    </div>
  );
};


export default ResultKeyword