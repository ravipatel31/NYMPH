import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Layout from '../Component/Layout'
import AboutUs from '../Screens/AboutUs'
import ContactUs from '../Screens/ContactUs'

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
      <Route path="/contact" element={
        <Layout>
          <ContactUs />
        </Layout>
      } />
    </Routes>
  )
}

export default AppRoutes
