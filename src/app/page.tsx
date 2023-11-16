import Image from 'next/image'
import KeywordResearch from './compornents/KeywordResearch'
import GenreResearch from './compornents/GenreResearch'
import AreaResearch from './compornents/AreaResearch'
import { supabase } from '@/utils/supabaseClient';

export default async function Home() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;
  const res = await fetch(`${API_URL}/api`, {cache: "no-store"});
  const item = await res.json();

  return (
    <div>
      <AreaResearch />
      <KeywordResearch items = {item}/>
      <GenreResearch />
    </div>

  )
}
