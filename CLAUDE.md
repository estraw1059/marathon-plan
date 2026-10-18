# marathon-plan — notes for Claude

Context for anyone (or any new chat) picking up work in this repo.

## Owner

- GitHub username: **estraw1059**
- Git commits in `marathon-plan/` are authored as `Eric <estraw@smu.edu>` — match that.

## marathon-plan/

Vite + React 18 app, deployed to GitHub Pages at **https://estraw1059.github.io/marathon-plan/**

- `base: '/marathon-plan/'` is set in `vite.config.js`, so **the repo name must stay `marathon-plan`** or the deployed asset paths break.
- Deploy is automatic: `.github/workflows/deploy.yml` builds and publishes on every push to `main`. Pages source is set to "GitHub Actions".
- The site is behind a client-side SHA-256 password gate (`src/Gate.jsx`). Obfuscation, not real security — the plan data is still in the JS bundle. Fine for the purpose (keeps randoms out).

### Layout

```
src/
  main.jsx        entry; wraps <App/> in <Gate/>
  App.jsx         tabs (Training Plan / Nutrition / Reconcile), calendar grid, day modal
  Gate.jsx        password gate (hash only; plaintext deliberately not stored)
  data.js         THE PLAN — weeks, days, paces, strength routines
  nutrition.js    macro targets, meals, fueling, prep        -> Nutrition.jsx
  reconcile.js    plan-vs-actual snapshot from Strava        -> Reconcile.jsx
  index.css       all styling, plain CSS with custom properties
scripts/
  export-json.js  regenerates public/plan.json from data.js
public/
  plan.json       generated; also served at <site>/plan.json
```

### Data model (`data.js`)

`WEEKS` is an array of 16 week objects:

```js
{ n: 11, total: 51, label: 'PEAK WEEK', scot: false, days: [ /* 7 days, Mon→Sun */ ] }
```

Days are built by factory functions — **use these rather than hand-writing day objects**, so detail text stays consistent:

`rest()` · `easy(mi)` · `strides(mi, n)` · `iv(mi, reps)` · `tempo(mi, t)` · `mp(mi, m)` · `lng(mi, note)` · `rec(mi)`

Each takes a final `opts` object that spreads onto the day, so anything can be overridden:

```js
lng(18, 'Last 4 @ MP', { detail: 'custom text...' })
iv(8, '6 × 800m', { pm: PM3 })        // pm = optional evening double
core(easy(5))                          // wrapper: adds core: true
```

Day fields: `run`, `type` (`rest|easy|quality|long|race`), `miles`, `sub`, `detail`, `strength` (`'A'|'A-light'|'BW'|null`), `core`, `yoga`, `pm`.

`ROUTINES` holds strength circuits: `A` (Monday, the only lifting day), `CORE` (Wednesday), `BW` (travel/bodyweight). **Strength B was retired 2026-09-12** after 0 completions in 9 weeks — don't reintroduce it without asking.

### Invariant to check after any plan edit

Each week's `total` must equal the sum of its days' `miles` plus any `pm.miles`:

```bash
node -e "import('./src/data.js').then(({WEEKS})=>WEEKS.forEach(w=>{
  const s=w.days.reduce((a,d)=>a+(typeof d.miles==='number'?d.miles:0)+(d.pm?d.pm.miles:0),0);
  if(typeof w.total==='number'&&s!==w.total)console.log('MISMATCH W'+w.n,s,w.total);}))"
```

(Weeks with a string `total` like `'~33'` are intentionally approximate and skip the check.)

## Working in this repo — gotchas

