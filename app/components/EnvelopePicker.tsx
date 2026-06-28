"use client"

type Props = {
  selected: string
  onChange: (style: string) => void
}

const envelopes = [
  { id: "classic", label: "Classic", color: "#fff9f0", border: "#f4c08a", seal: "#e8a055" },
  { id: "romantic", label: "Romantic", color: "#fff0f5", border: "#f4a0b8", seal: "#e8607a" },
  { id: "elegant", label: "Elegant", color: "#f0f4ff", border: "#a0b4f4", seal: "#6080e8" },
  { id: "nature", label: "Nature", color: "#f0fff4", border: "#90d4a0", seal: "#50a870" },
]

function EnvelopeSVG({ color, border, seal, selected }: { color: string, border: string, seal: string, selected: boolean }) {
  return (
    <svg width="100" height="70" viewBox="0 0 100 70">
      <rect x="2" y="2" width="96" height="66" rx="6" fill={color} stroke={selected ? seal : border} strokeWidth={selected ? "2.5" : "1.5"} />
      <polyline points="2,2 50,38 98,2" fill="none" stroke={selected ? seal : border} strokeWidth={selected ? "2" : "1.5"} />
      <line x1="2" y1="68" x2="42" y2="35" stroke={selected ? seal : border} strokeWidth="1.5" />
      <line x1="98" y1="68" x2="58" y2="35" stroke={selected ? seal : border} strokeWidth="1.5" />
      <circle cx="50" cy="52" r="8" fill={seal} opacity={selected ? "1" : "0.5"} />
    </svg>
  )
}

export default function EnvelopePicker({ selected, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-rose-500 mb-4">Choose your envelope</h2>
      <div className="grid grid-cols-2 gap-4">
        {envelopes.map(env => (
          <button
            key={env.id}
            onClick={() => onChange(env.id)}
            className={`p-4 rounded-xl border-2 flex flex-col items-center gap-2 transition-all ${selected === env.id ? "border-rose-400 bg-rose-50" : "border-gray-200 hover:border-rose-200"}`}
          >
            <EnvelopeSVG color={env.color} border={env.border} seal={env.seal} selected={selected === env.id} />
            <span className={`text-sm font-medium ${selected === env.id ? "text-rose-500" : "text-gray-500"}`}>
              {env.label}
            </span>
          </button>
        ))}
      </div>
    </div>
  )
}