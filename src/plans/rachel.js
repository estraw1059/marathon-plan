// ---- Rachel's Half Marathon plan data ----
// 20 calendar weeks: Mon Oct 19, 2026 -> Sun Mar 7, 2027 (race day).
// Week 1 is deliberately repeated as week 2 — the first time through doubles as a
// trial run of the app. Same idea as src/data.js, but every day carries a `priority`
// (key | important | optional) and the Peloton day carries a `bike` field.
//
// Mileage is an ESTIMATE derived from time on feet (run ≈ 12:30/mi, walk ≈ 17:30/mi).
// Weekly totals are computed from the days, so they always equal the sum.

export const ATHLETE = 'Rachel'
export const PLAN_NAME = 'Rachel’s Half Marathon'
export const GATE_TITLE = '🏃 Rachel’s Half'
export const GOAL_LINE = '20 weeks · Race day Sun Mar 7, 2027 · Goal 2:30–3:00'
export const PLAN_START = new Date(2026, 9, 19) // Mon Oct 19 2026
export const RACE_DATE = new Date(2027, 2, 7) // Sun Mar 7 2027

// localStorage keys — namespaced so they never collide with Eric's `mp-done` / `mp-unlocked`.
export const STORAGE = { done: 'mp-done-rachel', unlocked: 'mp-unlocked-rachel' }

// Rachel's own password gate (separate from Eric's). Hash only — the plaintext is deliberately not stored.
// The password is matched ignoring capitalization and leading/trailing spaces, so phone keyboards can't trip it up:
// the hash below is of the password lowercased and trimmed.
export const PASS_HASH = '1c5863cd55b5a4413fd59f054af57ba3c75c0698b3851d70f99b8de2d5c7338f'
export const normalizePassword = (s) => s.trim().toLowerCase()

export const TYPE_LABEL = {
  rest: 'Rest / yoga', easy: 'Run/walk', quality: 'Benchmark',
  long: 'Long run', bike: 'Peloton', race: 'RACE',
}

export const PRIORITY = {
  key: {
    label: 'Key', short: 'KEY',
    blurb: 'Protect these. If life gets in the way, move the session to another day instead of skipping it.',
  },
  important: {
    label: 'Important', short: 'IMPORTANT',
    blurb: 'Do these. If you are tired or short on time, shorten the session instead of skipping it.',
  },
  optional: {
    label: 'Optional', short: 'OPTIONAL',
    blurb: 'Nice to have. The first thing to drop in a rough week — no guilt, and no making it up later.',
  },
}

export const RULES =
  'Walk breaks are the plan, not a failure · easy means you can talk · missed a day? skip it, never double up · ' +
  'rough week? drop optional first, shorten important, protect key · sharp or lingering joint pain? walk, stop, and swap the run for a ride.'

export const PACES = [
  { name: 'Run segments', pace: 'Talk-test effort',
    note: 'Slow enough to speak in full sentences. Early on that is roughly 12–13 min/mi, but go by effort, not the watch. If you are breathing hard, slow down or walk early. Paces get re-set after the Week 8 benchmark.' },
  { name: 'Walk segments', pace: 'Brisk but relaxed',
    note: 'Walk the whole break, even when you feel great — taking walk breaks early is what lets you keep running late.' },
  { name: 'Warm-up / cool-down', pace: '5 min easy walk',
    note: 'Every run starts and ends with five minutes of walking. Do not skip them.' },
  { name: 'Race pace (whole race, walk breaks included)', pace: '11:25–13:45 /mi',
    note: '13:45/mi = 3:00 and 11:25/mi = 2:30. A comfortable run/walk lands near the slower end; the faster end needs a strong benchmark. Decide the race plan after Week 8 and again after the Week 16 long run.' },
  { name: 'Peloton', pace: 'Conversational (zone 2)',
    note: 'Low Impact or Beginner rides. You should be able to chat with the instructor.' },
]

