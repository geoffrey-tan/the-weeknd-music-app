import { Route, BrowserRouter, Routes } from 'react-router-dom'
import DetailPage from '../pages/detail'
import OverviewPage from '../pages/overview'

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OverviewPage />} />
        <Route path="/detail" element={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
