export const metadata = {
  title: 'FAQ - EchoGuard',
  description: 'Frequently asked questions about EchoGuard privacy app',
}

const faqs = [
  {
    q: 'Does EchoGuard track or collect my data?',
    a: 'Absolutely not. EchoGuard processes everything locally on your device. We never see, collect, or transmit your privacy data. Our entire business model is built around protecting your privacy, not exploiting it.'
  },
  {
    q: 'Is everything processed locally on my device?',
    a: 'Yes, 100%. All permission monitoring, analysis, and storage happens entirely on your Android device. Your privacy data never leaves your phone, and our servers never see your personal information.'
  },
  {
    q: 'Can EchoGuard actually revoke app permissions?',
    a: 'EchoGuard provides guided one-tap access to Android\'s system permission settings. We\'ll take you directly to the right screen with clear instructions on how to modify permissions for optimal privacy.'
  },
  {
    q: 'Will EchoGuard slow down my phone or drain battery?',
    a: 'EchoGuard is designed for efficiency. Our monitoring uses minimal system resources and intelligent batching to preserve battery life. Most users report no noticeable impact on performance.'
  },
  {
    q: 'What Android versions are supported?',
    a: 'EchoGuard supports Android 7.0 (API level 24) and above. For the best experience and full feature set, we recommend Android 10 or newer.'
  },
  {
    q: 'How accurate is the Privacy Score?',
    a: 'The Privacy Score is calculated using advanced algorithms that analyze permission patterns, app behavior, and security best practices. It\'s updated in real-time and provides actionable suggestions for improvement.'
  },
]

export default function FAQPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Frequently Asked Questions</h1>
            <p className="text-lg text-text-secondary">
              Everything you need to know about EchoGuard
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <details key={idx} className="bg-surface border border-border rounded-lg overflow-hidden group">
                <summary className="p-6 font-semibold text-lg cursor-pointer hover:bg-bg transition-colors list-none flex justify-between items-center">
                  <span>{faq.q}</span>
                  <span className="text-2xl text-accent group-open:rotate-45 transition-transform">+</span>
                </summary>
                <div className="px-6 pb-6">
                  <p className="text-text-secondary leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>

          <div className="mt-16 text-center bg-surface p-8 rounded-xl border border-border">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="text-text-secondary mb-6">
              Our support team is here to help you with any questions or concerns.
            </p>
            <a href="#" className="bg-gradient-to-r from-primary to-accent px-8 py-3 rounded-lg font-semibold inline-block hover:shadow-lg hover:shadow-primary/50 transition-all">
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
