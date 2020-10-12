import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Dashboard from '../pages/Dashboard'

import PageNotFound from '../pages/PageNotFound'

const Router: React.FC = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
)

export default Router