export const HOW_IT_WORKS = [
  { title: 'The week',
    body: 'Mon rest + yoga · Tue run/walk · Wed rest + yoga · Thu run/walk · Fri Peloton · Sat rest (or an easy walk) · Sun long run.' },
  { title: 'Run/walk, step by step',
    body: 'Early weeks alternate short runs with walks (1:30 run / 1:30 walk). Every few weeks the run grows and the walk shrinks, until race ratio 4:00 run / 1:00 walk. Easy weeks (Thanksgiving, Christmas and a couple more) drop the ratio on purpose so your body can absorb the work.' },
  { title: 'Two color systems',
    body: 'The card FILL says what kind of day it is (run/walk, long run, benchmark, Peloton, rest, race). The thick LEFT EDGE and the badge say how important it is: Key, Important or Optional.' },
  { title: 'A rough week? Drop in this order',
    body: '1) Optional first: yoga, Peloton, the Saturday walk. 2) Shorten the Important runs rather than skipping them. 3) Protect the Key sessions: the Sunday long run, the benchmark, race day.' },
  { title: 'The swap rule',
    body: 'If a run feels off or a joint complains, swap it for a Peloton ride. The ride keeps the habit and the fitness going without the pounding, and counts as an Important session.' },
]

// ---- run/walk model ----
const RUN_SPEED = 1 / 12.5 // mi per minute running (estimate)
const WALK_SPEED = 1 / 17.5 // mi per minute walking (estimate)
const WARM = 5
const COOL = 5
const r1 = (x) => Math.round(x * 10) / 10
const mmss = (m) => {
  const mm = Math.floor(m)
  const ss = Math.round((m - mm) * 60)
  return `${mm}:${String(ss).padStart(2, '0')}`
}

// run/walk ratio ladder (minutes)
const LADDER = {
  1: { run: 1.5, walk: 1.5 },
  2: { run: 2, walk: 1.5 },
  3: { run: 3, walk: 1.5 },
  4: { run: 4, walk: 1.5 },
  5: { run: 4, walk: 1 },
}

function shape(level, targetMiles) {
  const { run, walk } = LADDER[level]
  const cycle = run + walk
  const cycleMi = run * RUN_SPEED + walk * WALK_SPEED
  const fixedMi = (WARM + COOL) * WALK_SPEED
  const reps = Math.max(4, Math.round((targetMiles - fixedMi) / cycleMi))
  return {
    run, walk, reps,
    miles: r1(fixedMi + reps * cycleMi),
    mins: Math.round(WARM + COOL + reps * cycle),
    work: Math.round(reps * cycle),
  }
}

const Y = {
  15: { min: 15, kind: 'Gentle full-body flow. Skip or pad any pose that pinches a knee (blanket or block underneath).' },
  20: { min: 20, kind: 'Hips, quads and glutes — slow holds. Skip or pad any pose that pinches a knee.' },
}

const JOINT = 'Joint check: normal muscle tiredness is fine; sharp or lingering joint pain means walk, stop, and swap this for a Peloton ride.'

// ---- day factories (use these, don't hand-write day objects) ----
const yogaDay = (min, detail, opts = {}) => ({
  run: 'REST', type: 'rest', priority: 'optional', yoga: Y[min], detail, ...opts,
})

const runWalk = (level, target, opts = {}) => {
  const p = shape(level, target)
  return {
    run: `Run/walk · ${p.mins}′`,
    sub: `${mmss(p.run)} run / ${mmss(p.walk)} walk × ${p.reps}`,
    type: 'easy', priority: 'important', miles: p.miles,
    detail: `Start with a ${WARM}-minute brisk walk. Then alternate ${mmss(p.run)} of easy running with ${mmss(p.walk)} of walking, ${p.reps} times (about ${p.work} minutes), and finish with a ${COOL}-minute walk. Total about ${p.mins} minutes, roughly ${p.miles} miles — an estimate, so go by time. Run at a talk-test effort: you should be able to speak in full sentences. Take every walk break, even when you feel great. ${JOINT}`,
    ...opts,
  }
}

const longRun = (level, target, note, opts = {}) => {
  const p = shape(level, target)
  const fuel = p.mins >= 75
    ? ' From about 45 minutes in, take a gel or chews every 40–45 minutes (use a gluten-free one you have tested in training) and sip water at every walk break.'
    : ' Bring water; no fuel is needed for a run this short.'
  return {
    run: `LONG ~${p.miles} mi`,
    sub: `${mmss(p.run)} / ${mmss(p.walk)} × ${p.reps} · ${p.mins}′`,
    type: 'long', priority: 'key', miles: p.miles,
    detail: `${note ? note + ' ' : ''}Start with a ${WARM}-minute brisk walk, then ${mmss(p.run)} run / ${mmss(p.walk)} walk × ${p.reps}, then walk ${COOL} minutes. About ${p.mins} minutes on your feet — roughly ${p.miles} miles at an easy, talk-test effort (go by time, not distance).${fuel} ${JOINT}`,
    ...opts,
  }
}

