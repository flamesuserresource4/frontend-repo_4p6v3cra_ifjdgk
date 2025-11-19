import React from 'react'

function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900" />
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 bg-gradient-to-tr from-blue-500/40 to-cyan-400/40" />

      <div className="max-w-7xl mx-auto px-6 pt-24 pb-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center text-xs font-medium text-cyan-300/90 bg-cyan-500/10 ring-1 ring-cyan-500/30 px-3 py-1 rounded-full mb-4">Nurturing Minds • Building Futures</span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white">
            A better place to learn, grow, and succeed
          </h1>
          <p className="mt-6 text-slate-200 text-lg leading-relaxed">
            Sri Sai Gurukula blends strong academics, character building, and modern facilities in a warm, caring environment.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#admissions" className="inline-flex items-center rounded-full bg-white text-slate-900 px-5 py-3 font-semibold hover:bg-slate-100">
              Apply for Admissions
            </a>
            <a href="#programs" className="inline-flex items-center rounded-full bg-slate-800/60 text-white px-5 py-3 font-semibold ring-1 ring-white/10 hover:bg-slate-800">
              Explore Programs
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-tr from-blue-500/20 to-cyan-400/20 blur-2xl" />
          <img src="https://images.unsplash.com/photo-1591123120675-6f7f1aae0e5b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxTY2hvb2wlMjBjYW1wdXN8ZW58MHwwfHx8MTc2MzU0MzQzNnww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="School campus" className="rounded-3xl border border-white/10 shadow-2xl" />
        </div>
      </div>
    </section>
  )
}

export default Hero
