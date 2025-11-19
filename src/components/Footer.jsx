import React from 'react'

function Footer() {
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 py-10 grid md:grid-cols-3 gap-8 text-sm text-slate-600">
        <div>
          <p className="text-slate-900 font-semibold">Sri Sai Gurukula</p>
          <p className="mt-2">Nurturing minds. Building futures.</p>
        </div>
        <div>
          <p className="text-slate-900 font-semibold">Quick Links</p>
          <div className="mt-2 space-y-1">
            <a href="#about" className="block hover:text-slate-900">About</a>
            <a href="#programs" className="block hover:text-slate-900">Programs</a>
            <a href="#admissions" className="block hover:text-slate-900">Admissions</a>
            <a href="#contact" className="block hover:text-slate-900">Contact</a>
          </div>
        </div>
        <div>
          <p className="text-slate-900 font-semibold">Stay Updated</p>
          <form onSubmit={(e) => e.preventDefault()} className="mt-2 flex gap-2">
            <input placeholder="Your email" className="flex-1 px-4 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <button className="px-4 py-2 rounded-lg bg-slate-900 text-white">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">© {new Date().getFullYear()} Sri Sai Gurukula. All rights reserved.</div>
    </footer>
  )
}

export default Footer
