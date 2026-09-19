import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../Screens/Home'
import Layout from '../Component/Layout'
import AboutUs from '../Screens/AboutUs'
import ContactUs from '../Screens/ContactUs'
import Home2 from '../Screens/Home2'
import AboutUs2 from '../Screens/AboutUs2'
import ContactUs2 from '../Screens/ContactUs2'
import Services from '../Screens/Services'
import TrainingWorkshops from '../Screens/TrainigWorkshops'

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
      <Route path="/services" element={
        <Layout>
          <Services />
        </Layout>
      } />
      <Route path="/training&workshop" element={
        <Layout>
          <TrainingWorkshops />
        </Layout>
      } />
    </Routes>
  )
}

export default AppRoutes
