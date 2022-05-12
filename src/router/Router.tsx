import { BrowserRouter, Route, Routes } from 'react-router-dom'

import IndexPage from '../pages'
import DetailPage from '../pages/detail'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<IndexPage />} />
        <Route path="/album/:id" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
