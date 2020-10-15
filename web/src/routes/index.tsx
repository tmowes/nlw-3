import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Landing from '../pages/Landing'
import OrphanagesMap from '../pages/OrphanagesMap'

import PageNotFound from '../pages/PageNotFound'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/app" element={<OrphanagesMap />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
)

export default Router