const bike = (min, opts = {}) => ({
  run: `Peloton · ${min}′`, type: 'bike', priority: 'optional',
  bike: { min, kind: 'Low Impact or Beginner ride, conversational effort' },
  detail: `${min} minutes on the Peloton — pick a Low Impact or Beginner class and keep the effort conversational (you could chat with the instructor). It builds your aerobic engine without pounding your legs. Rough week or sore legs? This is the first thing to skip. If a run feels off, though, a ride is the perfect swap.`,
  ...opts,
})

const satRest = (opts = {}) => ({
  run: 'REST', sub: 'or an easy walk', type: 'rest', priority: 'optional',
  detail: 'Full rest, or an easy 20–30 minute walk if your legs want it. Tomorrow is the long run, so prioritise sleep and water today.',
  ...opts,
})

const benchmark = (opts = {}) => ({
  run: 'BENCHMARK · 2 mi', sub: 'Pace check — not a test', type: 'quality', priority: 'key', miles: 2.6,
  detail: 'Start with a 5-minute brisk walk. Then cover 2 miles at a steady, comfortable effort, run/walk however feels natural (4:00 run / 1:00 walk works well) — and repeat it the same way next time you retest. Write down your total time. Finish with a 5-minute walk. Pace = time ÷ 2. Multiply by 13.1 and add about 8–10% for a realistic half-marathon projection, then use that to choose your race plan. This is a check-in, not pass/fail.',
  ...opts,
})

const MON = () => yogaDay(15, 'No running today. Optional 15-minute yoga flow — the Peloton app has plenty of beginner classes, or follow any gentle flow. Skip or pad any pose that pinches a knee.')
const WED = () => yogaDay(20, 'No running today. Optional 20 minutes of yoga focused on hips, quads and glutes — slow and gentle. This is the day your legs loosen up between runs.')

function week(n, { lvl, tue, thu, sun, bikeMin, label, note, longNote, over = {} }) {
  const days = [
    MON(),
    runWalk(lvl, tue),
    WED(),
    runWalk(lvl, thu),
    bike(bikeMin),
    satRest(),
    longRun(lvl, sun, longNote),
  ]
  Object.entries(over).forEach(([i, d]) => { days[Number(i)] = d })
  const total = r1(days.reduce((a, d) => a + (typeof d.miles === 'number' ? d.miles : 0), 0))
  return { n, label, note, total, days }
}

const W1 = { lvl: 1, tue: 2.0, thu: 2.0, sun: 2.5, bikeMin: 20 }

