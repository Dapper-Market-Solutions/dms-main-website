import { useState } from 'react'

const ACCORDION = [
  {
    title: 'Performance-Based Approach',
    body: "We don't get paid to \"try things.\" Every system we build is designed to deliver predictable, measurable results. You'll know exactly what's working, what's not, and how much profit your marketing is generating.",
  },
  {
    title: 'Proprietary Systems, Not Generic Services',
    body: "The Fairway Sales System™ and Dapper IQ™ aren't off-the-shelf tools. They're engineered specifically to solve the problems other agencies ignore: recovering lost traffic, automating follow-up, and turning browsers into buyers.",
  },
  {
    title: 'Built for Business Owners, Not Marketers',
    body: "You didn't start your business to become a marketing expert. We handle the strategy, automation, and optimization so you can focus on what you do best: running your dealership and closing deals. No jargon. No confusion. Just clear results you can see on the books.",
  },
]

export default function About() {
  const [open, setOpen] = useState(0)

  return (
    <section id="about" className="py-0">
      <div className="grid grid-cols-1 lg:grid-cols-2 min-h-96">
        {/* Left — white */}
        <div className="bg-white px-8 md:px-16 py-20">
          <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05' }}>
            Stop gambling on walk-ins.
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#00274c' }}>
            Built for Golf Cart Dealerships Who Are Done Wasting Money on Marketing
          </h2>
          <p className="text-gray-600 leading-relaxed mb-5">
            Dapper Market Solutions specializes in one thing: turning golf cart dealerships into sales machines. While other agencies chase every industry that walks through the door, we've built proprietary systems specifically for dealers who are tired of inconsistent sales, wasted ad spend, and marketing "experts" who've never sold a cart in their life.
          </p>
          <p className="text-gray-600 leading-relaxed mb-8">
            From the Fairway Sales System™ to Dapper IQ™, every tool we've built solves the exact challenges golf cart dealers face: seasonal slumps, long buying cycles, and leads that ghost you after the demo drive. We're a Michigan-based company in South Lyon, but we work with dealerships nationwide who are ready to stop guessing and start growing.
          </p>
          <a
            href="https://bit.ly/dmsbookacall"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-7 py-3 rounded text-sm font-bold transition-all hover:-translate-y-0.5"
            style={{ background: '#00274c', color: 'white' }}
          >
            See How We're Different →
          </a>
        </div>

        {/* Right — navy */}
        <div className="px-8 md:px-16 py-20" style={{ background: '#00274c' }}>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">Why Choose Us?</h2>
          <div>
            {ACCORDION.map((item, i) => (
              <div key={i} className="border-b" style={{ borderColor: 'rgba(255,255,255,0.2)' }}>
                <button
                  className="w-full flex items-center justify-between py-5 text-left group"
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span className="font-semibold text-white group-hover:text-yellow-300 transition-colors pr-4">
                    {item.title}
                  </span>
                  <svg
                    className="w-5 h-5 flex-shrink-0 transition-transform"
                    style={{ color: '#ffcb05', transform: open === i ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{ maxHeight: open === i ? '200px' : '0' }}
                >
                  <p className="pb-5 text-white/70 leading-relaxed text-sm">{item.body}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-lg" style={{ background: 'rgba(255,255,255,0.07)' }}>
            <p className="text-white/70 text-sm mb-4">Ready to see what a purpose-built system can do for your dealership?</p>
            <a
              href="https://bit.ly/dmsbookacall"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 rounded text-sm font-bold transition-all hover:opacity-90"
              style={{ background: '#ffcb05', color: '#00274c' }}
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
