import {
  SNAPSHOT, SCOREBOARD, SCOREBOARD_NOTE, COMPLETION, PACE_CHECK,
  HEAT, ACTIONS, BOTTOM_LINE, PLAN_CHANGES,
} from './reconcile.js'

export default function Reconcile() {
  return (
    <div className="recon">
      <p className="recon-stamp">{SNAPSHOT}</p>

      <section>
        <h2 className="nut-h2">Weekly scoreboard</h2>
        <div className="sb-wrap">
          <div className="sb-row sb-head">
            <span>Wk</span><span>Dates</span><span>Plan</span><span>Actual</span><span>+/−</span>
            <span>Long run</span><span>Quality sessions</span><span>Str</span><span>Core</span><span>Yoga</span>
          </div>
          {SCOREBOARD.map(w => (
            <div className={`sb-row st-${w.status}`} key={w.n}>
              <span className="sb-wk">{w.n}</span>
              <span>{w.dates}</span>
              <span>{w.plan}</span>
              <span className="sb-b">{w.actual}</span>
              <span className={w.delta.startsWith('+') && w.delta !== '+0.0' ? 'sb-up' : 'sb-dim'}>{w.delta}</span>
              <span>{w.long}</span>
              <span className="sb-q">{w.quality}</span>
              <span className={w.str.startsWith('0') ? 'sb-bad' : 'sb-b'}>{w.str}</span>
              <span className={w.core.startsWith('0') ? 'sb-bad' : 'sb-b'}>{w.core}</span>
              <span className="sb-b">{w.yoga}</span>
            </div>
          ))}
        </div>
        <p className="recon-note">{SCOREBOARD_NOTE}</p>
      </section>

      <div className="recon-two">
        <section>
          <h2 className="nut-h2">Session completion</h2>
          <ul className="comp">
            {COMPLETION.map(c => (
              <li key={c.label}>
                <div className="comp-head">
                  <strong>{c.label}</strong>
                  <span className={c.pct === 100 ? 'ok' : c.pct === 0 ? 'bad' : 'mid'}>{c.pct}%</span>
                </div>
                <div className="comp-bar">
                  <div className={`comp-fill ${c.pct === 100 ? 'ok' : c.pct === 0 ? 'bad' : 'mid'}`}
                       style={{ width: `${Math.max(c.pct, 2)}%` }} />
                </div>
                <small>{c.value}</small>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="nut-h2">{HEAT.title}</h2>
          <div className="heat-card">
            {HEAT.body.map((p, i) => <p key={i}>{p}</p>)}
            <ul className="heat-rows">
              {HEAT.rows.map(([a, b]) => (
                <li key={a}><strong>{a}</strong><em>{b}</em></li>
              ))}
            </ul>
            {HEAT.after.map((p, i) => <p key={i}>{p}</p>)}
          </div>
        </section>
      </div>

      <section>
        <h2 className="nut-h2">Pace reality check</h2>
        <div className="sb-wrap">
          <div className="pc-row sb-head">
            <span>Workout type</span><span>Prescribed</span><span>Your actual</span><span>Heat-adj. (est.)</span><span>Verdict</span>
          </div>
          {PACE_CHECK.map(p => (
            <div className={`pc-row st-${p.status}`} key={p.type}>
              <span className="sb-wk2">{p.type}</span>
              <span className="sb-b">{p.prescribed}</span>
              <span className="sb-b">{p.actual}</span>
              <span className="sb-b">{p.adjusted}</span>
              <span>{p.verdict}</span>
            </div>
          ))}
        </div>
        <p className="recon-note">
          Heat adjustment is a rule-of-thumb estimate (4% at roughly 80°F with high humidity), not a measured value — treat it as directional.
        </p>
      </section>

      <section>
        <h2 className="nut-h2">What to change for weeks 8–16</h2>
        <ol className="actions">
          {ACTIONS.map(a => (
            <li key={a.n}>
              <strong>{a.title}</strong>
              <p>{a.body}</p>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="nut-h2">{PLAN_CHANGES.title}</h2>
        <div className="sb-wrap">
          {PLAN_CHANGES.rows.map(([when, what, tot]) => (
            <div className="chg-row" key={when}>
              <span className="sb-wk2">{when}</span>
              <span>{what}</span>
              <span className="sb-b">{tot}</span>
            </div>
          ))}
        </div>
        <p className="recon-note">{PLAN_CHANGES.note}</p>
      </section>

      <div className="bottom-line">
        <strong>Bottom line</strong>
        <p>{BOTTOM_LINE}</p>
      </div>
    </div>
  )
}
