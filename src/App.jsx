import { useEffect, useMemo, useState } from 'react'
import {
  WEEKS, PACES, ROUTINES, DAY_NAMES, RACE_DATE,
  dayDate, fmtDate, weekRange,
} from './data.js'
import Nutrition from './Nutrition.jsx'

const TYPE_CLASS = { rest: 'rest', easy: 'easy', quality: 'quality', long: 'long', race: 'race' }
const TYPE_LABEL = { rest: 'Rest', easy: 'Easy', quality: 'Quality', long: 'Long run', race: 'RACE' }

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function useDone() {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem('mp-done') || '[]')) }
    catch { return new Set() }
  })
  const toggle = (key) => setDone(prev => {
    const next = new Set(prev)
    next.has(key) ? next.delete(key) : next.add(key)
    localStorage.setItem('mp-done', JSON.stringify([...next]))
    return next
  })
  return [done, toggle]
}

function Routine({ routine }) {
  return (
    <div className="routine">
      <h4>{routine.title}</h4>
      {routine.note && <p className="routine-note">{routine.note}</p>}
      <ul>
        {routine.exercises.map(ex => (
          <li key={ex.name}>
            <div className="ex-head"><strong>{ex.name}</strong><span className="dose">{ex.dose}</span></div>
            {ex.how && <p className="ex-how">{ex.how}</p>}
            {ex.cue && <p className="ex-cue">{ex.cue}</p>}
          </li>
        ))}
      </ul>
    </div>
  )
}

function DayModal({ sel, done, toggle, onClose }) {
  const { week, wIdx, dIdx, day } = sel
  const date = dayDate(wIdx, dIdx)
  const key = `${wIdx}-${dIdx}`
  const strengthKey = day.strength ? day.strength.replace('-light', '') : null
  const routine = strengthKey ? ROUTINES[strengthKey] : null

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <p className="modal-date">
          {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          {' · '}Week {week.n}{week.label ? ` · ${week.label}` : ''}
        </p>
        <h2 className={`modal-title ${TYPE_CLASS[day.type]}`}>{day.run}</h2>
        {day.sub && <p className="modal-sub">{day.sub}</p>}
        <span className={`tag ${TYPE_CLASS[day.type]}`}>{TYPE_LABEL[day.type]}</span>

        <section>
          <h3>The workout</h3>
          <p>{day.detail}</p>
        </section>

        {day.type === 'quality' && (
          <section>
            <h3>Relevant paces</h3>
            <ul className="pace-mini">
              {PACES.filter(p => day.run.includes('IV') ? p.name.startsWith('Interval') || p.name.startsWith('Easy')
                : day.run.toLowerCase().includes('tempo') ? p.name === 'Tempo' || p.name.startsWith('Easy')
                : day.run.includes('MP') ? p.name.includes('Marathon') || p.name.startsWith('Easy')
                : p.name === 'Strides' || p.name.startsWith('Easy'))
                .map(p => <li key={p.name}><strong>{p.name}:</strong> {p.pace}</li>)}
            </ul>
          </section>
        )}

        {routine && (
          <section>
            <h3>Strength{day.strength.endsWith('-light') ? ' (light — final session, 2 sets max)' : ''}</h3>
            <Routine routine={routine} />
          </section>
        )}

        {day.core && (
          <section>
            <h3>Core</h3>
            <Routine routine={ROUTINES.CORE} />
          </section>
        )}

        {day.yoga && (
          <section>
            <h3>Yoga — {day.yoga.min} min</h3>
            <p>{day.yoga.kind}</p>
          </section>
        )}

        <button className={`done-btn ${done.has(key) ? 'is-done' : ''}`} onClick={() => toggle(key)}>
          {done.has(key) ? '✓ Completed — tap to undo' : 'Mark completed'}
        </button>
      </div>
    </div>
  )
}

