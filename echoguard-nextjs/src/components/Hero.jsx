export default function Hero() {
  return (
    <section className="min-h-screen flex items-center pt-18 pb-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 gradient-bg"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div>
            <h1 className="text-6xl md:text-7xl font-extrabold leading-tight mb-6">
              Your Personal <span className="gradient-text">Privacy Command Center</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 leading-relaxed">
              Take complete control of your Android device's privacy with real-time permission monitoring, 
              live access logs, and instant alerts. See exactly what apps are doing behind the scenes.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex gap-4 mb-12 flex-wrap">
              <a href="#download" className="bg-gradient-to-r from-primary to-accent px-8 py-4 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 transition-all duration-300 inline-flex items-center gap-2">
                <span>📱</span> Download for Android
              </a>
              <a href="#demo" className="bg-surface border border-border px-8 py-4 rounded-lg font-semibold hover:border-primary transition-all duration-300 inline-flex items-center gap-2">
                <span>▶️</span> Watch Demo
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 flex-wrap">
              <div>
                <div className="text-3xl font-extrabold text-primary">Real-Time</div>
                <div className="text-sm text-text-muted">Privacy Monitoring</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-success">0</div>
                <div className="text-sm text-text-muted">Data Collected</div>
              </div>
              <div>
                <div className="text-3xl font-extrabold text-accent">100%</div>
                <div className="text-sm text-text-muted">Free & Open</div>
              </div>
            </div>
          </div>
          
          {/* Visual */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              {/* Phone mockup placeholder */}
              <div className="w-80 h-96 mx-auto bg-surface rounded-3xl border-4 border-border shadow-2xl p-4">
                <div className="bg-bg h-full rounded-2xl p-4 flex flex-col">
                  <div className="text-center mb-4">
                    <h3 className="font-bold mb-2">Privacy Dashboard</h3>
                    <div className="inline-flex items-center gap-2 bg-accent/20 px-4 py-2 rounded-full">
                      <div className="text-2xl font-bold text-accent">87</div>
                      <div className="text-xs text-text-secondary">Privacy Score</div>
                    </div>
                  </div>
                  <div className="space-y-2 flex-1">
                    <div className="bg-surface p-3 rounded-lg flex items-center gap-3 border border-success/20">
                      <span className="text-xl">🎤</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">WhatsApp</div>
                        <div className="text-xs text-text-muted">Microphone</div>
                      </div>
                      <div className="text-xs text-success">Now</div>
                    </div>
                    <div className="bg-surface p-3 rounded-lg flex items-center gap-3 border border-border">
                      <span className="text-xl">📍</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Maps</div>
                        <div className="text-xs text-text-muted">Location</div>
                      </div>
                      <div className="text-xs text-text-muted">2m ago</div>
                    </div>
                    <div className="bg-surface p-3 rounded-lg flex items-center gap-3 border border-border opacity-70">
                      <span className="text-xl">📷</span>
                      <div className="flex-1">
                        <div className="text-sm font-medium">Instagram</div>
                        <div className="text-xs text-text-muted">Camera</div>
                      </div>
                      <div className="text-xs text-text-muted">5m ago</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Floating icons */}
            <div className="absolute -top-10 -left-10 text-6xl animate-float" style={{animationDelay: '0s'}}>🛡️</div>
            <div className="absolute -bottom-10 -right-10 text-6xl animate-float" style={{animationDelay: '1s'}}>👁️</div>
            <div className="absolute top-1/2 -right-20 text-6xl animate-float" style={{animationDelay: '2s'}}>🔒</div>
          </div>
        </div>
      </div>
    </section>
  )
}
