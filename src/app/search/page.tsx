"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import SearchList from '../compornents/SearchList';
import KeywordSearch from '../compornents/KeywordSearch';

const SearchResult = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword')

  return (
    <SearchList searchTerm={keyword} />
  )
    };
export default SearchResult