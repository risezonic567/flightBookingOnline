import React from 'react'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import Footer from './components/Footer'
import FeaturePage from './pages/FeaturePage'
// import BlogList from './components/BlogList'
import BlogDetailsPage from './pages/BlogDetailsPage'
import ContactUsPage from './pages/ContactUsPage'
import Testimonial from './components/Testimonial'
import PageNotFound from './pages/PageNotFound'
import Sitemap from './pages/SiteMap'
import AboutPage from './pages/AboutPage'
import HotelPage from './pages/HotelPage'
import FlightPage from './pages/FlightPage'
import FaqPage from './pages/FaqPage'
import Login from './pages/User/Login'
import Signup from './pages/User/Signup'
import ChatWidget from './components/ChatWidget'
// import PrivacyPolicy from './pages/Policies/PrivacyPolicy'
// import TermCondition from './pages/Policies/TermCondition'

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/about-us' element={<AboutPage />} />
          <Route path='/blogs/:slug' element={<BlogDetailsPage />} />
          <Route path="/feature" element={<FeaturePage />} />
          <Route path="/contact-us" element={<ContactUsPage />} />
          <Route path="/sitemap" element={<Sitemap />} />
          <Route path="/hotels" element={<HotelPage />} />
          <Route path="/flights" element={<FlightPage />} />
          <Route path="/faq" element={<FaqPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path='/privay&policy' element={<PrivacyPolicy/>}/> */}
          {/* <Route path='/term&condition' element={<TermCondition/>}/> */}

          <Route path='/reviews' element={<Testimonial />} />
          {/* <Route path='/blogs' element={<BlogList />} /> */}

          <Route path='/*' element={<PageNotFound />} />
        </Routes>
        <ChatWidget/>

        <Footer />
      </BrowserRouter>
    </>
  )
}

