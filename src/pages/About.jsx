import PageHero from '../components/PageHero'
import CTA from '../components/CTA'

const VALUES = [
  { icon: '🎯', title: 'Performance-Based', body: "We don't get paid to \"try things.\" Every system we build delivers predictable, measurable results. You'll always know what's working, what's not, and what it's generating in profit." },
  { icon: '⚙️', title: 'Proprietary Systems', body: "The Fairway Sales System™ and Dapper IQ™ aren't off-the-shelf tools. They're engineered to solve problems other agencies ignore: recovering lost traffic, automating follow-up, turning browsers into buyers." },
  { icon: '🤝', title: 'Built for Owners', body: "You didn't start your business to become a marketing expert. We handle strategy, automation, and optimization so you can focus on running your dealership and closing deals." },
  { icon: '📊', title: 'Full Transparency', body: "No vanity metrics, no smoke and mirrors. You get clear dashboards, straight-talking reporting, and regular check-ins that show real numbers tied to real revenue." },
]

const TEAM = [
  { name: 'Deepak Dashairya', role: 'Founder & CEO', bio: 'Golf cart dealership marketing specialist with years of experience building data-driven systems that generate consistent, measurable revenue for dealers nationwide.' },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="About Dapper Market Solutions"
        title="We Build Marketing Systems. Not Monthly Retainers."
        subtitle="We're a Michigan-based agency that specializes exclusively in helping golf cart dealerships grow — with proprietary systems built around your sales cycle, not a generic playbook."
        cta="Book a Free Strategy Call"
        ctaHref="https://bit.ly/dmsbookacall"
      />

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="reveal">
              <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Our Story</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 leading-tight" style={{ color: '#00274c' }}>
                Built for Golf Cart Dealerships Who Are Done Wasting Money on Marketing
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Dapper Market Solutions specializes in one thing: turning golf cart dealerships into sales machines. While other agencies chase every industry that walks through the door, we've built proprietary systems specifically for dealers who are tired of inconsistent sales, wasted ad spend, and marketing "experts" who've never sold a cart in their life.
              </p>
              <p className="text-gray-600 leading-relaxed mb-5">
                From the Fairway Sales System™ to Dapper IQ™, every tool we've built solves the exact challenges golf cart dealers face: seasonal slumps, long buying cycles, and leads that ghost you after the demo drive.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We're based in South Lyon, Michigan, but we work with dealerships nationwide who are ready to stop guessing and start growing.
              </p>
            </div>
            <div className="reveal delay-200 grid grid-cols-2 gap-4">
              {[
                { label: 'Based in', value: 'South Lyon, MI' },
                { label: 'Serving', value: 'Nationwide' },
                { label: 'Specialty', value: 'Golf Cart Dealers' },
                { label: 'Approach', value: 'Performance-Based' },
                { label: 'Hours', value: 'Tue–Fri 9AM–5PM' },
                { label: 'Phone', value: '(248) 494-8450' },
              ].map(item => (
                <div key={item.label} className="p-5 rounded-lg" style={{ background: '#f7f7f7', border: '1px solid #e5e7eb' }}>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: '#ffcb05' }}>{item.label}</p>
                  <p className="font-semibold text-sm" style={{ color: '#00274c' }}>{item.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: '#efefef' }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>Why Choose Us</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>What Makes Us Different</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {VALUES.map((v, i) => (
              <div key={i} className="reveal bg-white rounded-xl p-7 shadow-md" style={{ transitionDelay: `${i * 80}ms` }}>
                <div className="text-3xl mb-4">{v.icon}</div>
                <h3 className="text-lg font-bold mb-3" style={{ color: '#00274c' }}>{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12 reveal">
            <p className="text-sm font-semibold uppercase tracking-widest mb-3" style={{ color: '#ffcb05', letterSpacing: '0.2em' }}>The Team</p>
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: '#00274c' }}>People Behind the System</h2>
          </div>
          <div className="flex justify-center">
            {TEAM.map((m, i) => (
              <div key={i} className="reveal text-center max-w-sm">
                <div className="w-24 h-24 rounded-full mx-auto mb-5 flex items-center justify-center text-3xl font-bold text-white" style={{ background: '#00274c' }}>
                  {m.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-xl font-bold mb-1" style={{ color: '#00274c' }}>{m.name}</h3>
                <p className="text-sm font-semibold mb-3" style={{ color: '#ffcb05' }}>{m.role}</p>
                <p className="text-gray-500 text-sm leading-relaxed">{m.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
