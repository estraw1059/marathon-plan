import { useState } from 'react'

// SHA-256 hash of Eric's password, hashed AFTER normalizing (see normalizeDefault below):
// trimmed, internal whitespace collapsed, lowercased. So the stored hash is of the
// lowercase form, and typing it with any capitalisation or stray spaces still works.
// To change it, normalize your new password the same way, then run in the browser console:
//   crypto.subtle.digest('SHA-256', new TextEncoder().encode('your new password'))
//     .then(b => console.log([...new Uint8Array(b)].map(x => x.toString(16).padStart(2, '0')).join('')))
// NOTE: changing this invalidates existing unlocks, since localStorage stores the hash.
const PASS_HASH = 'cc804c51dbf373e5af8724407169182f506190a5669dcf91fee4c3dfb44581ba'

// Forgiving by design: this gate is obfuscation, not security, and a password with a
// space in it is fiddly to type on a phone. Rachel's page passes its own normalizer.
const normalizeDefault = (s) => s.trim().replace(/\s+/g, ' ').toLowerCase()

async function sha256(text) {
  const buf = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(text))
  return [...new Uint8Array(buf)].map(x => x.toString(16).padStart(2, '0')).join('')
}

// Defaults are ERIC'S page only. Rachel's page (rachel-main.jsx) passes its own storageKey,
// title, passHash and normalize, so the two pages never share a password or an unlock.
export default function Gate({
  children, storageKey = 'mp-unlocked', title = '🏃 Sub-3:15',
  passHash = PASS_HASH, normalize = normalizeDefault,
}) {
  const [unlocked, setUnlocked] = useState(() => localStorage.getItem(storageKey) === passHash)
  const [input, setInput] = useState('')
  const [error, setError] = useState(false)

  if (unlocked) return children

  const submit = async (e) => {
    e.preventDefault()
    if ((await sha256(normalize(input))) === passHash) {
      localStorage.setItem(storageKey, passHash)
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
