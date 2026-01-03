import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-surface py-16 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 text-2xl font-bold mb-4">
              <span className="text-4xl">🛡️</span>
              <span>EchoGuard</span>
            </div>
            <p className="text-text-secondary mb-4 leading-relaxed">
              Your personal privacy command center. Protecting your digital life, one permission at a time.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold mb-4">Product</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/#features" className="text-text-secondary hover:text-primary transition-colors">Features</Link></li>
              <li><Link href="/download" className="text-text-secondary hover:text-primary transition-colors">Download</Link></li>
              <li><Link href="/faq" className="text-text-secondary hover:text-primary transition-colors">FAQ</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Release Notes</Link></li>
            </ul>
          </div>

          {/* Privacy */}
          <div>
            <h3 className="font-bold mb-4">Privacy</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="/privacy" className="text-text-secondary hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Security</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Data Protection</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-bold mb-4">Support</h3>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Help Center</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Contact Us</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Bug Reports</Link></li>
              <li><Link href="#" className="text-text-secondary hover:text-primary transition-colors">Feature Requests</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-text-muted">
            &copy; 2025 EchoGuard. All rights reserved. Made with privacy in mind.
          </p>
          <div className="flex gap-4 text-xs">
            <span className="px-4 py-2 bg-bg border border-border rounded-full text-text-secondary">
              🔒 Zero Data Collection
            </span>
            <span className="px-4 py-2 bg-bg border border-border rounded-full text-text-secondary">
              🛡️ Encrypted
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
