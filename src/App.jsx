import { useEffect, useMemo, useState } from 'react'
import {
  WEEKS as INDY_WEEKS, PACES as INDY_PACES, ROUTINES, DAY_NAMES,
  RACE_DATE as INDY_RACE, PLAN_START as INDY_START,
} from './data.js'
import {
  WEEKS as HOU_WEEKS, PACES as HOU_PACES, RACE_DATE as HOU_RACE,
  PLAN_START as HOU_START, KEY_DATES as HOU_KEY, BLOCK_SUB as HOU_SUB,
} from './houston.js'

const BLOCKS = {
  houston: { id: 'houston', label: 'Houston 2027', weeks: HOU_WEEKS, paces: HOU_PACES,
    start: HOU_START, race: HOU_RACE, sub: HOU_SUB, keyDates: HOU_KEY,
    title: 'Houston · sub-3 project', raceLabel: 'Houston, Sun Jan 17 2027' },
  indy: { id: 'indy', label: 'Indy 2026 (done)', weeks: INDY_WEEKS, paces: INDY_PACES,
    start: INDY_START, race: INDY_RACE, sub: '16 weeks · Indianapolis Monumental — finished 3:22:45',
    title: 'Sub-3:15 Marathon', raceLabel: 'Indianapolis, Sat Nov 7 2026' },
}

const dayDateIn = (start, wIdx, dIdx) => {
  const d = new Date(start); d.setDate(d.getDate() + wIdx * 7 + dIdx); return d
}
const fmtDate = (d) => d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
const weekRangeIn = (start, wIdx) =>
  `${fmtDate(dayDateIn(start, wIdx, 0))} – ${fmtDate(dayDateIn(start, wIdx, 6))}`
import Nutrition from './Nutrition.jsx'
import Reconcile from './Reconcile.jsx'
import RaceDay from './RaceDay.jsx'

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
  const { week, wIdx, dIdx, day, block } = sel
  const date = dayDateIn(block.start, wIdx, dIdx)
  const key = `${block.id}-${wIdx}-${dIdx}`
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
              {block.paces.filter(p => day.run.includes('IV') ? p.name.startsWith('Interval') || p.name.startsWith('Easy')
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

        {day.pm && (
          <section>
            <h3>Evening double — {day.pm.run}</h3>
            <p>{day.pm.detail}</p>
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
  const [tab, setTab] = useState('plan') // 'plan' | 'nutrition' | 'reconcile' | 'raceday'
  const [blockId, setBlockId] = useState(() => localStorage.getItem('mp-block') || 'houston')
  const block = BLOCKS[blockId] || BLOCKS.houston
  const [done, toggle] = useDone()
  const today = new Date()

  const pickBlock = (id) => { setBlockId(id); localStorage.setItem('mp-block', id) }
  const daysToRace = Math.ceil((block.race - today) / 86400000)
  const totalDays = block.weeks.length * 7
  const pct = Math.round((done.size / totalDays) * 100)

  useEffect(() => {
    const el = document.querySelector('.day.today')
    if (el) el.scrollIntoView({ block: 'center', behavior: 'smooth' })
  }, [])

  return (
    <div className="app">
      <header>
        <div>
          <h1>{block.title}</h1>
          <p className="header-sub">{block.sub}</p>
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
        <button className={tab === 'reconcile' ? 'active' : ''} onClick={() => setTab('reconcile')}>📊 Reconcile</button>
        <button className={tab === 'raceday' ? 'active' : ''} onClick={() => setTab('raceday')}>🏁 Race Day</button>
      </nav>

      {tab === 'nutrition' && <Nutrition />}
      {tab === 'reconcile' && <Reconcile />}
      {tab === 'raceday' && <RaceDay />}

      {tab === 'plan' && <>
      <nav className="block-switch">
        {Object.values(BLOCKS).map(b => (
          <button key={b.id} className={b.id === blockId ? 'on' : ''} onClick={() => pickBlock(b.id)}>{b.label}</button>
        ))}
      </nav>

      {block.keyDates && (
        <div className="key-dates">
          {block.keyDates.map(([d, n, note]) => (
            <div key={d}><strong>{d}</strong><em>{n}</em><span>{note}</span></div>
          ))}
        </div>
      )}

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
        {block.weeks.map((week, wIdx) => (
          <section key={week.n} className={`week ${week.scot ? 'scotland' : ''}`}>
            <div className="week-head">
              <h2>Week {week.n}</h2>
              <span className="week-range">{weekRangeIn(block.start, wIdx)}</span>
              <span className="week-total">{typeof week.total === 'number' ? `${week.total} mi` : week.total}</span>
              {week.label && <span className={`week-label ${week.scot ? 'scot' : ''}`}>{week.label}</span>}
            </div>
            <div className="grid">
              {week.days.map((day, dIdx) => {
                const date = dayDateIn(block.start, wIdx, dIdx)
                const key = `${blockId}-${wIdx}-${dIdx}`
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
                    onClick={() => setSel({ week, wIdx, dIdx, day, block })}
                  >
                    <span className="day-date">{DAY_NAMES[dIdx]} {fmtDate(date)}</span>
                    <span className="day-run">{day.run}</span>
                    {day.sub && <span className="day-sub">{day.sub}</span>}
                    {day.pm && <span className="day-pm">+ PM {day.pm.miles} mi shakeout</span>}
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
            {block.paces.map(p => (
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
            Friday’s Strength B was retired on Sep 12 after nine weeks at zero completions; its split squat
            and side plank now live in Monday’s session. Mondays are 9 for 9 — that is the habit that works.
          </p>
          <Routine routine={ROUTINES.A} />
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
