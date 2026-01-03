export const metadata = {
  title: 'Download - EchoGuard',
  description: 'Download EchoGuard for Android and take control of your privacy',
}

export default function DownloadPage() {
  return (
    <div className="pt-24 pb-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-4 gradient-text">Download EchoGuard</h1>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              EchoGuard will be available for download soon. Stay tuned!
            </p>
          </div>

          {/* Coming Soon Notice */}
          <div className="bg-surface p-12 rounded-xl border border-accent mb-16 text-center">
            <div className="text-7xl mb-6">🚀</div>
            <h2 className="text-4xl font-bold mb-4 gradient-text">Coming Soon!</h2>
            <p className="text-text-secondary mb-8 text-lg max-w-xl mx-auto">
              We're working hard to bring EchoGuard to your Android device. The app is currently in development and will be available for download shortly.
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <a href="/#demo" className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg font-semibold inline-block hover:shadow-lg hover:shadow-primary/50 transition-all">
                View Demo
              </a>
              <a href="/#features" className="bg-surface border-2 border-accent px-8 py-4 rounded-lg font-semibold inline-block hover:bg-accent/10 transition-all">
                Explore Features
              </a>
            </div>
          </div>

          {/* System Requirements */}
          <div className="bg-surface p-8 rounded-xl border border-border mb-16">
            <h2 className="text-2xl font-bold mb-6">System Requirements</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-accent">Minimum Requirements</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Android 7.0 (Nougat) or higher</li>
                  <li>✓ 50 MB free storage</li>
                  <li>✓ Internet connection (for initial setup)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-success">Recommended</h3>
                <ul className="space-y-2 text-text-secondary">
                  <li>✓ Android 10 or higher</li>
                  <li>✓ 100 MB free storage</li>
                  <li>✓ For optimal performance</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Features List */}
          <div className="bg-gradient-to-r from-primary to-accent p-8 rounded-xl text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">What You Get</h2>
            <div className="grid md:grid-cols-4 gap-4 text-white/90">
              <div>✓ Free to use</div>
              <div>✓ No ads</div>
              <div>✓ Regular updates</div>
              <div>✓ 24/7 protection</div>
            </div>
          </div>

          {/* Installation Guide */}
          <div>
            <h2 className="text-2xl font-bold mb-6 text-center">What to Expect</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  1
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Easy Download</h3>
                  <p className="text-text-secondary">
                    Once available, download and install EchoGuard with just a few taps.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  2
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Grant Permissions</h3>
                  <p className="text-text-secondary">
                    EchoGuard will request necessary permissions to monitor other apps.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center font-bold text-primary">
                  3
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Start Monitoring</h3>
                  <p className="text-text-secondary">
                    Your privacy command center is ready! View real-time app activity instantly.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
