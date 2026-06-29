"use client"

import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-rose-50">
      <div className="flex flex-col items-center justify-center min-h-screen px-4 text-center">
        <h1 className="text-6xl font-bold text-rose-400 mb-4">
          Bloom
        </h1>
        <p className="text-rose-300 mb-4">
          Virtual flowers for real feelings
        </p>
        <p className="text-gray-400 max-w-md mb-10">
          Create a beautiful bouquet, write a heartfelt letter, and share a link with someone you love.
        </p>
        <Link
          href="/create"
          className="bg-rose-400 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-rose-500"
        >
          Create a Bouquet
        </Link>
      </div>
      <div className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-rose-400 mb-3">How it works</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-700 text-lg mb-1">Pick your flowers</h3>
              <p className="text-gray-400 text-sm">Choose from roses, daisies, tulips and more.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-700 text-lg mb-1">Choose an envelope</h3>
              <p className="text-gray-400 text-sm">Classic, romantic, elegant or nature.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-700 text-lg mb-1">Write your letter</h3>
              <p className="text-gray-400 text-sm">Say what is in your heart.</p>
            </div>
            <div className="bg-rose-50 rounded-2xl p-6">
              <h3 className="font-bold text-gray-700 text-lg mb-1">Share the link</h3>
              <p className="text-gray-400 text-sm">Send it anywhere. They tap to unbox it.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 px-4 bg-rose-50 text-center">
        <h2 className="text-4xl font-bold text-rose-400 mb-4">
          Someone deserves flowers today
        </h2>
        <p className="text-gray-400 mb-10 text-lg">
          It takes two minutes. It might make their whole day.
        </p>
        <Link
          href="/create"
          className="bg-rose-400 text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-rose-500 inline-block"
        >
          Make a Bouquet Now
        </Link>
      </div>
      <div className="py-8 text-center text-gray-300 text-sm bg-white">
        Made with love by Bloom
      </div>
    </div>
  )
}