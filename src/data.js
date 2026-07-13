// ---- Sub-3:15 Marathon Plan data ----
// Week 1 starts Mon Jul 20, 2026. Race: Sat Nov 7, 2026.

export const PLAN_START = new Date(2026, 6, 20) // Mon Jul 20 2026
export const RACE_DATE = new Date(2026, 10, 7) // Sat Nov 7 2026

export const PACES = [
  { name: 'Easy / Recovery', pace: '8:30–9:15 /mi', note: 'Conversational. Discipline here builds the engine.' },
  { name: 'Long run', pace: '8:15–9:00 /mi', note: 'Relaxed; MP segments only where listed.' },
  { name: 'Marathon pace (MP)', pace: '7:25 /mi', note: 'Goal: 3:14:xx. Halfway split 1:37:0x–1:37:30.' },
  { name: 'Tempo', pace: '6:55–7:05 /mi', note: 'Comfortably hard — could speak a sentence, not a paragraph.' },
  { name: 'Intervals (IV)', pace: '6:30–6:40 /mi', note: 'Equal-time jog recovery between reps.' },
  { name: 'Strides', pace: '20–30 sec fast', note: 'Smooth acceleration, full recovery. Not sprints.' },
]

export const ROUTINES = {
  A: {
    title: 'Strength A — 30 min (dumbbells)',
    note: 'Rest 60–90 sec between sets. Last 2 reps hard but clean; add 5 lb when all sets feel easy.',
    exercises: [
      { name: 'Goblet Squat', dose: '3 × 10', how: 'Hold one DB vertically against your chest, elbows tucked. Feet shoulder-width, toes slightly out. Sit hips down and back until thighs are parallel, chest tall, then drive up through the whole foot.', cue: 'Knees track over toes — don’t let them cave inward.' },
      { name: 'DB Romanian Deadlift', dose: '3 × 10', how: 'DBs in front of thighs, slight knee bend. Push hips straight back, sliding DBs to mid-shin with a flat back. Squeeze glutes to stand.', cue: 'It’s a hip hinge, not a squat — feel the hamstrings load.' },
      { name: 'Reverse Lunge', dose: '3 × 8 / leg', how: 'DBs at sides. Step one foot back, lower until both knees hit ~90°, front shin vertical. Push through the front heel to return. All reps one leg, then switch.', cue: 'Torso upright; the front leg does the work.' },
      { name: 'Single-Leg Calf Raise', dose: '3 × 12 / leg', how: 'One foot on a step edge, heel hanging off, fingertips on wall for balance. Lower heel below the step, pause, rise as high as you can. 3 sec down.', cue: 'Runners’ gold: strong calves injury-proof the Achilles.' },
      { name: 'One-Arm DB Row', dose: '3 × 10 / arm', how: 'Hand and knee on bench, back flat like a table. Pull the DB to your hip, elbow skimming your ribs. Lower with control.', cue: 'Pull with the back, not the bicep — no torso twisting.' },
      { name: 'Overhead Press', dose: '3 × 8', how: 'Standing, DBs at shoulders. Brace your core and press straight overhead to lockout by your ears. Lower with control.', cue: 'Ribs down, no back-arching — squeeze glutes for a stable base.' },
      { name: 'Plank (finisher)', dose: '3 × 45 sec', how: 'Forearms down, elbows under shoulders, body one straight line head to heels. Squeeze glutes and brace abs.', cue: 'Don’t let hips sag or pike. Shaking is fine; sagging isn’t.' },
    ],
  },
  B: {
    title: 'Strength B — 20 min (lighter)',
    note: 'Keep legs fresh for Saturday’s long run — smooth reps, no grinding.',
    exercises: [
      { name: 'Split Squat', dose: '2 × 10 / leg', how: 'Staggered stance, feet hip-width apart (not tightrope). Drop the back knee straight down, then drive up. All reps, then switch legs.', cue: 'Lighter than Monday’s lunges.' },
      { name: 'DB Hip Hinge', dose: '2 × 10', how: 'Same movement as the RDL but lighter and a touch faster up. Hips back, flat back, snap hips forward to stand.', cue: 'Speed up, control down.' },
      { name: 'Push-Up', dose: '2 × 12', how: 'Hands just wider than shoulders, body rigid. Chest to an inch off the floor, elbows ~45° from ribs. Elevate feet if easy, hands on bench if hard.', cue: 'No sagging hips.' },
      { name: 'Side Plank', dose: '2 × 30 sec / side', how: 'On one forearm, elbow under shoulder, feet stacked, body in one line. Push hips up and hold.', cue: 'Glute med — fights late-race form collapse.' },
      { name: 'Calf Raise (both legs)', dose: '2 × 15', how: 'Both feet on step edge, rise, pause 1 sec, lower slowly below level. Hold DBs to add load.', cue: 'Friday = both legs; Monday = single-leg.' },
    ],
  },
  CORE: {
    title: 'Core Day — 15 min (after run)',
    note: 'Run through as a circuit with minimal rest.',
    exercises: [
      { name: 'Plank', dose: '3 × 45 sec', how: 'Forearm plank, straight line head to heels, glutes tight.', cue: 'Progress by +10 sec, not by holding a saggy minute.' },
      { name: 'Side Plank', dose: '2 × 30 sec / side', how: 'Elbow under shoulder, feet stacked, hips high.', cue: 'To progress: raise the top leg.' },
      { name: 'Dead Bug', dose: '2 × 10 / side', how: 'On your back, arms up, knees over hips. Press low back into the floor. Slowly lower opposite arm and leg, return, switch.', cue: 'If your low back arches off the floor, shorten the reach.' },
      { name: 'Bird Dog', dose: '2 × 10 / side', how: 'On all fours, extend opposite arm and leg parallel to the floor, pause 2 sec, return.', cue: 'No hip rotation — balance a coffee mug on your low back.' },
      { name: 'Glute Bridge', dose: '2 × 15', how: 'On your back, feet flat near hips. Drive through heels to a knees–hips–shoulders line, pause 1 sec.', cue: 'Feel it in glutes, not hamstrings — feet closer if not.' },
      { name: 'Russian Twist', dose: '2 × 20 total', how: 'Seated, lean back ~45° with a straight spine, rotate side to side. Light DB to progress; feet up = harder.', cue: 'Rotate from the trunk, not just the arms.' },
    ],
  },
  BW: {
    title: 'Scotland Bodyweight Circuit — 20 min',
    note: '3 rounds, minimal rest. Any hotel room works. Skip after big hike days.',
    exercises: [
      { name: 'Bodyweight Squat', dose: '× 15', how: 'Same form as goblet squat, hands out front for balance.', cue: '' },
      { name: 'Alternating Lunge', dose: '× 10 / leg', how: 'Forward or reverse — whatever the floor space allows.', cue: '' },
      { name: 'Push-Up', dose: '× 12', how: 'Strict form, chest to an inch off the floor.', cue: '' },
      { name: 'Step-Up', dose: '× 10 / leg', how: 'Onto a sturdy chair or bench. Drive through the top heel.', cue: '' },
      { name: 'Plank', dose: '45 sec', how: 'Straight line, glutes tight.', cue: '' },
      { name: 'Single-Leg Calf Raise', dose: '× 12 / leg', how: 'Off a stair edge.', cue: '' },
    ],
  },
}

