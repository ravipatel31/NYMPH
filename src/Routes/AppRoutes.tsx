import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Layout from '../Component/Layout'
import AboutUs from '../Screens/AboutUs'

function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={
        <Layout>
          <Home />
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <AboutUs />
        </Layout>
      } />
    </Routes>
  )
}

export default AppRoutes
