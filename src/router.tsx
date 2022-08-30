import { Route, Routes } from 'react-router-dom'

import AnimeDetail from './pages/AnimeDetail'
import Home from './pages/Home'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/animes/:id/:title" element={<AnimeDetail />} />
    </Routes>
  )
}