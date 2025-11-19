import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Programs, Gallery, Testimonials, Admissions, Contact } from './components/Sections'
import Footer from './components/Footer'

function App() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <Gallery />
      <Testimonials />
      <Admissions />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
