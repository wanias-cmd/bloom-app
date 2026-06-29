"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="min-h-screen bg-rose-50 overflow-x-hidden">

      {mounted && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute text-4xl opacity-50" style={{ left: "5%", top: "10%", animation: "float 5s ease-in-out infinite" }}>
            🌸
          </div>
          <div className="absolute text-3xl opacity-40" style={{ left: "88%", top: "15%", animation: "float 6s ease-in-out infinite 0.5s" }}>
            🌺
          </div>
          <div className="absolute text-5xl opacity-30" style={{ left: "12%", top: "65%", animation: "float 7s ease-in-out infinite 1s" }}>
            🌼
          </div>
          <div className="absolute text-3xl opacity-40" style={{ left: "82%", top: "60%", animation: "float 5.5s ease-in-out infinite 1.5s" }}>
            🌷
          </div>
        </div>
      )}

      <section className="flex flex-col items-center justify-center min-h-screen px-6 text-center">
        <span className="bg-rose-100 text-rose-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-wide mb-6">
          Send love, digitally
        </span>
        <h1 className="text-7xl sm:text-8xl font-bold text-rose-400 mb-4 tracking-tight">
          Bloom
        </h1>
        <p className="text-lg sm:text-xl text-rose-300 font-medium mb-3">
          Virtual flowers for real feelings
        </p>
        <p className="text-gray-400 max-w-sm mb-10 text-sm sm:text-base leading-relaxed">
          Create a beautiful bouquet, write a heartfelt letter, and share a link with someone you love.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs sm:max-w-none sm:w-auto">
          <Link
            href="/create"
            className="bg-rose-400 text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-200 text-center"
          >
            Create a Bouquet
          </Link>
          <Link
            href="#how-it-works"
            className="border-2 border-rose-300 text-rose-400 px-8 py-4 rounded-full text-base font-semibold hover:bg-rose-100 transition-colors text-center"
          >
            How it works
          </Link>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-rose-400 mb-3">
              How it works
            </h2>
            <p className="text-gray-400 text-sm sm:text-base">
              Four easy steps to make someones day
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-rose-50 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center shrink-0 text-rose-500 font-bold">
                1
              </div>
              <div>
                <h3 className="font-bold text-gray-700 text-base mb-1">Pick your flowers</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Choose from roses, daisies, tulips, sunflowers and more. Customize every color.
                </p>
              </div>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center shrink-0 text-rose-500 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-gray-700 text-base mb-1">Choose an envelope</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Classic, romantic, elegant or nature. Pick the style that fits your vibe.
                </p>
              </div>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center shrink-0 text-rose-500 font-bold">
                3
              </div>
              <div>
                <h3 className="font-bold text-gray-700 text-base mb-1">Write your letter</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Say what is in your heart. A little note or a long letter, it is up to you.
                </p>
              </div>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6 flex gap-4 items-start">
              <div className="w-10 h-10 bg-rose-200 rounded-full flex items-center justify-center shrink-0 text-rose-500 font-bold">
                4
              </div>
              <div>
                <h3 className="font-bold text-gray-700 text-base mb-1">Share the link</h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Send it over WhatsApp or Instagram. They tap to unbox their bouquet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-rose-50 text-center">
        <div className="max-w-lg mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-rose-400 mb-4">
            Someone deserves flowers today
          </h2>
          <p className="text-gray-400 mb-10 text-sm sm:text-base leading-relaxed">
            It takes two minutes. It might make their whole day.
          </p>
          <Link
            href="/create"
            className="bg-rose-400 text-white px-10 py-4 rounded-full text-base font-semibold hover:bg-rose-500 transition-colors shadow-lg shadow-rose-200 inline-block w-full sm:w-auto"
          >
            Make a Bouquet Now
          </Link>
        </div>
      </section>

      <footer className="py-8 text-center text-gray-300 text-sm bg-white">
        Made with love by Bloom
      </footer>

    </div>
  )
}