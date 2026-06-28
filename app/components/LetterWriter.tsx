"use client"

type Props = {
  letter: string
  onChange: (letter: string) => void
}

export default function LetterWriter({ letter, onChange }: Props) {
  return (
    <div>
      <h2 className="text-xl font-semibold text-rose-500 mb-4">Write your letter</h2>
      <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
        <textarea
          value={letter}
          onChange={e => onChange(e.target.value)}
          placeholder="Dear someone special..."
          rows={8}
          className="w-full bg-transparent resize-none outline-none text-gray-700 text-base leading-relaxed placeholder-amber-300"
        />
      </div>
      <p className="text-xs text-gray-400 mt-2 text-right">{letter.length} characters</p>
    </div>
  )
}