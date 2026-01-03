import PrivacyScore from '@/components/PrivacyScore'
import TimelineScrubber from '@/components/TimelineScrubber'

export const metadata = {
  title: 'Interactive Demo - EchoGuard',
  description: 'See EchoGuard in action with our interactive demo',
}

export default function DemoPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4 gradient-text">Interactive Demo</h1>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Experience how EchoGuard monitors your privacy in real-time
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-12">
          {/* Privacy Score Demo */}
          <div className="bg-surface p-12 rounded-2xl border border-border">
            <PrivacyScore />
          </div>

          {/* Timeline Demo */}
          <div className="bg-surface p-12 rounded-2xl border border-border">
            <TimelineScrubber />
          </div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-surface p-6 rounded-xl border border-border text-center">
              <div className="text-4xl mb-3">⚡</div>
              <h3 className="font-bold mb-2">Real-Time Updates</h3>
              <p className="text-sm text-text-secondary">
                See permission access as it happens
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border text-center">
              <div className="text-4xl mb-3">📊</div>
              <h3 className="font-bold mb-2">Visual Timeline</h3>
              <p className="text-sm text-text-secondary">
                Scrub through your privacy history
              </p>
            </div>
            <div className="bg-surface p-6 rounded-xl border border-border text-center">
              <div className="text-4xl mb-3">🎯</div>
              <h3 className="font-bold mb-2">Smart Scoring</h3>
              <p className="text-sm text-text-secondary">
                Know your privacy health at a glance
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center bg-gradient-to-r from-primary to-accent p-8 rounded-xl">
            <h2 className="text-3xl font-bold mb-4">Ready to protect your privacy?</h2>
            <p className="text-white/90 mb-6">
              Download EchoGuard and take control of your Android device today
            </p>
            <a href="/download" className="bg-bg text-white px-8 py-4 rounded-lg font-semibold inline-block hover:bg-surface transition-all">
              Download Now
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