const Y = {
  10: { min: 10, kind: 'Post-run hips & hamstrings' },
  15: { min: 15, kind: 'Full-body flow' },
  20: { min: 20, kind: 'Restorative / deep stretch' },
}

// ---- day factories ----
const rest = (opts = {}) => ({
  run: 'REST', type: 'rest', yoga: opts.yoga ?? Y[15], strength: opts.strength ?? 'A',
  detail: opts.detail ?? 'Full rest from running. Strength work today keeps the day productive without pounding. Sleep is training too — aim for 8 hours.',
  ...opts,
})
const easy = (mi, opts = {}) => ({
  run: `${mi} mi easy`, type: 'easy', miles: mi, yoga: opts.yoga ?? Y[10],
  detail: opts.detail ?? `${mi} miles at easy pace (8:30–9:15/mi). Truly conversational — if in doubt, slow down. These miles build your aerobic engine.`,
  ...opts,
})
const strides = (mi, n, opts = {}) => ({
  run: `${mi} mi easy + ${n}×strides`, type: 'quality', miles: mi, yoga: Y[10],
  detail: `${mi} miles easy, then ${n} × 20–30 sec strides on flat ground: smooth acceleration to ~5K effort, full walk-back recovery. Strides sharpen mechanics without fatigue.`,
  ...opts,
})
const iv = (mi, reps, opts = {}) => ({
  run: `${mi} mi w/ ${reps} @ IV`, type: 'quality', miles: mi, yoga: Y[10],
  detail: `Warm up 2 mi easy + 4 strides. Run ${reps} at interval pace (6:30–6:40/mi) with equal-time easy jog between reps. Cool down to ${mi} total. These build your VO2max back toward 56+.`,
  ...opts,
})
const tempo = (mi, t, opts = {}) => ({
  run: `${mi} mi w/ ${t} mi tempo`, type: 'quality', miles: mi, yoga: Y[10],
  detail: `Warm up 2 mi easy. ${t} continuous miles at tempo (6:55–7:05/mi) — comfortably hard, controlled. Cool down to ${mi} total. Tempo is the single best predictor workout for the marathon.`,
  ...opts,
})
const mp = (mi, m, opts = {}) => ({
  run: `${mi} mi w/ ${m} mi @ MP`, type: 'quality', miles: mi, yoga: Y[10],
  detail: `Warm up 2 mi easy. ${m} continuous miles at marathon pace (7:25/mi) — lock in the rhythm, practice relaxed form. Cool down to ${mi} total.`,
  ...opts,
})
const lng = (mi, note, opts = {}) => ({
  run: `LONG ${mi} mi`, sub: note, type: 'long', miles: mi, yoga: Y[15],
  detail: opts.detail ?? `${mi} miles at long-run pace (8:15–9:00/mi). ${note ? note + ' ' : ''}Practice fueling: gel or chews every 30–35 min from mile 5, drink early and often.`,
  ...opts,
})
const rec = (mi, opts = {}) => ({
  run: `${mi} mi recovery`, type: 'easy', miles: mi, yoga: Y[20],
  detail: `${mi} miles at the slow end of easy (9:00+/mi is fine). Legs will be heavy from the long run — that’s the point. Finish with 20 min restorative yoga.`,
  ...opts,
})

