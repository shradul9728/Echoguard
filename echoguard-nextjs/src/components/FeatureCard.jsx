export default function FeatureCard({ icon, title, description }) {
  return (
    <article className="bg-bg p-8 rounded-xl border border-border hover:border-primary hover:-translate-y-1 transition-all duration-300 group">
      <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed">{description}</p>
    </article>
  )
}