export const WEEKS = [
  week(1, { ...W1, label: 'GET STARTED',
    note: 'Week 1 doubles as a trial run of the app: tap any day to read the workout, tap “Mark completed”, and check the legend. Do the workouts for real — you will repeat this exact week next week.',
    longNote: 'Your first “long” run is only about 35 minutes. It is a long run for now.' }),
  week(2, { ...W1, label: 'WEEK 1 AGAIN',
    note: 'The same week again. The second time the effort and the app will both feel easier.',
    longNote: 'Same long run as last Sunday — it should feel a little easier.' }),
  week(3, { lvl: 2, tue: 2.0, thu: 2.5, sun: 3.0, bikeMin: 25 }),
  week(4, { lvl: 2, tue: 2.5, thu: 2.5, sun: 3.5, bikeMin: 25 }),
  week(5, { lvl: 3, tue: 2.5, thu: 3.0, sun: 4.0, bikeMin: 30 }),
  week(6, { lvl: 2, tue: 2.0, thu: 2.0, sun: 3.0, bikeMin: 20, label: 'EASY WEEK',
    note: 'Easy week (Thanksgiving). Every few weeks the load drops on purpose so your body can absorb the training.' }),
  week(7, { lvl: 3, tue: 3.0, thu: 3.0, sun: 4.5, bikeMin: 30 }),
  week(8, { lvl: 3, tue: 3.0, thu: 3.5, sun: 5.0, bikeMin: 30, label: 'BENCHMARK',
    note: 'Benchmark week. Thursday’s 2-mile effort sets your pace estimates — it is a check-in, not a test you can fail.',
    over: { 3: benchmark() } }),
  week(9, { lvl: 4, tue: 3.5, thu: 3.5, sun: 6.0, bikeMin: 35 }),
  week(10, { lvl: 3, tue: 2.5, thu: 3.0, sun: 4.0, bikeMin: 25, label: 'EASY WEEK',
    note: 'Easy week (Christmas). Keep it light — skipping the optional days is completely fine.' }),
  week(11, { lvl: 4, tue: 3.5, thu: 4.0, sun: 6.5, bikeMin: 35 }),
  week(12, { lvl: 4, tue: 4.0, thu: 4.0, sun: 7.5, bikeMin: 40 }),
  week(13, { lvl: 5, tue: 4.0, thu: 4.5, sun: 8.5, bikeMin: 40,
    note: 'New ratio this week: 4:00 run / 1:00 walk — the race ratio. If it feels too hard, drop back one level for a week.' }),
  week(14, { lvl: 4, tue: 3.0, thu: 3.5, sun: 6.0, bikeMin: 30, label: 'EASY WEEK',
    note: 'Easy week. Next week the long run climbs toward 10 miles.' }),
  week(15, { lvl: 5, tue: 4.0, thu: 4.5, sun: 9.5, bikeMin: 40 }),
  week(16, { lvl: 5, tue: 4.5, thu: 4.5, sun: 10.0, bikeMin: 45,
    note: 'Re-check your race plan after Sunday’s long run: if you finished feeling strong at a steady pace, you can aim for the faster side of 2:30–3:00.' }),
  week(17, { lvl: 5, tue: 4.5, thu: 4.5, sun: 11.0, bikeMin: 45, label: 'PEAK',
    note: 'Peak week. Sunday’s long run is the dress rehearsal: same shoes, same fuel, same clothes you will wear on race day.',
    longNote: 'DRESS REHEARSAL — your longest run of the plan. Practice everything you will do on race day.' }),
  week(18, { lvl: 4, tue: 3.5, thu: 4.0, sun: 8.0, bikeMin: 30, label: 'EASY WEEK',
    note: 'Easy week — let the peak sink in.' }),
  week(19, { lvl: 5, tue: 3.0, thu: 3.0, sun: 6.0, bikeMin: 25, label: 'TAPER',
    note: 'Taper. Less running, same routine. You will feel restless — that means it is working.',
    longNote: 'Relaxed — you should finish feeling like you could keep going.' }),
  week(20, { lvl: 5, tue: 2.5, thu: 2.0, sun: 13.1, bikeMin: 15, label: 'RACE WEEK',
    note: 'Race week. Nothing new, nothing hard. You did the work.',
    over: {
      1: runWalk(5, 2.5, { detail: 'Easy shakeout: 5-minute walk, then 4:00 run / 1:00 walk, easy the whole way, then walk 5 minutes. Legs should feel springy. Nothing hard this week.' }),
      3: runWalk(5, 2.0, { detail: 'Last run before the race: short and easy. 5-minute walk, 4:00 run / 1:00 walk for about 15 minutes, 5-minute walk. Done. Lay out your race kit tonight.' }),
      4: bike(15, { detail: '15 easy minutes on the Peloton just to loosen your legs. Optional — a 15-minute walk works too.' }),
      5: satRest({ run: 'REST', sub: 'carb up, early night', detail: 'Rest. Eat familiar carb-rich meals, drink water through the day, lay out your kit and bib, and get an early night. Nothing new tomorrow — not food, not shoes, not socks.' }),
      6: {
        run: 'RACE DAY — 13.1', sub: 'Goal 2:30–3:00', type: 'race', priority: 'key', miles: 13.1,
        detail: 'Warm up with a 5–10 minute walk and a few easy leg swings. Start at the BACK of your wave, slower than feels necessary — the first mile always feels too easy. Run 4:00 / walk 1:00 (or whichever ratio has felt best on your long runs) from the first minute and take every walk break, including through aid stations. Fuel with a gluten-free gel or chews you have tested at about 45 minutes, 1:30 and 2:15, and sip water at each walk break. Finish-line math, walk breaks included: 3:00 is a 13:45/mi average and 2:30 is 11:25/mi. Bank the 3:00 first; if you are still feeling strong around mile 9–10, shorten the walk breaks and go. Nothing new today. You did the work. GO.',
      },
    } }),
]

export const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

export function dayDate(weekIdx, dayIdx) {
  const d = new Date(PLAN_START)
  d.setDate(d.getDate() + weekIdx * 7 + dayIdx)
  return d
}

export function fmtDate(d) {
  return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
}

export function weekRange(weekIdx) {
  return `${fmtDate(dayDate(weekIdx, 0))} – ${fmtDate(dayDate(weekIdx, 6))}`
}
