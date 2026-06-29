"use client"

import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

const envelopeColors: Record<string, { color: string, border: string, seal: string }> = {
  classic:  { color: "#fff9f0", border: "#f4c08a", seal: "#e8a055" },
  romantic: { color: "#fff0f5", border: "#f4a0b8", seal: "#e8607a" },
  elegant:  { color: "#f0f4ff", border: "#a0b4f4", seal: "#6080e8" },
  nature:   { color: "#f0fff4", border: "#90d4a0", seal: "#50a870" },
}

function BouquetSVG({ config }: { config: any }) {
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

  const count = flowerCount || 3

  const flowerPositions = [
    [{ cx: 160, cy: 120 }],
    [{ cx: 130, cy: 130 }, { cx: 190, cy: 120 }],
    [{ cx: 120, cy: 135 }, { cx: 160, cy: 110 }, { cx: 200, cy: 130 }],
    [{ cx: 110, cy: 140 }, { cx: 150, cy: 115 }, { cx: 185, cy: 120 }, { cx: 215, cy: 140 }],
    [{ cx: 100, cy: 145 }, { cx: 135, cy: 120 }, { cx: 165, cy: 105 }, { cx: 200, cy: 118 }, { cx: 225, cy: 142 }],
  ]

  const stemEndX = 160
  const stemEndY = 310

  const positions = flowerPositions[count - 1]

  return (
    <svg width="100%" viewBox="0 0 320 380" xmlns="http://www.w3.org/2000/svg">

      {positions.map((pos, i) => (
        <line
          key={i}
          x1={pos.cx}
          y1={pos.cy + 10}
          x2={stemEndX}
          y2={stemEndY}
          stroke={stemColor}
          strokeWidth="4"
          strokeLinecap="round"
        />
      ))}

      <ellipse cx="160" cy="295" rx="28" ry="10" fill="#c8a876" opacity="0.3" />

      <path
        d="M138 290 Q130 265 118 258 Q138 260 148 280 Q155 255 148 235 Q165 258 158 282 Q168 258 178 240 Q172 262 172 282 Q182 262 202 258 Q190 268 182 290 Z"
        fill="#e8607a"
        opacity="0.85"
      />

      <rect x="152" y="288" width="16" height="30" rx="8" fill="#e8607a" opacity="0.7" />

      <path
        d="M136 292 Q120 300 115 315 Q130 305 148 308"
        fill="none" stroke="#e8607a" strokeWidth="3" strokeLinecap="round" opacity="0.7"
      />
      <path
        d="M184 292 Q200 300 205 315 Q190 305 172 308"
        fill="none" stroke="#e8607a" strokeWidth="3" strokeLinecap="round" opacity="0.7"
      />

      <ellipse cx="160" cy="292" rx="10" ry="10" fill="#e8607a" opacity="0.9" />

      <path
        d="M138 290 Q148 310 160 315 Q172 310 182 290"
        fill="none" stroke="#c8485a" strokeWidth="1.5" opacity="0.4"
      />

      {positions.map((pos, i) => (
        <g key={i}>
          {renderPetals(pos.cx, pos.cy)}
        </g>
      ))}

    </svg>
  )
}

export default function BouquetViewer({ bouquet }: { bouquet: any }) {
  const [opened, setOpened] = useState(false)
  const env = envelopeColors[bouquet.envelope_style] || envelopeColors.classic

  useEffect(() => {
    if (opened) {
      confetti({
        particleCount: 150,
        spread: 90,
        origin: { y: 0.4 },
        colors: ["#fb7185", "#fda4af", "#ffe4e6", "#fbbf24", "#86efac"],
      })
      setTimeout(() => {
        confetti({
          particleCount: 80,
          spread: 60,
          origin: { y: 0.6 },
          colors: ["#fb7185", "#fda4af", "#ffe4e6", "#fbbf24", "#86efac"],
        })
      }, 400)
    }
  }, [opened])

  if (!opened) {
    return (
      <main className="min-h-screen bg-rose-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">You have a bouquet from</p>
          <h1 className="text-3xl font-bold text-rose-500 mb-8">{bouquet.sender_name}</h1>
          <button onClick={() => setOpened(true)} className="group">
            <svg width="200" height="140" viewBox="0 0 200 140" className="mx-auto mb-6 drop-shadow-md group-hover:scale-105 transition-transform duration-300">
              <rect x="4" y="4" width="192" height="132" rx="12" fill={env.color} stroke={env.border} strokeWidth="2" />
              <polyline points="4,4 100,76 196,4" fill="none" stroke={env.border} strokeWidth="2" />
              <line x1="4" y1="136" x2="84" y2="70" stroke={env.border} strokeWidth="1.5" />
              <line x1="196" y1="136" x2="116" y2="70" stroke={env.border} strokeWidth="1.5" />
              <circle cx="100" cy="104" r="14" fill={env.seal} />
              <text x="100" y="109" textAnchor="middle" fontSize="12" fill="white">✿</text>
            </svg>
            <p className="text-rose-400 font-semibold text-lg animate-pulse">Tap to open your bouquet</p>
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-lg mx-auto">

        <p className="text-center text-gray-400 text-sm mb-1">A bouquet for</p>
        <h1 className="text-3xl font-bold text-rose-500 text-center mb-2">
          {bouquet.receiver_name}
        </h1>
<div className="flex justify-center mb-4">
          <div className="w-56 h-56">
            <BouquetSVG config={bouquet.flower_config} />
          </div>
        </div>

        {bouquet.letter && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
           <p className="text-gray-600 leading-relaxed whitespace-pre-wrap max-h-60 overflow-y-auto">
              {bouquet.letter}
            </p>
            <p className="text-right text-rose-400 font-semibold mt-4">
              — {bouquet.sender_name}
            </p>
          </div>
        )}

        <p className="text-center text-gray-400 text-sm mt-6">
          Made with Bloom
        </p>

      </div>
    </main>
  )
}