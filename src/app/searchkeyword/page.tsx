"use client"
import React from 'react'
import { useSearchParams } from 'next/navigation'
import SearchList from '../compornents/SearchList';

const SearchResult = () => {
  const searchParams = useSearchParams()
  const keyword = searchParams.get('keyword')

  return (
    <SearchList e={keyword}/>
  )

    };
export default SearchResult