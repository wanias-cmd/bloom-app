"use client"

type FlowerConfig = {
  petalColor: string
  centerColor: string
  stemColor: string
  flowerType: string
  flowerCount: number
}

type Props = {
  config: FlowerConfig
  onChange: (config: FlowerConfig) => void
}

function Flower({ petalColor, centerColor, stemColor, flowerType }: Omit<FlowerConfig, "flowerCount">) {
  const renderPetals = () => {
    switch (flowerType) {

      case "rose":
        return (
          <>
            {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="8" ry="16"
                fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -14)`} />
            ))}
            <circle cx="40" cy="40" r="10" fill={petalColor} />
            <circle cx="40" cy="40" r="6" fill={centerColor} />
          </>
        )

      case "daisy":
        return (
          <>
            {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="4" ry="14"
                fill={petalColor} opacity="0.9"
                transform={`rotate(${angle} 40 40) translate(0 -16)`} />
            ))}
            <circle cx="40" cy="40" r="9" fill={centerColor} />
          </>
        )

      case "tulip":
        return (
          <>
            <ellipse cx="40" cy="32" rx="10" ry="18" fill={petalColor} opacity="0.9" />
            <ellipse cx="30" cy="36" rx="8" ry="16" fill={petalColor} opacity="0.8"
              transform="rotate(-20 30 36)" />
            <ellipse cx="50" cy="36" rx="8" ry="16" fill={petalColor} opacity="0.8"
              transform="rotate(20 50 36)" />
            <ellipse cx="40" cy="38" rx="6" ry="10" fill={centerColor} opacity="0.4" />
          </>
        )

      case "sunflower":
        return (
          <>
            {[0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="5" ry="14"
                fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -18)`} />
            ))}
            <circle cx="40" cy="40" r="13" fill={centerColor} />
            <circle cx="40" cy="40" r="9" fill="#8B4513" opacity="0.4" />
          </>
        )

      case "lily":
        return (
          <>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="6" ry="20"
                fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -18)`} />
            ))}
            {[30, 90, 150, 210, 270, 330].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="4" ry="14"
                fill={petalColor} opacity="0.5"
                transform={`rotate(${angle} 40 40) translate(0 -14)`} />
            ))}
            <circle cx="40" cy="40" r="7" fill={centerColor} />
          </>
        )

      case "cherry blossom":
        return (
          <>
            {[0, 72, 144, 216, 288].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 40 40)`}>
                <ellipse cx="40" cy="24" rx="8" ry="10"
                  fill={petalColor} opacity="0.9" />
                <line x1="40" y1="32" x2="40" y2="40"
                  stroke={petalColor} strokeWidth="1" opacity="0.4" />
              </g>
            ))}
            <circle cx="40" cy="40" r="7" fill={centerColor} />
          </>
        )

      case "lavender":
        return (
          <>
            {[-12, -6, 0, 6, 12].map((x, row) =>
              [-8, -2, 4, 10, 16, 22].map((y, col) => (
                <ellipse key={`${row}-${col}`}
                  cx={40 + x} cy={20 + y}
                  rx="4" ry="5"
                  fill={petalColor}
                  opacity={0.6 + col * 0.05} />
              ))
            )}
            <rect x="38" y="44" width="4" height="16" rx="2" fill={stemColor} />
          </>
        )

      default:
        return (
          <>
            {[0, 60, 120, 180, 240, 300].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="9" ry="14"
                fill={petalColor} opacity="0.9"
                transform={`rotate(${angle} 40 40) translate(0 -16)`} />
            ))}
            <circle cx="40" cy="40" r="12" fill={centerColor} />
          </>
        )
    }
  }

  return (
    <svg width="80" height="120" viewBox="0 0 80 120">
      {flowerType !== "lavender" && (
        <rect x="38" y="58" width="4" height="56" rx="2" fill={stemColor} />
      )}
      {renderPetals()}
    </svg>
  )
}

const flowerTypes = [
  { id: "rose", label: "Rose" },
  { id: "daisy", label: "Daisy" },
  { id: "tulip", label: "Tulip" },
  { id: "sunflower", label: "Sunflower" },
  { id: "lily", label: "Lily" },
  { id: "cherry blossom", label: "Cherry Blossom" },
  { id: "lavender", label: "Lavender" },
]

export default function FlowerBuilder({ config, onChange }: Props) {
  const update = (key: keyof FlowerConfig, value: string | number) => {
    onChange({ ...config, [key]: value })
  }

  return (
    <div>
      <h2 className="text-xl font-semibold text-rose-500 mb-4">Design your flowers</h2>

      <div className="flex justify-center gap-1 mb-6 flex-wrap">
        {Array.from({ length: config.flowerCount }).map((_, i) => (
          <Flower
            key={i}
            petalColor={config.petalColor}
            centerColor={config.centerColor}
            stemColor={config.stemColor}
            flowerType={config.flowerType}
          />
        ))}
      </div>

      <div className="space-y-5">

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">Flower type</label>
          <div className="grid grid-cols-2 gap-2">
            {flowerTypes.map(f => (
              <button
                key={f.id}
                onClick={() => update("flowerType", f.id)}
                className={`py-2 px-3 rounded-xl text-sm font-medium border transition-all ${config.flowerType === f.id ? "bg-rose-400 text-white border-rose-400" : "border-gray-200 text-gray-500 hover:border-rose-300"}`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Petal color</label>
            <input type="color" value={config.petalColor}
              onChange={e => update("petalColor", e.target.value)}
              className="w-12 h-10 rounded cursor-pointer border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Center color</label>
            <input type="color" value={config.centerColor}
              onChange={e => update("centerColor", e.target.value)}
              className="w-12 h-10 rounded cursor-pointer border border-gray-200" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-600 mb-1">Stem color</label>
            <input type="color" value={config.stemColor}
              onChange={e => update("stemColor", e.target.value)}
              className="w-12 h-10 rounded cursor-pointer border border-gray-200" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-2">
            Number of flowers: {config.flowerCount}
          </label>
          <input type="range" min="1" max="5"
            value={config.flowerCount}
            onChange={e => update("flowerCount", parseInt(e.target.value))}
            className="w-full accent-rose-400" />
        </div>

      </div>
    </div>
  )
}