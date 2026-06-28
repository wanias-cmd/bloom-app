"use client"

import { useState } from "react"
import { supabase } from "../lib/supabase"
import FlowerBuilder from "../components/FlowerBuilder"
import EnvelopePicker from "../components/EnvelopePicker"
import LetterWriter from "../components/LetterWriter"

export default function CreatePage() {
  const [step, setStep] = useState(1)
  const [flowerConfig, setFlowerConfig] = useState({
    petalColor: "#ff9ebc",
    centerColor: "#ffe066",
    stemColor: "#6dbf67",
    flowerType: "rose",
    flowerCount: 3,
  })
  const [envelopeStyle, setEnvelopeStyle] = useState("classic")
  const [letter, setLetter] = useState("")
  const [senderName, setSenderName] = useState("")
  const [receiverName, setReceiverName] = useState("")
  const [loading, setLoading] = useState(false)
  const [shareLink, setShareLink] = useState("")

 const handleSend = async () => {
    console.log("Supabase URL:", process.env.NEXT_PUBLIC_SUPABASE_URL)
    if (!senderName || !receiverName) {
      alert("Please fill in both names before sending!")
      return
    }
    setLoading(true)
    const { data, error } = await supabase
      .from("bouquets")
      .insert({
        sender_name: senderName,
        receiver_name: receiverName,
        letter: letter,
        flower_config: flowerConfig,
        envelope_style: envelopeStyle,
      })
      .select()
      .single()

 if (error) {
      alert("Something went wrong. Please try again.")
      console.error(error)
      setLoading(false)
      return
    }

    const link = `${window.location.origin}/bouquet/${data.id}`
    setShareLink(link)
    setLoading(false)
  }

  if (shareLink) {
    return (
      <main className="min-h-screen bg-rose-50 flex items-center justify-center px-4">
        <div className="bg-white rounded-2xl shadow-sm p-8 max-w-md w-full text-center">
          <div className="text-5xl mb-4">🌸</div>
          <h2 className="text-2xl font-bold text-rose-500 mb-2">Your bouquet is ready!</h2>
          <p className="text-gray-500 mb-6">Share this link with {receiverName}</p>
          <div className="bg-rose-50 border border-rose-200 rounded-xl p-4 mb-4 break-all text-sm text-rose-600 font-mono">
            {shareLink}
          </div>
          <button
            onClick={() => {
              navigator.clipboard.writeText(shareLink)
              alert("Link copied to clipboard!")
            }}
            className="w-full bg-rose-400 text-white py-3 rounded-full font-semibold hover:bg-rose-500 mb-3"
          >
            Copy Link
          </button>
          <button
            onClick={() => {
              setShareLink("")
              setStep(1)
              setSenderName("")
              setReceiverName("")
              setLetter("")
            }}
            className="w-full border border-rose-300 text-rose-400 py-3 rounded-full font-semibold hover:bg-rose-50"
          >
            Create Another
          </button>
        </div>
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-rose-50 py-10 px-4">
      <div className="max-w-2xl mx-auto">

        <h1 className="text-3xl font-bold text-rose-500 text-center mb-2">
          Create Your Bouquet
        </h1>

        <div className="flex justify-center gap-2 mb-8">
          {["Flowers", "Envelope", "Letter"].map((label, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${step === i + 1 ? "bg-rose-400 text-white" : step > i + 1 ? "bg-rose-200 text-rose-600" : "bg-gray-200 text-gray-400"}`}>
                {i + 1}
              </div>
              <span className={`text-sm ${step === i + 1 ? "text-rose-500 font-semibold" : "text-gray-400"}`}>
                {label}
              </span>
              {i < 2 && <div className="w-8 h-px bg-gray-300" />}
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6">
          {step === 1 && (
            <FlowerBuilder config={flowerConfig} onChange={setFlowerConfig} />
          )}
          {step === 2 && (
            <EnvelopePicker selected={envelopeStyle} onChange={setEnvelopeStyle} />
          )}
          {step === 3 && (
            <div className="space-y-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Your name</label>
                  <input
                    type="text"
                    value={senderName}
                    onChange={e => setSenderName(e.target.value)}
                    placeholder="From..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2 text-gray-700 outline-none focus:border-rose-300"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-600 mb-1">Their name</label>
                  <input
                    type="text"
                    value={receiverName}
                    onChange={e => setReceiverName(e.target.value)}
                    placeholder="To..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-2 text-gray-700 outline-none focus:border-rose-300"
                  />
                </div>
              </div>
              <LetterWriter letter={letter} onChange={setLetter} />
            </div>
          )}
        </div>

        <div className="flex justify-between mt-6">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="px-6 py-3 rounded-full border border-rose-300 text-rose-400 font-semibold hover:bg-rose-50">
              Back
            </button>
          ) : (
            <div />
          )}
          {step < 3 ? (
            <button onClick={() => setStep(step + 1)} className="px-6 py-3 rounded-full bg-rose-400 text-white font-semibold hover:bg-rose-500">
              Next
            </button>
          ) : (
            <button
              onClick={handleSend}
              disabled={loading}
              className="px-6 py-3 rounded-full bg-rose-400 text-white font-semibold hover:bg-rose-500 disabled:opacity-50"
            >
              {loading ? "Saving..." : "Send Bouquet"}
            </button>
          )}
        </div>

      </div>
    </main>
  )
}