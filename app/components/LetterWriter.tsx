"use client"

const MAX_CHARS = 500

type Props = {
  letter: string
  onChange: (letter: string) => void
}

export default function LetterWriter({ letter, onChange }: Props) {
  const remaining = MAX_CHARS - letter.length
  const isNearLimit = remaining <= 50
  const isAtLimit = remaining <= 0

  return (
    <div>
      <h2 className="text-xl font-semibold text-rose-500 mb-4">Write your letter</h2>
      <div className={`bg-amber-50 rounded-xl p-4 border transition-colors ${isAtLimit ? "border-red-300" : isNearLimit ? "border-amber-400" : "border-amber-200"}`}>
        <textarea
          value={letter}
          onChange={e => {
            if (e.target.value.length <= MAX_CHARS) {
              onChange(e.target.value)
            }
          }}
          placeholder="Dear someone special..."
          rows={8}
          className="w-full bg-transparent resize-none outline-none text-gray-700 text-base leading-relaxed placeholder-amber-300"
        />
      </div>
      <div className="flex justify-between items-center mt-2">
        <p className={`text-xs ${isAtLimit ? "text-red-400 font-semibold" : isNearLimit ? "text-amber-500" : "text-gray-400"}`}>
          {isAtLimit ? "Character limit reached" : isNearLimit ? `Only ${remaining} characters left` : ""}
        </p>
        <p className={`text-xs font-medium ${isAtLimit ? "text-red-400" : isNearLimit ? "text-amber-500" : "text-gray-400"}`}>
          {letter.length} / {MAX_CHARS}
        </p>
      </div>
    </div>
  )
}