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

After Nov 7, this doc needs rewriting for whatever comes next — see the race calendar and Boston project below.

## Race calendar and the Boston project

Eric's stated long-term goal is a **Boston qualifier**. He is in the **men's 18–34** bracket: standard **2:55:00**, but the 2027 cutoff ran **5:17 under**, so the practical bar is **~2:50**. He has calibrated to that correctly.

| Date | Race | How to treat it |
|---|---|---|
| Sat **Nov 7, 2026** | Indy Marathon | RACE. Goal 3:15, 7:25/mi from the gun |
| Sun **Jan 17, 2027** | Chevron Houston Marathon | NOT a race. ~90% effort off a 3–4 day mini-taper, supported long run |
| Sun **Mar 7, 2027** | Fun half with girlfriend | Social, ~2:30 (≈11:25/mi). Counts as that week's long run |
| **Apr 7, 2027** | McKinney Half | RACE HARD. Main spring target (NB: Apr 7 2027 is a Wednesday — confirm the date) |

**Agreed strategy (Oct 2026).** The honest assessment given: 3:15 → 2:50 is a 2–3 year project, not a one-year one. Projected arc is ~3:00–3:05 at a fall-2027 marathon, ~2:55 in 2028, ~2:50 in 2029. The limiting factor is **not** workout quality — his sessions are already good. It is **volume tolerance**: he peaked at 52–55 mpw this cycle and picked up a knee issue at 55, while sub-2:50 runners typically live at 70–90 mpw. The whole project reduces to getting to 70+ mpw and staying healthy there, which takes 12–18 months of patient building.

Consequence: **do not let him race Houston.** Racing two marathons 10 weeks apart costs ~13 weeks of building (recovery + build + taper + recovery) for a result already predictable from Nov 7. Nov–Mar is the single best volume-building window of the year and must not be spent in race mode.

**Phase structure for the post-Nov-7 block** (skeleton agreed; week-by-week detail deferred until the Nov 7 result is known):

- **Phase 0 — Recovery · Nov 8–28 (3 wks).** Week 1 no running. Week 2 easy, 20–25 mi. Week 3 ~30 mi, reintroduce strides. Strength and core resume week 2 and become permanent.
- **Phase 1 — Base into Houston · Nov 30 – Jan 17 (7 wks).** Build 35 → 50 mpw. One tempo per week, long run to 16. A volume build that happens to end in a marathon, not a marathon build. Houston at ~7:40–7:50/mi; a 3:20–3:30 is a SUCCESS, not a failure.
- **Phase 2 — The volume block · Jan 18 – Mar 7 (7 wks).** 1–2 weeks easy post-Houston, then build 50 → 65 mpw. This is where Boston actually gets built. Mar 7 fun half slots in as that week's long run.
- **Phase 3 — Half sharpening · Mar 8 – Apr 7 (4 wks).** Hold ~60 mpw, add threshold and 10K-pace work, 10-day taper. Target a hard half PR — at 60–65 mpw, 1:24–1:27 is realistic.
- **Phase 4 — Spring/summer base · Apr–Aug 2027.** Build toward 70–75 mpw. Fall 2027 marathon is the first genuine BQ attempt.

**Note on the Mar 7 fun half:** 2.5 hours at ~11:25/mi is a gait he is not adapted to, and slow shuffling for that long can cause its own niggles. Treat it as the week's long run, keep quality off the days either side, and tell him not to "make up" the pace afterward.

## Adding a second athlete

Planned: a running plan for Eric's girlfriend **in this same repo**. Two reasonable approaches — ask before picking:

- **Multi-athlete refactor.** Move plan data to `src/plans/eric.js` and `src/plans/<name>.js` exporting the same shape, add an athlete switcher, pass the plan into the existing components as a prop. One deploy, one URL, shared components.
- **Second route/page.** Leave Eric's app untouched, add a parallel page. Lower risk, more duplication.

**Gotcha either way:** completion state is stored in `localStorage` under the key `mp-done`, and the gate under `mp-unlocked`. Both must be namespaced per athlete (`mp-done-eric`, etc.) or the two plans will overwrite each other's checkmarks.

Her plan needs its own targets from scratch — current weekly mileage, recent race times, goal race and date, days per week, injury history. **Do not reuse Eric's paces or volumes.** Also worth asking whether she has Strava, since the reconcile workflow depends on it.
