import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Layout from '../Component/Layout'
import AboutUs from '../Screens/AboutUs'
import ContactUs from '../Screens/ContactUs'
import Home2 from '../Screens/Home2'
import AboutUs2 from '../Screens/AboutUs2'
import ContactUs2 from '../Screens/ContactUs2'

function AppRoutes() {
  return (
     <Routes>
      <Route path="/" element={
        <Layout>
          <Home2 />
        </Layout>
      } />
      <Route path="/about" element={
        <Layout>
          <AboutUs2 />
        </Layout>
      } />
      <Route path="/contact" element={
        <Layout>
          <ContactUs2 />
        </Layout>
      } />
    </Routes>
  )
}

export default AppRoutes
