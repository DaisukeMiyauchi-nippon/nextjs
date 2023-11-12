import Image from 'next/image'
import MapResearch from './compornents/MapResearch'
import KeywordResearch from './compornents/KeywordResearch'
import GenreResearch from './compornents/GenreResearch'
import SlideBar from './compornents/SlideBar'

export default function Home() {
  return (
    <div>
      <SlideBar />
      <MapResearch />
      <KeywordResearch />
      <GenreResearch />
    </div>

  )
}
