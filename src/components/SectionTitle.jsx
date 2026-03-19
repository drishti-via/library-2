export default function SectionTitle({ eyebrow, title, description }) {
  return (
    <div className="space-y-3">
      <p className="text-sm font-semibold uppercase tracking-[0.3em] text-ink-500">{eyebrow}</p>
      <h2 className="text-3xl font-bold tracking-tight text-shelf-900 md:text-4xl">{title}</h2>
      <p className="max-w-2xl text-base leading-relaxed text-shelf-600 md:text-lg">{description}</p>
    </div>
  );
}
