import React from 'react'

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        <div className="md:col-span-1">
          <h2 className="text-3xl font-bold text-slate-900">About Our School</h2>
          <p className="mt-3 text-slate-600">Rooted in values, driven by excellence.</p>
        </div>
        <div className="md:col-span-2 text-slate-600 leading-relaxed">
          <p>
            We are committed to holistic education—academic rigor, life skills, and values.
            Our experienced faculty and student-centric approach ensure every child discovers
            their strengths and thrives in a supportive environment.
          </p>
          <div className="mt-6 grid sm:grid-cols-3 gap-6">
            {[
              { title: 'Experienced Faculty', desc: 'Mentors who inspire and guide every day.' },
              { title: 'Modern Learning', desc: 'Smart classrooms, labs, and sports facilities.' },
              { title: 'Value-Based Education', desc: 'Discipline, empathy, and responsibility.' },
            ].map((f) => (
              <div key={f.title} className="p-5 rounded-xl border border-slate-200 hover:shadow-md transition">
                <p className="font-semibold text-slate-900">{f.title}</p>
                <p className="text-sm text-slate-600 mt-1">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export function Programs() {
  const items = [
    { title: 'Pre-Primary', desc: 'Play-based learning, foundational skills.' },
    { title: 'Primary', desc: 'Strong literacy, numeracy, and curiosity.' },
    { title: 'Middle School', desc: 'Concept mastery and life skills.' },
    { title: 'High School', desc: 'Board exam preparation and career guidance.' },
  ]
  return (
    <section id="programs" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">Programs</h2>
          <p className="mt-3 text-slate-600">Designed for every stage of growth</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => (
            <div key={it.title} className="p-6 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition">
              <p className="text-lg font-semibold text-slate-900">{it.title}</p>
              <p className="text-sm text-slate-600 mt-2">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Gallery() {
  const imgs = [
    'https://images.unsplash.com/photo-1529070538774-1843cb3265df?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?q=80&w=1200&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop',
  ]
  return (
    <section id="gallery" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Campus Life</h2>
            <p className="mt-3 text-slate-600">A glimpse into activities and facilities</p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {imgs.map((src, i) => (
            <img key={i} src={src} className="rounded-xl border border-slate-200 object-cover h-48 w-full" alt="Gallery" />
          ))}
        </div>
      </div>
    </section>
  )
}

export function Testimonials() {
  const items = [
    { name: 'Parent', text: 'My child loves going to school. The teachers are supportive and the environment is positive.' },
    { name: 'Student', text: 'I enjoy the labs, sports, and the encouragement I get to try new things.' },
    { name: 'Alumni', text: 'The values I learned here continue to guide me.' },
  ]
  return (
    <section id="testimonials" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-10">
          <h2 className="text-3xl font-bold text-slate-900">What People Say</h2>
          <p className="mt-3 text-slate-600">Voices from our community</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, idx) => (
            <div key={idx} className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm">
              <p className="text-slate-700">“{it.text}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-900">— {it.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Admissions() {
  return (
    <section id="admissions" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-slate-900">Admissions Open</h2>
          <p className="mt-3 text-slate-600">Secure your child’s seat for the upcoming academic year.</p>
          <ul className="mt-6 space-y-2 text-slate-600 list-disc list-inside">
            <li>Eligibility: As per board guidelines</li>
            <li>Documents: Birth certificate, address proof, previous report card</li>
            <li>Interaction/Assessment: Scheduled after form submission</li>
          </ul>
        </div>
        <form onSubmit={(e) => e.preventDefault()} className="p-6 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="grid sm:grid-cols-2 gap-4">
            <input required placeholder="Parent Name" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input required placeholder="Student Name" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input required placeholder="Phone" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <input placeholder="Email" type="email" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <select className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900">
              <option>Grade applying for</option>
              <option>Pre-Primary</option>
              <option>Primary</option>
              <option>Middle School</option>
              <option>High School</option>
            </select>
            <input placeholder="City" className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900" />
            <textarea placeholder="Message" className="sm:col-span-2 px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-slate-900 min-h-[120px]" />
          </div>
          <button className="mt-4 inline-flex items-center rounded-full bg-slate-900 text-white px-5 py-3 font-semibold hover:bg-slate-800">Submit Enquiry</button>
        </form>
      </div>
    </section>
  )
}

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-slate-100">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <p className="mt-3 text-slate-300">We’d love to hear from you.</p>
          <div className="mt-6 space-y-2 text-slate-300">
            <p>Phone: +91-00000 00000</p>
            <p>Email: info@srg.edu</p>
            <p>Address: Your campus address here</p>
          </div>
        </div>
        <div className="rounded-2xl overflow-hidden border border-white/10">
          <iframe title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.83914799846!2d144.9537363153156!3d-37.81627974202108!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ5JzAwLjYiUyAxNDTCsDU3JzE0LjMiRQ!5e0!3m2!1sen!2s!4v1614034542270!5m2!1sen!2s" width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy"></iframe>
        </div>
      </div>
    </section>
  )
}