function InfoModal({ title, children, onClose }) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <h2 className="modal-title">{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default function App() {
  const [sel, setSel] = useState(null)
  const [info, setInfo] = useState(null) // 'paces' | 'strength'
  const [tab, setTab] = useState('plan') // 'plan' | 'nutrition'
  const [done, toggle] = useDone()
  const today = new Date()

  const daysToRace = Math.ceil((RACE_DATE - today) / 86400000)
  const totalDays = WEEKS.length * 7
  const pct = Math.round((done.size / totalDays) * 100)

  useEffect(() => {
    const el = document.querySelector('.day.today')
    if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <header>
        <div>
          <h1>Sub-3:15 Marathon</h1>
          <p className="header-sub">16 weeks · Race day Sat Nov 7, 2026 · Goal pace 7:25/mi</p>
        </div>
        <div className="header-right">
          <div className="countdown">
            {daysToRace > 0 ? <><strong>{daysToRace}</strong> days to race</>
              : daysToRace === 0 ? <strong>RACE DAY 🏁</strong>
              : <strong>Race complete 🎉</strong>}
          </div>
          <div className="progress-wrap" title={`${done.size}/${totalDays} days completed`}>
            <div className="progress-bar" style={{ width: `${pct}%` }} />
            <span className="progress-label">{pct}%</span>
          </div>
        </div>
      </header>

      <nav className="tabs">
        <button className={tab === 'plan' ? 'active' : ''} onClick={() => setTab('plan')}>📅 Training Plan</button>
        <button className={tab === 'nutrition' ? 'active' : ''} onClick={() => setTab('nutrition')}>🍝 Nutrition</button>
      </nav>

      {tab === 'nutrition' && <Nutrition />}

      {tab === 'plan' && <>
      <nav className="toolbar">
        <button onClick={() => setInfo('paces')}>Training paces</button>
        <button onClick={() => setInfo('strength')}>Strength guide</button>
        <div className="legend">
          <span className="chip quality">Quality</span>
          <span className="chip long">Long</span>
          <span className="chip easy">Easy</span>
          <span className="chip rest">Rest</span>
          <span className="chip scot">Scotland</span>
          <span className="chip race">Race</span>
        </div>
      </nav>

      <main>
        {WEEKS.map((week, wIdx) => (
          <section key={week.n} className={`week ${week.scot ? 'scotland' : ''}`}>
            <div className="week-head">
              <h2>Week {week.n}</h2>
              <span className="week-range">{weekRange(wIdx)}</span>
              <span className="week-total">{typeof week.total === 'number' ? `${week.total} mi` : week.total}</span>
              {week.label && <span className={`week-label ${week.scot ? 'scot' : ''}`}>{week.label}</span>}
            </div>
            <div className="grid">
              {week.days.map((day, dIdx) => {
                const date = dayDate(wIdx, dIdx)
                const key = `${wIdx}-${dIdx}`
                const isToday = isSameDay(date, today)
                return (
                  <button
                    key={dIdx}
                    className={[
                      'day', TYPE_CLASS[day.type],
                      week.scot ? 'in-scot' : '',
                      isToday ? 'today' : '',
                      done.has(key) ? 'done' : '',
                    ].join(' ')}
                    onClick={() => setSel({ week, wIdx, dIdx, day })}
                  >
                    <span className="day-date">{DAY_NAMES[dIdx]} {fmtDate(date)}</span>
                    <span className="day-run">{day.run}</span>
                    {day.sub && <span className="day-sub">{day.sub}</span>}
                    <span className="day-extras">
                      {day.strength && <em>💪 {day.strength.replace('-light', ' (light)')}</em>}
                      {day.core && <em>🧱 Core</em>}
                      {day.yoga && <em>🧘 {day.yoga.min}′</em>}
                    </span>
                    {done.has(key) && <span className="check">✓</span>}
                  </button>
                )
              })}
            </div>
          </section>
        ))}
      </main>
      </>}

      {sel && <DayModal sel={sel} done={done} toggle={toggle} onClose={() => setSel(null)} />}

      {info === 'paces' && (
        <InfoModal title="Training paces" onClose={() => setInfo(null)}>
          <p className="routine-note">Re-test fitness around Week 11 (post-Scotland) and tighten these as VO2max climbs from 54 back toward 56+.</p>
          <ul className="pace-list">
            {PACES.map(p => (
              <li key={p.name}>
                <div className="ex-head"><strong>{p.name}</strong><span className="dose">{p.pace}</span></div>
                {p.note && <p className="ex-how">{p.note}</p>}
              </li>
            ))}
          </ul>
        </InfoModal>
      )}

      {info === 'strength' && (
        <InfoModal title="Strength guide" onClose={() => setInfo(null)}>
          <p className="routine-note">
            Equipment: adjustable dumbbells (10–50 lb), mat, sturdy bench/chair/step, timer.
            Strength always after runs or on rest days — never before quality workouts.
          </p>
          <Routine routine={ROUTINES.A} />
          <Routine routine={ROUTINES.B} />
          <Routine routine={ROUTINES.CORE} />
          <Routine routine={ROUTINES.BW} />
        </InfoModal>
      )}

      <footer>
        Rules: easy days easy · never skip the long run · sick or beat up? drop a quality day instead.
      </footer>
    </div>
  )
}
