import Image from 'next/image'
import KeywordResearch from './compornents/KeywordResearch'
import GenreResearch from './compornents/GenreResearch'
import AreaResearch from './compornents/AreaResearch'
import { supabase } from '@/utils/supabaseClient';

export default function Home() {
  console.log(supabase);
  return (
    <div>
      <AreaResearch/>
      <KeywordResearch />
      <GenreResearch />
    </div>

  )
}
