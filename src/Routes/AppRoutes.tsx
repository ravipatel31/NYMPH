import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Layout from '../Component/Layout'

function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
    </Routes>
  )
}

export default AppRoutes
