"use client"

import { useState, useEffect } from "react"
import confetti from "canvas-confetti"

const envelopeColors: Record<string, { color: string, border: string, seal: string }> = {
  classic:  { color: "#fff9f0", border: "#f4c08a", seal: "#e8a055" },
  romantic: { color: "#fff0f5", border: "#f4a0b8", seal: "#e8607a" },
  elegant:  { color: "#f0f4ff", border: "#a0b4f4", seal: "#6080e8" },
  nature:   { color: "#f0fff4", border: "#90d4a0", seal: "#50a870" },
}

function Flower({ config }: { config: any }) {
  const { petalColor, centerColor, stemColor, flowerType } = config

  const renderPetals = () => {
    switch (flowerType) {
      case "rose":
        return (
          <>
            {[0,45,90,135,180,225,270,315].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="8" ry="16" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -14)`} />
            ))}
            <circle cx="40" cy="40" r="10" fill={petalColor} />
            <circle cx="40" cy="40" r="6" fill={centerColor} />
          </>
        )
      case "daisy":
        return (
          <>
            {[0,30,60,90,120,150,180,210,240,270,300,330].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="4" ry="14" fill={petalColor} opacity="0.9"
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
            {[0,22.5,45,67.5,90,112.5,135,157.5,180,202.5,225,247.5,270,292.5,315,337.5].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="5" ry="14" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -18)`} />
            ))}
            <circle cx="40" cy="40" r="13" fill={centerColor} />
            <circle cx="40" cy="40" r="9" fill="#8B4513" opacity="0.4" />
          </>
        )
      case "lily":
        return (
          <>
            {[0,60,120,180,240,300].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="6" ry="20" fill={petalColor} opacity="0.85"
                transform={`rotate(${angle} 40 40) translate(0 -18)`} />
            ))}
            {[30,90,150,210,270,330].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="4" ry="14" fill={petalColor} opacity="0.5"
                transform={`rotate(${angle} 40 40) translate(0 -14)`} />
            ))}
            <circle cx="40" cy="40" r="7" fill={centerColor} />
          </>
        )
      case "cherry blossom":
        return (
          <>
            {[0,72,144,216,288].map((angle, i) => (
              <g key={i} transform={`rotate(${angle} 40 40)`}>
                <ellipse cx="40" cy="24" rx="8" ry="10" fill={petalColor} opacity="0.9" />
                <line x1="40" y1="32" x2="40" y2="40" stroke={petalColor} strokeWidth="1" opacity="0.4" />
              </g>
            ))}
            <circle cx="40" cy="40" r="7" fill={centerColor} />
          </>
        )
      case "lavender":
        return (
          <>
            {[-12,-6,0,6,12].map((x, row) =>
              [-8,-2,4,10,16,22].map((y, col) => (
                <ellipse key={`${row}-${col}`} cx={40+x} cy={20+y} rx="4" ry="5"
                  fill={petalColor} opacity={0.6 + col * 0.05} />
              ))
            )}
            <rect x="38" y="44" width="4" height="16" rx="2" fill={stemColor} />
          </>
        )
      default:
        return (
          <>
            {[0,60,120,180,240,300].map((angle, i) => (
              <ellipse key={i} cx="40" cy="40" rx="9" ry="14" fill={petalColor} opacity="0.9"
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

export default function BouquetViewer({ bouquet }: { bouquet: any }) {
  const [opened, setOpened] = useState(false)
  const env = envelopeColors[bouquet.envelope_style] || envelopeColors.classic

  useEffect(() => {
    if (opened) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.5 },
        colors: ["#fb7185", "#fda4af", "#ffe4e6", "#fbbf24", "#86efac"],
      })
    }
  }, [opened])

  if (!opened) {
    return (
      <main className="min-h-screen bg-rose-50 flex items-center justify-center px-4">
        <div className="text-center">
          <p className="text-gray-400 text-sm mb-1">You have a bouquet from</p>
          <h1 className="text-3xl font-bold text-rose-500 mb-8">{bouquet.sender_name}</h1>

          <button onClick={() => setOpened(true)} className="group">
            <svg width="200" height="140" viewBox="0 0 200 140" className="mx-auto mb-6 drop-shadow-md group-hover:scale-105 transition-transform">
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
        <h1 className="text-3xl font-bold text-rose-500 text-center mb-6">
          {bouquet.receiver_name}
        </h1>

        <div className="flex justify-center flex-wrap gap-1 mb-6">
          {Array.from({ length: bouquet.flower_config.flowerCount }).map((_: unknown, i: number) => (
            <Flower key={i} config={bouquet.flower_config} />
          ))}
        </div>

        {bouquet.letter && (
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6 mb-4">
            <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">
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