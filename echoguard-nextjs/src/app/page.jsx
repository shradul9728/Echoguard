import Hero from '@/components/Hero'
import FeatureCard from '@/components/FeatureCard'
import PrivacyScore from '@/components/PrivacyScore'
import TimelineScrubber from '@/components/TimelineScrubber'

const features = [
  {
    icon: '👁️',
    title: 'Permission Monitor',
    description: 'See all app permissions at a glance with visual indicators for high-risk access patterns'
  },
  {
    icon: '📋',
    title: 'Live Access Logs',
    description: 'Real-time feed showing exactly when apps access your camera, microphone, location, and more'
  },
  {
    icon: '🔔',
    title: 'Smart Alerts',
    description: 'Get notified instantly when apps behave suspiciously or access sensitive data unexpectedly'
  },
  {
    icon: '👆',
    title: 'One-Tap Control',
    description: 'Jump directly to system permission settings with guided instructions for easy management'
  },
  {
    icon: '⚡',
    title: 'Privacy Score',
    description: 'Live risk assessment of your device\'s privacy health with actionable improvement suggestions'
  },
  {
    icon: '⏱️',
    title: 'Timeline Replay',
    description: 'Scrub through historical data to see patterns and understand your apps\' behavior over time'
  },
  {
    icon: '📊',
    title: 'Data Flow Visualization',
    description: 'Beautiful animated graphs showing how your data moves from apps to external services'
  },
  {
    icon: '🔒',
    title: 'Encrypted Storage',
    description: 'All privacy logs remain securely on your device – we never see or store your data'
  },
]

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero />

      {/* Problem Section */}
      <section className="py-20 bg-gradient-to-b from-transparent via-surface/50 to-transparent">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">The Hidden Privacy Problem</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Most users have no idea what's happening behind the scenes on their devices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '🚫', title: 'Invisible Tracking', desc: 'Apps silently access your camera, microphone, and location without your knowledge' },
              { icon: '❓', title: 'No Visibility', desc: 'Android\'s built-in tools don\'t show real-time permission usage or historical access' },
              { icon: '⚙️', title: 'Complex Settings', desc: 'Navigating system settings to manage permissions is time-consuming and confusing' },
              { icon: '💰', title: 'Data = Money', desc: 'Your personal data is being harvested and sold while you remain completely unaware' },
            ].map((item, idx) => (
              <div key={idx} className="bg-surface p-8 rounded-xl border border-border hover:border-danger hover:-translate-y-1 transition-all duration-300">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-4">The EchoGuard Solution</h2>
              <p className="text-2xl text-accent font-semibold mb-6">
                A real-time privacy control center for your Android device.
              </p>
              <p className="text-lg text-text-secondary mb-8 leading-relaxed">
                EchoGuard transforms your phone into a transparency machine, giving you complete visibility 
                and control over every app's behavior. No more guessing, no more hidden tracking – just pure, 
                actionable privacy intelligence.
              </p>
              <ul className="space-y-4">
                {['Real-time monitoring', 'Instant alerts', 'One-tap controls', 'Zero data collection'].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-lg">
                    <span className="flex-shrink-0 w-6 h-6 bg-success/20 rounded-full flex items-center justify-center">
                      <span className="text-success text-sm">✓</span>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10 text-center pt-20">
                <div className="text-6xl mb-4">🛡️</div>
                <p className="text-text-secondary">Visual network diagram placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Powerful Privacy Features</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Every tool you need to protect your digital privacy in one elegant app
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <FeatureCard key={idx} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">See EchoGuard in Action</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Experience the power of real-time privacy monitoring
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-surface p-12 rounded-2xl border border-border">
              <div className="grid md:grid-cols-2 gap-12">
                <PrivacyScore />
                <TimelineScrubber />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Section */}
      <section className="py-20 bg-surface">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 gradient-text">Who Benefits from EchoGuard?</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Privacy protection for everyone, tailored to your needs
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: '🛡️', title: 'Privacy-Conscious Users', desc: 'Take control of your digital footprint and protect your personal information' },
              { icon: '🎓', title: 'Students', desc: 'Learn about digital privacy while protecting your academic and personal data' },
              { icon: '👨‍👩‍👧', title: 'Parents', desc: 'Monitor and protect your family\'s devices, teaching digital safety through transparency' },
              { icon: '💼', title: 'Professionals', desc: 'Ensure sensitive business information stays secure on personal and company devices' },
              { icon: '👨‍💻', title: 'Developers', desc: 'Test and analyze app permission behavior during development and security audits' },
              { icon: '📰', title: 'Journalists', desc: 'Protect source confidentiality and sensitive communications with advanced privacy monitoring' },
            ].map((item, idx) => (
              <div key={idx} className="bg-bg p-8 rounded-xl border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300 text-center">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-text-secondary">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="download" className="py-20 bg-gradient-to-r from-primary to-accent relative overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-5xl font-bold mb-4">Ready to Take Control?</h2>
            <p className="text-xl mb-8 text-white/90">
              EchoGuard is your personal privacy command center. Download coming soon!
            </p>
            <div className="flex justify-center gap-4 mb-8 flex-wrap text-white/90">
              <span>✓ Free to download</span>
              <span>✓ No ads</span>
              <span>✓ Regular updates</span>
              <span>✓ 24/7 protection</span>
            </div>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="#demo" className="bg-bg text-white px-8 py-4 rounded-lg font-semibold hover:bg-surface transition-all duration-300 inline-flex items-center gap-2">
                <span>📱</span> View Demo
              </a>
              <a href="#features" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 inline-flex items-center gap-2">
                <span>✨</span> Explore Features
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
