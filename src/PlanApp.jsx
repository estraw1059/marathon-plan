import { useEffect, useState } from 'react'

// Generic, plan-driven version of App.jsx. Takes a plan module (see src/plans/rachel.js) as a prop.
// Eric's App.jsx is deliberately untouched until after his race; this is the shell both plans can share later.

function isSameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate()
}

function useDone(storageKey) {
  const [done, setDone] = useState(() => {
    try { return new Set(JSON.parse(localStorage.getItem(storageKey) || '[]')) }
    catch { return new Set() }
  })
  const toggle = (key) => setDone(prev => {
    const next = new Set(prev)
    next.has(key) ? next.delete(key) : next.add(key)
    try { localStorage.setItem(storageKey, JSON.stringify([...next])) } catch { /* storage unavailable */ }
    return next
  })
  return [done, toggle]
}

function useEscape(onClose) {
  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])
}

function DayModal({ plan, sel, done, toggle, onClose }) {
  const { PRIORITY, TYPE_LABEL, dayDate } = plan
  const { week, wIdx, dIdx, day } = sel
  const date = dayDate(wIdx, dIdx)
  const key = `${wIdx}-${dIdx}`
  const pri = PRIORITY[day.priority]
  useEscape(onClose)

  return (
    <div className="overlay" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <button className="close" onClick={onClose} aria-label="Close">×</button>
        <p className="modal-date">
          {date.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}
          {' · '}Week {week.n}{week.label ? ` · ${week.label}` : ''}
        </p>
        <h2 className={`modal-title ${day.type}`}>{day.run}</h2>
        {day.sub && <p className="modal-sub">{day.sub}</p>}
        <span className={`tag ${day.type}`}>{TYPE_LABEL[day.type]}</span>

        {pri && (
          <div className={`pri-banner ${day.priority}`}>
            <strong>{pri.label}</strong>
            <span>{pri.blurb}</span>
          </div>
        )}

        <section>
          <h3>The workout</h3>
          <p>{day.detail}</p>
        </section>

        {day.bike && (
          <section>
            <h3>Peloton — {day.bike.min} min</h3>
            <p>{day.bike.kind}</p>
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
  useEscape(onClose)
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

export default function PlanApp({ plan }) {
  const {
    PLAN_NAME, GOAL_LINE, RACE_DATE, WEEKS, PACES, PRIORITY, TYPE_LABEL, RULES, HOW_IT_WORKS,
    STORAGE, DAY_NAMES, dayDate, fmtDate, weekRange,
  } = plan
  const [sel, setSel] = useState(null)
  const [info, setInfo] = useState(null) // 'paces' | 'how'
  const [done, toggle] = useDone(STORAGE.done)
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
          <h1>{PLAN_NAME}</h1>
          <p className="header-sub">{GOAL_LINE}</p>
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

      <nav className="toolbar">
        <button onClick={() => setInfo('paces')}>Paces &amp; effort</button>
        <button onClick={() => setInfo('how')}>How it works</button>
        <div className="legend">
          <span className="legend-label">Day type</span>
          <span className="chip easy">{TYPE_LABEL.easy}</span>
          <span className="chip long">{TYPE_LABEL.long}</span>
          <span className="chip quality">{TYPE_LABEL.quality}</span>
          <span className="chip bike">{TYPE_LABEL.bike}</span>
          <span className="chip rest">{TYPE_LABEL.rest}</span>
          <span className="chip race">{TYPE_LABEL.race}</span>
        </div>
        <div className="legend legend-pri">
          <span className="legend-label">Priority</span>
          {Object.entries(PRIORITY).map(([k, p]) => (
            <span key={k} className={`chip p-${k}`} title={p.blurb}>{p.label}</span>
          ))}
        </div>
      </nav>

      <main>
        {WEEKS.map((week, wIdx) => {
          const keys = week.days
            .map((d, i) => [d, i])
            .filter(([d]) => d.priority === 'key')
          const soft = /EASY|TAPER/.test(week.label || '')
          return (
            <section key={wIdx} className={`week ${soft ? 'scotland' : ''}`}>
              <div className="week-head">
                <h2>Week {week.n}</h2>
                <span className="week-range">{weekRange(wIdx)}</span>
                <span className="week-total">{`~${week.total} mi`}</span>
                {week.label && <span className={`week-label ${soft ? 'scot' : ''}`}>{week.label}</span>}
                {keys.length > 0 && (
                  <span className="week-key">
                    ★ Key: {keys.map(([d, i]) => `${DAY_NAMES[i]} ${d.run}`).join(' · ')}
                  </span>
                )}
              </div>
              {week.note && <p className="week-note">{week.note}</p>}
              <div className="grid">
                {week.days.map((day, dIdx) => {
                  const date = dayDate(wIdx, dIdx)
                  const key = `${wIdx}-${dIdx}`
                  const isToday = isSameDay(date, today)
                  const pri = PRIORITY[day.priority]
                  return (
                    <button
                      key={dIdx}
                      className={[
                        'day', day.type, `pri-${day.priority}`,
                        isToday ? 'today' : '',
                        done.has(key) ? 'done' : '',
                      ].join(' ')}
                      onClick={() => setSel({ week, wIdx, dIdx, day })}
                    >
                      <span className="day-date">{DAY_NAMES[dIdx]} {fmtDate(date)}</span>
                      <span className="day-run">{day.run}</span>
                      {day.sub && <span className="day-sub">{day.sub}</span>}
                      <span className="day-extras">
                        {pri && <b className={`pri-tag ${day.priority}`}>{pri.short}</b>}
                        {day.bike && <em>🚴 {day.bike.min}′</em>}
                        {day.yoga && <em>🧘 {day.yoga.min}′</em>}
                      </span>
                      {done.has(key) && <span className="check">✓</span>}
                    </button>
                  )
                })}
              </div>
            </section>
          )
        })}
      </main>

      {sel && <DayModal plan={plan} sel={sel} done={done} toggle={toggle} onClose={() => setSel(null)} />}

      {info === 'paces' && (
        <InfoModal title="Paces & effort" onClose={() => setInfo(null)}>
          <p className="routine-note">Distances in this plan are estimates built from time on your feet. Go by the clock and the talk test, not the watch.</p>
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

      {info === 'how' && (
        <InfoModal title="How it works" onClose={() => setInfo(null)}>
          <ul className="pace-list">
            {HOW_IT_WORKS.map(h => (
              <li key={h.title}>
                <strong>{h.title}</strong>
                <p className="ex-how">{h.body}</p>
              </li>
            ))}
          </ul>
          <ul className="pace-list pri-key-list">
            {Object.entries(PRIORITY).map(([k, p]) => (
              <li key={k}>
                <span className={`pri-tag ${k}`}>{p.short}</span>
                <p className="ex-how">{p.blurb}</p>
              </li>
            ))}
          </ul>
        </InfoModal>
      )}

      <footer>{RULES}</footer>
    </div>
  )
}
