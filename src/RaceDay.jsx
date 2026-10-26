import { RACE, CONFIDENCE, TARGETS, THE_PLAN, FUELING, CHECKLIST, MANTRAS } from './raceday.js'

export default function RaceDay() {
  const days = Math.ceil((new Date(2026, 10, 7) - new Date()) / 86400000)
  return (
    <div className="raceday">
      <div className="rd-hero">
        <div>
          <h2>{RACE.name}</h2>
          <p>{RACE.date}</p>
          <p className="rd-plan">{RACE.plan}</p>
        </div>
        <div className="rd-count">
          {days > 0 ? <><strong>{days}</strong><span>days to go</span></>
            : days === 0 ? <strong>TODAY 🏁</strong> : <strong>Done 🎉</strong>}
        </div>
      </div>

      <section>
        <h2 className="nut-h2">{CONFIDENCE.title}</h2>
        <div className="conf-card">
          <p className="conf-lead">{CONFIDENCE.lead}</p>
          <ul>
            {CONFIDENCE.points.map(([t, b]) => (
              <li key={t}><strong>{t}</strong><p>{b}</p></li>
            ))}
          </ul>
          <p className="conf-close">{CONFIDENCE.closing}</p>
        </div>
      </section>

      <section>
        <h2 className="nut-h2">{THE_PLAN.title}</h2>
        <p className="recon-note rd-why">{THE_PLAN.why}</p>
        <div className="sb-wrap">
          {THE_PLAN.segments.map(([seg, pace, note]) => (
            <div className={`rd-seg ${seg === 'MILE 16' ? 'rd-decide' : ''}`} key={seg}>
              <span className="rd-seg-name">{seg}</span>
              <span className="rd-seg-pace">{pace}</span>
              <span>{note}</span>
            </div>
          ))}
        </div>
        <div className="rd-math">
          <h4>What each finish looks like from a 7:30 start</h4>
          {THE_PLAN.math.map(([a, b]) => (
            <div className="rd-math-row" key={a}><span>{a}</span><em>{b}</em></div>
          ))}
        </div>
        <div className="rd-tradeoff">
          <div><strong>Why not just start at 3:20 pace?</strong><p>{THE_PLAN.whyNot320}</p></div>
          <div><strong>Why not go straight for 3:15?</strong><p>{THE_PLAN.whyNot315}</p></div>
        </div>
      </section>

      <section>
        <h2 className="nut-h2">Split table</h2>
        <div className="sb-wrap">
          <div className="rd-row sb-head">
            <span>Finish</span><span>Pace</span><span>10K</span><span>Half</span><span>20 mi</span><span>Notes</span>
          </div>
          {TARGETS.map(t => (
            <div className={`rd-row ${t.time === '3:17:00' ? 'st-good' : ''}`} key={t.time}>
              <span className="sb-wk2">{t.time}</span>
              <span className="sb-b">{t.pace}</span>
              <span>{t.tenK}</span>
              <span>{t.half}</span>
              <span>{t.twenty}</span>
              <span className="sb-q">{t.note}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="recon-two">
        <section>
          <h2 className="nut-h2">Fueling</h2>
          <ul className="fueling">
            {FUELING.map(([w, t]) => <li key={w}><strong>{w}:</strong> {t}</li>)}
          </ul>
        </section>
        <section>
          <h2 className="nut-h2">Race week & morning</h2>
          <div className="rd-check">
            <h4>This week</h4>
            <ul>{CHECKLIST.week.map((c, i) => <li key={i}>{c}</li>)}</ul>
            <h4>Race morning</h4>
            <ul>{CHECKLIST.morning.map((c, i) => <li key={i}>{c}</li>)}</ul>
          </div>
        </section>
      </div>

      <section>
        <h2 className="nut-h2">What to tell yourself, and when</h2>
        <div className="sb-wrap">
          {MANTRAS.map(([m, t]) => (
            <div className="rd-mantra" key={m}><span className="sb-wk2">{m}</span><em>“{t}”</em></div>
          ))}
        </div>
      </section>
    </div>
  )
}
