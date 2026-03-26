const items = [
  "ATLANTA",
  "MIAMI",
  "HOUSTON",
  "TUBAROES AZUIS",
  "WORLD CUP 2026",
  "PRIDE TO ACTION",
];

export default function Ticker() {
  const row = items.map((t, i) => (
    <span key={i} className="flex items-center gap-6 whitespace-nowrap">
      <span>{t}</span>
      <span className="text-cv-gold">&middot;</span>
    </span>
  ));

  return (
    <div className="bg-cv-blue overflow-hidden py-3">
      <div className="ticker-track flex gap-6 font-bebas text-[2.4rem] text-white/[0.45] leading-none">
        {row}
        {row}
        {row}
        {row}
      </div>
    </div>
  );
}
