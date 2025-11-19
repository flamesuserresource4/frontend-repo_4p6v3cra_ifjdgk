import React from 'react'

function Navbar() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur bg-white/70 border-b border-slate-200/60">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 shadow-lg shadow-blue-500/20 grid place-items-center text-white font-bold">SG</div>
          <div>
            <p className="text-lg font-semibold text-slate-900 leading-none">Sri Sai Gurukula</p>
            <p className="text-xs text-slate-500 leading-none mt-1">School of Excellence</p>
          </div>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#about" className="hover:text-slate-900">About</a>
          <a href="#programs" className="hover:text-slate-900">Programs</a>
          <a href="#gallery" className="hover:text-slate-900">Gallery</a>
          <a href="#testimonials" className="hover:text-slate-900">Testimonials</a>
          <a href="#contact" className="hover:text-slate-900">Contact</a>
          <a href="#admissions" className="ml-2 inline-flex items-center rounded-full bg-slate-900 text-white px-4 py-2 hover:bg-slate-800">Admissions</a>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
