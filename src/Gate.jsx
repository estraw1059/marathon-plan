import { useState } from 'react'

// SHA-256 hash of the password.
// To change it, run this in your browser console and paste the result here:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('yourNewPassword'))
//     .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('')))
const PASS_HASH = '937efdc56ab2d0e6d99e5186c6ade8e4b7bf2cb4885726f37d88c010bcacadee'

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('')
}

// Defaults preserve the original behaviour; other pages pass their own key/title so unlocks don't collide.
export default function Gate({ children, storageKey = 'mp-unlocked', title = '🏃 Sub-3:15' }) {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(storageKey) === PASS_HASH)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  const submit = async (e) => {
    e.preventDefault()
    if ((await sha256(input)) === PASS_HASH) {
      localStorage.setItem(storageKey, PASS_HASH)
      setUnlocked(true)
    } else {
      setError(true)
      setInput('')
    }
  }

  return (
    <div className="gate">
      <form onSubmit={submit} className="gate-card">
        <h1>{title}</h1>
        <p>Enter password</p>
        <input
          type="password"
          value={input}
          autoFocus
          onChange={e => { setInput(e.target.value); setError(false) }}
        />
        {error && <p className="gate-error">Nope — try again</p>}
        <button type="submit">Unlock</button>
      </form>
    </div>
  )
}
