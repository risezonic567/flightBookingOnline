import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import FeaturePage from './pages/FeaturePage'
import BlogList from './components/BlogList'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactUsPage from './pages/ContactUsPage'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path="/feature" element={<FeaturePage />} />

          <Route path="/contact-us" element={<ContactUsPage />} />

          <Route path='/blogs' element={<BlogList />} />
          <Route path='/blogs/:slug' element={<BlogDetailsPage />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  )
}

