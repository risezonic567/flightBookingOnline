import React, { useEffect, useState } from 'react'
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
import FlightListPage from './pages/FlightListPage'
import CheckoutPage from './pages/CheckoutPage'
import HotelListPage from './pages/HotelListPage'
import HotelBookCard from './pages/HotelBookCard'
import Loader from './components/Loader'
// import RefundPolicy from './pages/Policies/RefundPolicy'
// import TermsCondition from './pages/Policies/TermCondition'
// import PrivacyPolicy from './pages/Policies/PrivacyPolicy'

export default function App() {
  const [loader,setLoader]=useState(true)
  useEffect(()=>{
    const timer =setTimeout(()=>{
      setLoader(false)
    },2000)

    return ()=>clearTimeout(timer)
  },[])


  if (loader) {
    return <Loader />;
  }

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
          {/* <Route path="/flights-list" element={<FlightListPage />} /> */}
          {/* <Route path="/hotels-list" element={<HotelListPage />} /> */}
          <Route path="/hotel-facility" element={<HotelBookCard />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/faq" element={<FaqPage />} />

          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* <Route path='/privacy-policy' element={<PrivacyPolicy/>}/>
          <Route path='/terms-condition' e  lement={<TermsCondition/>}/> */}
          {/* <Route path='/refund-policy' element={<RefundPolicy />} /> */}

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

