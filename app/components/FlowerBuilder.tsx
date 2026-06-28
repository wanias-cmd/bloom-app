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

function BouquetPreview({ config }: { config: FlowerConfig }) {
  const { petalColor, centerColor, stemColor, flowerType, flowerCount } = config

  const renderPetals = (cx: number, cy: number) => {
    switch (flowerType) {
      case "rose":
        return (
          <>
            {[0,45,90,135,180,225,270,315].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="10" ry="18" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -16)`} />
            ))}
            <circle cx={cx} cy={cy} r="11" fill={petalColor} />
            <circle cx={cx} cy={cy} r="7" fill={centerColor} />
          </>
        )
      case "daisy":
        return (
          <>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="5" ry="16" fill={petalColor} opacity="0.9"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -18)`} />
            ))}
            <circle cx={cx} cy={cy} r="10" fill={centerColor} />
          </>
        )
      case "tulip":
        return (
          <>
            <ellipse cx={cx} cy={cy-8} rx="12" ry="20" fill={petalColor} opacity="0.9" />
            <ellipse cx={cx-10} cy={cy-4} rx="9" ry="18" fill={petalColor} opacity="0.8"
              transform={`rotate(-20 ${cx-10} ${cy-4})`} />
            <ellipse cx={cx+10} cy={cy-4} rx="9" ry="18" fill={petalColor} opacity="0.8"
              transform={`rotate(20 ${cx+10} ${cy-4})`} />
            <ellipse cx={cx} cy={cy} rx="7" ry="11" fill={centerColor} opacity="0.4" />
          </>
        )
      case "sunflower":
        return (
          <>
            {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="6" ry="16" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -20)`} />
            ))}
            <circle cx={cx} cy={cy} r="14" fill={centerColor} />
            <circle cx={cx} cy={cy} r="10" fill="#8B4513" opacity="0.4" />
          </>
        )
      case "lily":
        return (
          <>
            {[0,60,120,180,240,300].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="7" ry="22" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -20)`} />
            ))}
            {[30,90,150,210,270,330].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="5" ry="16" fill={petalColor} opacity="0.5"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -16)`} />
            ))}
            <circle cx={cx} cy={cy} r="8" fill={centerColor} />
          </>
        )
      case "cherry blossom":
        return (
          <>
            {[0,72,144,216,288].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} ${cx} ${cy})`}>
                <ellipse cx={cx} cy={cy-16} rx="9" ry="12" fill={petalColor} opacity="0.9" />
              </g>
            ))}
            <circle cx={cx} cy={cy} r="8" fill={centerColor} />
          </>
        )
      case "lavender":
        return (
          <>
            {[-8,-3,2,7,12].map((x, row) =>
              [-10,-4,2,8,14,20].map((y, col) => (
                <ellipse key={`${row}-${col}`} cx={cx+x} cy={cy-20+y} rx="4" ry="6"
                  fill={petalColor} opacity={0.6 + col * 0.05} />
              ))
            )}
          </>
        )
      default:
        return (
          <>
            {[0,60,120,180,240,300].map((angle, i) => (
              <ellipse key={i} cx={cx} cy={cy} rx="10" ry="16" fill={petalColor} opacity="0.9"
                transform={`rotate(${angle} ${cx} ${cy}) translate(0 -18)`} />
            ))}
            <circle cx={cx} cy={cy} r="13" fill={centerColor} />
          </>
        )
    }
  }

  const flowerPositions = [
    [{ cx: 160, cy: 120 }],
    [{ cx: 130, cy: 130 }, { cx: 190, cy: 120 }],
    [{ cx: 120, cy: 135 }, { cx: 160, cy: 110 }, { cx: 200, cy: 130 }],
    [{ cx: 110, cy: 140 }, { cx: 150, cy: 115 }, { cx: 185, cy: 120 }, { cx: 215, cy: 140 }],
    [{ cx: 100, cy: 145 }, { cx: 135, cy: 120 }, { cx: 165, cy: 105 }, { cx: 200, cy: 118 }, { cx: 225, cy: 142 }],
  ]

  const positions = flowerPositions[flowerCount - 1]
  const stemEndX = 160
  const stemEndY = 310

  return (
    <svg width="100%" viewBox="0 0 320 380" xmlns="http://www.w3.org/2000/svg">
      {positions.map((pos, i) => (
        <line key={i}
          x1={pos.cx} y1={pos.cy + 10}
          x2={stemEndX} y2={stemEndY}
          stroke={stemColor} strokeWidth="4" strokeLinecap="round"
        />
      ))}

      <ellipse cx="160" cy="295" rx="28" ry="10" fill="#c8a876" opacity="0.3" />

      <path
        d="M138 290 Q130 265 118 258 Q138 260 148 280 Q155 255 148 235 Q165 258 158 282 Q168 258 178 240 Q172 262 172 282 Q182 262 202 258 Q190 268 182 290 Z"
        fill="#e8607a" opacity="0.85"
      />
      <rect x="152" y="288" width="16" height="30" rx="8" fill="#e8607a" opacity="0.7" />
      <path d="M136 292 Q120 300 115 315 Q130 305 148 308"
        fill="none" stroke="#e8607a" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <path d="M184 292 Q200 300 205 315 Q190 305 172 308"
        fill="none" stroke="#e8607a" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
      <ellipse cx="160" cy="292" rx="10" ry="10" fill="#e8607a" opacity="0.9" />

      {positions.map((pos, i) => (
        <g key={i}>{renderPetals(pos.cx, pos.cy)}</g>
      ))}
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
      <h2 className="text-xl font-semibold text-rose-500 mb-2">Design your bouquet</h2>

      <div className="flex justify-center mb-4">
        <BouquetPreview config={config} />
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