1. **`node_modules` is macOS-native.** Running `vite build` from the Linux sandbox fails with a rollup `@rollup/rollup-linux-arm64-gnu` error. This is a platform mismatch, **not** a code problem. To verify a build, copy `src/`, `scripts/` and `package.json` into a scratch dir that has Linux deps installed and build there. `npm run export:json` is plain Node and works fine in either place — use it as a quick syntax check on `data.js`.
2. **Claude can commit but cannot push.** GitHub credentials live in the macOS keychain, unreachable from the sandbox. Workflow: make changes -> verify -> commit -> tell Eric to run `git push`.
3. **Stale `.git/index.lock`.** A sandbox `git status` sometimes leaves one behind and can't delete it. If git complains, `rm -f .git/index.lock` after enabling file deletion for the folder.
4. **Host writes can fail with EPERM.** The Write/Edit tools occasionally lose access to `/Users/ericstraw/Desktop/PersonalProjects`. Re-request the directory; if that still fails, write through the bash mount at `/sessions/<session>/mnt/PersonalProjects/` instead.
5. **`npm run build` runs `export:json` first**, so `plan.json` can never drift from `data.js`. Don't hand-edit `plan.json`.
6. Only three CDN libraries are safe to add (Chart.js, Grid.js, Mermaid) — otherwise inline everything.

## Reconciles

A **Strava MCP connector** is usually available. The recurring workflow Eric asks for:

1. `list_activities` over the period since the last reconcile.
2. `get_activity_performance` on the key sessions for HR and mile splits (laps give moving time per mile — that's where fade and cardiac drift show up).
3. Compare actual vs planned week by week; update `reconcile.js`.
4. Adjust `data.js` if the plan needs to change.
5. Verify totals, commit, hand off for push.

`reconcile.js` exports: `SNAPSHOT`, `SCOREBOARD`, `COMPLETION`, `SINCE_LAST` (wins/misses), `FATIGUE` (the current narrative read), `PACE_CHECK`, `HEAT`, `ACTIONS`, `PLAN_CHANGES`, `BOTTOM_LINE`. Keep historical rows — the point is tracking over time, not just the latest snapshot.

**Tone that works:** evidence-first, specific numbers, honest about misses without moralising, and clear about what is and isn't a real problem. Eric responds well to being pushed back on when the data disagrees with his read. Flag clearly when something is an estimate (e.g. heat/grade adjustments) rather than measured.

## Current state (as of Oct 18, 2026)

Eric races **Sat Nov 7, 2026**, goal sub-3:15 (7:25/mi). The 16-week block started Jul 20 and is essentially complete: 479 miles, 12 long runs, all finished.

The build peaked on **Oct 17 — 21.1 mi at 8:07/mi with the last 6 at exactly 7:25**, heart rate falling 168 → 158 through that block. That answered the fitness question, so weeks 14–15 were rewritten downward (38 then 27) purely to absorb it and arrive healthy. **No training from here adds fitness** — gains need 10–14 days to express and that window is shut. If asked to add volume or a hero session in the run-in, push back.

History worth knowing: a left knee/quad issue cost week 12 (Oct 5–11). Six days off resolved it. Week 13 was deliberately written down to ~33 mi with a 13-mile easy long run, and Eric ran 42.1 including the 21-miler — great outcome, risky route, and the same shape of decision that caused the injury. Strength has been absent since Sep 28 and core since Sep 10; both were in the plan specifically to support that knee.

After Nov 7, this doc needs rewriting for whatever comes next.

## Adding a second athlete

Planned: a running plan for Eric's girlfriend **in this same repo**. Two reasonable approaches — ask before picking:

- **Multi-athlete refactor.** Move plan data to `src/plans/eric.js` and `src/plans/<name>.js` exporting the same shape, add an athlete switcher, pass the plan into the existing components as a prop. One deploy, one URL, shared components.
- **Second route/page.** Leave Eric's app untouched, add a parallel page. Lower risk, more duplication.

**Gotcha either way:** completion state is stored in `localStorage` under the key `mp-done`, and the gate under `mp-unlocked`. Both must be namespaced per athlete (`mp-done-eric`, etc.) or the two plans will overwrite each other's checkmarks.

Her plan needs its own targets from scratch — current weekly mileage, recent race times, goal race and date, days per week, injury history. **Do not reuse Eric's paces or volumes.** Also worth asking whether she has Strava, since the reconcile workflow depends on it.