// core-day wrapper
const core = (d) => ({ ...d, core: true })
// strength-B wrapper
const sb = (d, light) => ({ ...d, strength: light ? 'B-light' : 'B' })

export const WEEKS = [
  { n: 1, total: 36, days: [
    rest(),
    strides(6, 6),
    core(easy(5)),
    tempo(6, 3),
    sb(easy(4)),
    lng(10),
    rec(5),
  ]},
  { n: 2, total: 38, days: [
    rest(),
    iv(7, '8 × 400m'),
    core(easy(5)),
    tempo(6, 3),
    sb(easy(4)),
    lng(11),
    rec(5),
  ]},
  { n: 3, total: 40, days: [
    rest(),
    iv(7, '6 × 800m'),
    core(easy(6)),
    tempo(7, 4),
    sb(easy(4)),
    lng(12),
    rec(4),
  ]},
  { n: 4, total: 33, label: 'CUTBACK', days: [
    rest(),
    strides(6, 6),
    core(easy(5)),
    tempo(6, 2),
    rest({ strength: null, yoga: Y[20], detail: 'Second rest day this week — cutback weeks are where adaptation happens. 20 min full yoga flow.' }),
    lng(10),
    rec(6),
  ]},
  { n: 5, total: 42, days: [
    rest(),
    iv(8, '5 × 1000m'),
    core(easy(6)),
    tempo(7, 4),
    sb(easy(4)),
    lng(13),
    rec(4),
  ]},
  { n: 6, total: 44, days: [
    rest(),
    iv(8, '6 × 800m'),
    core(easy(6)),
    tempo(8, 5),
    sb(easy(4)),
    lng(14),
    rec(4),
  ]},
  { n: 7, total: 46, days: [
    rest(),
    iv(8, '4 × 1200m'),
    core(easy(6)),
    mp(8, 5),
    sb(easy(4)),
    lng(15),
    rec(5),
  ]},
  { n: 8, total: 38, label: 'CUTBACK', days: [
    rest(),
    strides(7, 6),
    core(easy(5)),
    tempo(6, 3),
    sb(easy(4)),
    lng(12),
    rec(4, { detail: '4 miles very easy, then pack for Scotland! Running shoes go in the carry-on.' }),
  ]},
  { n: 9, total: '~34', label: 'SCOTLAND', scot: true, days: [
    rest({ strength: 'BW', run: 'REST / travel', detail: 'Travel day. Shake out the flight with the bodyweight circuit and 15 min yoga when you land.' }),
    { run: '45–60′ easy', type: 'easy', yoga: Y[10], detail: 'Run by time, not distance — routes are unfamiliar. 45–60 min conversational. Hills welcome; effort over pace.' },
    core({ run: '40′ easy', type: 'easy', yoga: Y[10], detail: '40 min easy. Core circuit on the hotel floor afterward — no equipment needed.' }),
    { run: '50′ w/ 20′ tempo', type: 'quality', yoga: Y[10], detail: '15 min easy warm-up, then 20 min at steady tempo EFFORT (ignore pace on hills), cool down to 50 min total.' },
    { run: '30′ easy or hike', type: 'easy', yoga: Y[10], detail: '30 min easy jog, or count a solid hike as cross-training. Scottish hills are doing real work for your legs.' },
    lng('90′', 'By feel, ~10 mi', { run: 'LONG 90′', miles: 10, detail: '90 minutes easy by feel (~10 miles). Pick a scenic route — this one should be a highlight, not a chore.' }),
    { run: '40′ recovery', type: 'easy', yoga: Y[20], detail: '40 min very easy. Restorative yoga tonight.' },
  ]},
  { n: 10, total: '~38', label: 'SCOTLAND', scot: true, days: [
    rest({ strength: 'BW' }),
    { run: '60′ w/ 8×1′ hills', type: 'quality', yoga: Y[10], detail: '15 min easy, then 8 × 1 min hard uphill surges, jog down between. Cool down to 60 min. Hill work = strength + VO2 in one.' },
    core({ run: '45′ easy', type: 'easy', yoga: Y[10], detail: '45 min easy. Core circuit after.' }),
    { run: '55′ w/ 25′ tempo', type: 'quality', yoga: Y[10], detail: '15 min warm-up, 25 min steady tempo effort, cool down to 55 min total.' },
    { run: '30′ easy or hike', type: 'easy', yoga: Y[10], detail: '30 min easy or a hike day. Last full day — enjoy it.' },
    lng('2 hr', 'By feel, ~13 mi', { run: 'LONG 2 hr', miles: 13, detail: '2 hours easy by feel (~13 miles). The key session of the trip — protect it.' }),
    { run: '45′ recovery', type: 'easy', yoga: Y[20], detail: '45 min very easy, then fly home. Back to full training Monday.' },
  ]},
  { n: 11, total: 46, days: [
    rest(),
    iv(8, '6 × 800m'),
    core(easy(6)),
    mp(8, 5),
    sb(easy(4)),
    lng(16, 'Last 3 @ MP', { detail: '16 miles: first 13 at long-run pace, finish with 3 at marathon pace (7:25). Practice race fueling throughout.' }),
    rec(4),
  ]},
  { n: 12, total: 50, days: [
    rest(),
    iv(8, '5 × 1000m'),
    core(easy(6)),
    mp(8, 6),
    sb(easy(5)),
    lng(18, 'Last 4 @ MP', { detail: '18 miles: first 14 at long-run pace, last 4 at marathon pace. Full race-day fueling rehearsal.' }),
    rec(5),
  ]},
  { n: 13, total: 52, label: 'PEAK WEEK', days: [
    rest(),
    iv(9, '4 × 1200m'),
    core(easy(6)),
    tempo(8, 6, { run: '8 mi w/ 6 mi tempo/MP', detail: 'Warm up 2 mi. 6 miles alternating tempo (6:55–7:05) and MP (7:25) by the mile. Cool down briefly. Biggest midweek session of the block.' }),
    sb(easy(5)),
    lng(20, 'Steady — fuel it', { detail: 'The 20-miler. Steady long-run pace, full fueling plan, race-day breakfast beforehand. This is the single most important run of the cycle. Nothing heroic — just get it done.' }),
    rec(4),
  ]},
  { n: 14, total: 44, days: [
    rest(),
    iv(7, '5 × 800m'),
    core(easy(6)),
    mp(7, 4),
    sb(easy(4), true),
    lng(16, 'Dress rehearsal: 8 @ MP', { detail: '16 miles with the middle 8 at marathon pace. Wear race kit and shoes, use race fueling, race breakfast. Treat it like Nov 7.' }),
    rec(4),
  ]},
  { n: 15, total: 34, label: 'TAPER', days: [
    rest({ strength: 'A-light', detail: 'Rest + final light Strength A (drop to 2 sets, moderate weight). Last strength session of the cycle.' }),
    iv(6, '4 × 800m', { detail: 'Warm up 2 mi. 4 × 800m at interval pace, equal jog rest. Staying sharp, not building — this should feel easy.' }),
    core(easy(5, { detail: '5 miles easy, light core circuit (2 sets max).' })),
    mp(6, 3),
    rest({ strength: null, yoga: Y[20], detail: 'Rest. Gentle 20 min yoga. Trust the taper — the hay is in the barn.' }),
    lng(12, 'Relaxed', { detail: '12 miles relaxed. No MP work. Enjoy feeling fresh for the first time in months.' }),
    rec(5),
  ]},
  { n: 16, total: '13 + RACE', label: 'RACE WEEK', days: [
    rest({ strength: null, yoga: Y[15], detail: 'Rest. Gentle yoga only. Start hydrating deliberately.' }),
    strides(5, 4, { detail: '5 miles easy + 4 strides. Legs should feel springy.' }),
    core(easy(4, { detail: '4 miles easy, 10 min light core (planks only). Last core work.' })),
    mp(4, 2, { detail: 'Warm up, 2 miles at marathon pace to lock in rhythm, done. Short and confident.' }),
    rest({ strength: null, yoga: Y[10], run: 'REST — carb load', detail: 'Rest. Carb load: 8–10 g/kg today and tomorrow morning. 10 min gentle yoga, early night, lay out kit.' }),
    { run: 'RACE DAY — 26.2', sub: '7:25/mi → 3:14:xx', type: 'race', miles: 26.2, detail: 'Warm-up: 5–10 min jog + strides. Start 7:28–7:30/mi, settle into 7:25. Halfway 1:37:0x–1:37:30. Fuel every 30–35 min from mile 5, drink early and often. Miles 20–26 are what the 20-milers were for. Nothing new today. You’ve run a 1:30 half — it’s in you. GO.' },
    { run: 'Celebrate', type: 'easy', yoga: Y[20], detail: 'Walk, eat everything, 20 min gentle stretch if you feel like it. Congratulations, marathoner.' },
  ]},
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
