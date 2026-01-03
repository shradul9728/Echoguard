export const metadata = {
  title: 'Privacy Policy - EchoGuard',
  description: 'EchoGuard privacy policy - Zero data collection guaranteed',
}

export default function PrivacyPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Privacy Policy</h1>
            <p className="text-lg text-text-secondary">
              Last updated: November 15, 2025
            </p>
          </div>

          <div className="bg-success/20 border border-success p-6 rounded-xl mb-12">
            <h2 className="text-xl font-bold mb-3 text-success">Zero Data Collection Guarantee</h2>
            <p className="text-text-secondary">
              EchoGuard does not collect, store, or transmit any of your personal data. 
              Everything happens locally on your device. This is not marketing speak – it's 
              our core principle.
            </p>
          </div>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4">What We Don't Collect</h2>
              <ul className="space-y-2 text-text-secondary">
                <li>✓ No permission usage data</li>
                <li>✓ No app installation lists</li>
                <li>✓ No location data</li>
                <li>✓ No contact information</li>
                <li>✓ No advertising IDs</li>
                <li>✓ No analytics or tracking</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">How EchoGuard Works</h2>
              <p className="text-text-secondary leading-relaxed">
                EchoGuard uses Android's native APIs to monitor permission requests in real-time. 
                All processing happens entirely on your device. The app stores logs locally in 
                encrypted storage that only you can access. We have no servers collecting your data 
                because there's nothing to collect.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Permissions We Request</h2>
              <p className="text-text-secondary leading-relaxed mb-4">
                To function properly, EchoGuard requires certain permissions:
              </p>
              <ul className="space-y-3 text-text-secondary">
                <li>
                  <strong className="text-white">Usage Access:</strong> Required to monitor which apps 
                  are accessing permissions. This data never leaves your device.
                </li>
                <li>
                  <strong className="text-white">Notification Access:</strong> Optional. Allows EchoGuard 
                  to show you real-time alerts about permission usage.
                </li>
                <li>
                  <strong className="text-white">Storage:</strong> To save your privacy logs locally on your device.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-text-secondary leading-relaxed">
                EchoGuard does not integrate with any third-party analytics, advertising, or tracking 
                services. We don't use Google Analytics, Facebook SDKs, or any similar tools. The only 
                external connection is to check for app updates (which can be disabled).
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-text-secondary leading-relaxed">
                All privacy logs are stored in encrypted format using Android's native encryption. 
                Your data is protected by your device's security measures. We recommend using a strong 
                device lock screen for additional protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <ul className="space-y-2 text-text-secondary">
                <li>✓ You can delete all local data at any time</li>
                <li>✓ You can revoke permissions whenever you want</li>
                <li>✓ You can uninstall the app without any data remnants</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-text-secondary leading-relaxed">
                If you have questions about our privacy practices, please contact us at:{' '}
                <a href="mailto:privacy@echoguard.app" className="text-primary hover:text-accent">
                  privacy@echoguard.app
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
