import Image from 'next/image'
import KeywordResearch from './compornents/KeywordResearch'
import GenreResearch from './compornents/GenreResearch'
import AreaResearch from './compornents/AreaResearch'

export default async function Home() {

  return (
    <div>
      <AreaResearch />
      <KeywordResearch />
      <GenreResearch />
    </div>

  )
}
