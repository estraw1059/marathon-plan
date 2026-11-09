// ---- Houston block: Mon Nov 9 2026 -> Chevron Houston Marathon, Sun Jan 17 2027 ----
// Built Nov 9 2026, two days after Indianapolis (3:22:45).
// Purpose: recover, rebuild, and practise going out correctly. Houston is NOT a race.

export const PLAN_START = new Date(2026, 10, 9)   // Mon Nov 9 2026
export const RACE_DATE = new Date(2027, 0, 17)    // Sun Jan 17 2027
export const BLOCK_NAME = 'Houston 2027'
export const BLOCK_SUB = '10 weeks · Chevron Houston Marathon, Sun Jan 17'

export const KEY_DATES = [
  ['Thu Nov 19', 'Work 5K', 'Tempo effort only — 12 days post-marathon. Not a race.'],
  ['Sun Dec 13', 'Dallas Half Marathon', 'RACE this one. Real fitness test, cheap recovery cost.'],
  ['Sun Jan 17', 'Chevron Houston Marathon', 'NOT a race. ~90% effort, practise the first 10 miles.'],
]

export const PACES = [
  { name: 'Easy / Recovery', pace: '8:45–9:30 /mi', note: 'Conversational. Most of your week lives here.' },
  { name: 'Long run', pace: '8:30–9:10 /mi', note: 'Relaxed. MP segments only where listed.' },
  { name: 'Houston pace (90%)', pace: '7:35–7:45 /mi', note: 'What you will run on Jan 17. Deliberately NOT race pace.' },
  { name: 'Marathon pace (goal)', pace: '7:15 /mi', note: 'Raised from 7:25. The pace a 3:10 is built on — used in workouts, not at Houston.' },
  { name: 'Tempo / threshold', pace: '6:45–6:55 /mi', note: 'NEW BAND, down from 6:55–7:05. Earned: 2 × 2 mi at 6:50 in 82°F on Oct 22.' },
  { name: 'Intervals (IV)', pace: '6:10–6:20 /mi', note: 'NEW BAND, down from 6:30–6:40. Equal-time jog recovery.' },
  { name: '5K / VO2 reps', pace: '5:55–6:05 /mi', note: 'Short reps only, 400–800m. Introduced from week 7.' },
  { name: 'Strides', pace: '20–30 sec fast', note: 'Smooth acceleration, full recovery. Not sprints.' },
]

export { ROUTINES } from './data.js'

const Y = {
  10: { min: 10, kind: 'Post-run hips, calves & ankles' },
  15: { min: 15, kind: 'Full-body flow' },
  20: { min: 20, kind: 'Restorative / deep stretch' },
}

const rest = (o = {}) => ({ run: 'REST', type: 'rest', yoga: o.yoga ?? Y[15], strength: o.strength ?? 'A',
  detail: o.detail ?? 'Full rest from running. Strength keeps the day productive without pounding.', ...o })
const easy = (mi, o = {}) => ({ run: `${mi} mi easy`, type: 'easy', miles: mi, yoga: o.yoga ?? Y[10],
  detail: o.detail ?? `${mi} miles at easy pace (8:45–9:30/mi). Conversational throughout — if in doubt, slower.`, ...o })
const rec = (mi, o = {}) => ({ run: `${mi} mi recovery`, type: 'easy', miles: mi, yoga: Y[20],
  detail: o.detail ?? `${mi} miles at the slow end of easy, 9:15+/mi. Legs will be heavy from Saturday — that is the point.`, ...o })
const strides = (mi, n, o = {}) => ({ run: `${mi} mi easy + ${n}×strides`, type: 'quality', miles: mi, yoga: Y[10],
  detail: o.detail ?? `${mi} miles easy, then ${n} × 20–30 sec strides on flat ground with full walk-back recovery.`, ...o })
const iv = (mi, reps, o = {}) => ({ run: `${mi} mi w/ ${reps} @ IV`, type: 'quality', miles: mi, yoga: Y[10],
  detail: o.detail ?? `Warm up 2 mi easy + 4 strides. ${reps} at interval pace (6:10–6:20/mi) with equal-time jog between. Cool down to ${mi} total.`, ...o })
const tempo = (mi, t, o = {}) => ({ run: `${mi} mi w/ ${t} mi tempo`, type: 'quality', miles: mi, yoga: Y[10],
  detail: o.detail ?? `Warm up 2 mi. ${t} continuous miles at tempo (6:45–6:55/mi) — comfortably hard, a sentence not a paragraph. Cool down to ${mi} total.`, ...o })
const mp = (mi, m, o = {}) => ({ run: `${mi} mi w/ ${m} mi @ MP`, type: 'quality', miles: mi, yoga: Y[10],
  detail: o.detail ?? `Warm up 2 mi. ${m} continuous miles at goal marathon pace (7:15/mi). Cool down to ${mi} total.`, ...o })
const lng = (mi, note, o = {}) => ({ run: `LONG ${mi} mi`, sub: note, type: 'long', miles: mi, yoga: Y[15],
  detail: o.detail ?? `${mi} miles at long-run pace (8:30–9:10/mi). ${note ? note + ' ' : ''}Fuel every 30–35 min from mile 5.`, ...o })
const core = (d) => ({ ...d, core: true })
const sb = (d) => ({ ...d, strength: 'B' })
const PM = (mi) => ({ run: `${mi} mi easy shakeout`, miles: mi,
  detail: `Evening double, 6+ hours after the morning session. TRULY easy — 9:30–10:00/mi. The job is blood flow after the hard work, not fitness. First thing to cut if the left leg complains.` })

export const WEEKS = [
  { n: 1, total: 7, label: 'RECOVERY — no running until Thu', days: [
    rest({ strength: null, yoga: Y[15], detail: 'Two days after a marathon. No running, no strength. Walk often and gently, elevate when sitting, compression socks during the day. Left calf: gentle ankle range of motion only, NOT stretching — tightness here is damage, not shortness.' }),
    rest({ strength: null, yoga: Y[20], run: 'REST / walk', detail: 'Walk 20–30 min. Protein ~1.6–2 g/kg, carbs up, sleep long. This is the repair week.' }),
    rest({ strength: null, yoga: Y[20], run: 'REST / walk', detail: 'Walk again. From today light foam rolling is fine — gentle passes on the calf, not grinding.' }),
    { run: '3 mi VERY easy', type: 'easy', miles: 3, yoga: Y[15], detail: 'FIRST RUN BACK, five days post-marathon. 10:00+/mi, flat ground. ONLY if the left calf is clearly improving — if it is still markedly tighter than the right, walk instead and try Saturday. No watch-chasing. This is a diagnostic.' },
    rest({ strength: null, yoga: Y[15], run: 'REST', detail: 'Rest regardless of how Thursday felt.' }),
    easy(4, { detail: '4 miles very easy, 10:00/mi. Second run back. Stop if anything sharpens.' }),
    rest({ strength: null, yoga: Y[20], run: 'REST / walk', detail: 'Walk and stretch. Week one done — the hardest thing you did was not run.' }),
  ]},
  { n: 2, total: 24, label: 'EASING BACK · work 5K Thu', days: [
    rest({ strength: 'A-light', detail: 'Strength A returns, light — 2 sets, moderate weight. Skip deep knee flexion if the quad is still tender. Keep the side plank.' }),
    easy(4),
    core(easy(4, { detail: '4 miles easy. Core circuit returns, 2 sets only. Rebuild the habit before the volume.' })),
    { run: 'WORK 5K — tempo effort', sub: 'Thu Nov 19 · not a race', type: 'quality', miles: 6, yoga: Y[10],
      detail: 'Warm up 2 mi, run the 5K, cool down 1 mi. TEMPO EFFORT, around 6:55–7:05 — NOT 5K race pace. You are twelve days past a marathon; a maximal 5K here would cost you a fortnight of this block for a time that means nothing. If the legs feel heavy on the start line, run it easy with the colleagues and enjoy it. Nobody at work is checking your splits.' },
    rest({ strength: null, yoga: Y[15], run: 'REST or 3 mi easy', detail: 'Optional 3 easy. Rest is the better choice if Thursday took anything out of you.' }),
    lng(6, 'Easy', { detail: '6 miles entirely easy. Longest run since the marathon.' }),
    rec(4),
  ]},
  { n: 3, total: 33, label: 'REBUILD', days: [
    rest({ strength: 'A' }),
    strides(6, 6),
    core(easy(5)),
    tempo(6, 3, { detail: 'FIRST REAL TEMPO of the block, and the first at the new band. Warm up 2 mi, then 3 continuous miles at 6:45–6:55. That is 15–25 sec/mi quicker than the band you ran all autumn — it should feel hard but controlled. If mile 3 is falling apart, you started too fast. Cool down 1 mi.' }),
    sb(easy(4, { detail: '4 miles easy + Strength B — the Friday session, back on trial. 20 minutes: split squat, DB hip hinge, push-ups, side plank, calf raises. Start the calf work LIGHT given the left leg.' })),
    lng(8, 'Easy'),
    rec(4),
  ]},
  { n: 4, total: 38, label: 'BUILD', days: [
    rest({ strength: 'A' }),
    iv(7, '5 × 800m', { detail: 'Warm up 2 mi + 4 strides. 5 × 800m at the NEW interval band, 6:10–6:20/mi — roughly 3:05–3:10 per rep. Equal-time jog between. You ran 6:25 in September; this is the step up. If reps 4 and 5 drift past 6:25, the pace is too hot for now and that is useful information, not a failure.' }),
    core(easy(5)),
    tempo(7, 4, { detail: 'Warm up 2 mi, 4 continuous miles at 6:45–6:55, 1 mi down.' }),
    sb(easy(4)),
    lng(11, 'Easy'),
    rec(4),
  ]},
  { n: 5, total: '33.1', label: 'DALLAS HALF week', days: [
    rest({ strength: 'A-light' }),
    iv(6, '4 × 800m', { detail: 'Warm up 2 mi. 4 × 800m at 6:10–6:20. Sharpening only — stop while it still feels good.' }),
    core(easy(5, { detail: '5 miles easy, light core (2 sets).' })),
    strides(5, 4),
    rest({ strength: null, yoga: Y[20], run: 'REST', detail: 'Full rest. Race tomorrow-but-one.' }),
    easy(4, { yoga: Y[15], detail: '4 miles easy + 4 strides. Pre-race shakeout. Lay out kit tonight.' }),
    { run: 'DALLAS HALF MARATHON', sub: 'Sun Dec 13 · RACE IT', type: 'race', miles: 13.1, yoga: Y[20],
      detail: 'RACE this one — a half costs you three or four days of recovery, not three weeks, and it is the cleanest fitness marker you will get before Houston. THE PACING RULE, learned the hard way on Nov 7: cap your heart rate at 165 for the first 4 miles and let the pace be whatever that produces. Do not look at the watch and chase a number. Target around 6:55–7:05/mi if the fitness is there, which on a good day is roughly 1:31–1:33. Negative split it. This is where you prove you can start correctly.' },
  ]},
  { n: 6, total: 37, label: 'ABSORB', days: [
    rest({ strength: 'A-light' }),
    easy(5, { detail: '5 miles easy. Recovery from the half — resist doing anything clever today.' }),
    core(easy(5)),
    tempo(6, 3),
    sb(easy(4)),
    lng(12, 'Easy'),
    rec(5),
  ]},
  { n: 7, total: 45, label: 'BUILD — doubles begin', days: [
    rest({ strength: 'A' }),
    iv(7, '6 × 800m', { pm: PM(3), detail: 'Warm up 2 mi + 4 strides. 6 × 800m at 6:10–6:20, equal jog. Cool down to 7 total. Evening shakeout tonight — the double starts this week.' }),
    core(easy(5)),
    tempo(7, 4, { pm: PM(3) }),
    sb(easy(4)),
    lng(12, 'Last 2 @ MP', { detail: '12 miles: first 10 at long-run pace, last 2 at goal marathon pace (7:15). First MP touch of the block.' }),
    rec(4),
  ]},
  { n: 8, total: 50, label: 'BUILD', days: [
    rest({ strength: 'A' }),
    iv(8, '5 × 1000m', { pm: PM(3), detail: 'Warm up 2 mi + 4 strides. 5 × 1000m at 6:10–6:20 (roughly 3:50–3:57 per rep), equal-time jog. Longer reps, same pace — this is the one that builds threshold.' }),
    core(easy(6)),
    tempo(8, 5, { pm: PM(3), detail: 'Warm up 2 mi, 5 CONTINUOUS miles at 6:45–6:55, 1 mi down. The benchmark session of the block — your previous best at this distance was 7:12 in September.' }),
    sb(easy(4)),
    lng(14, 'Last 3 @ MP'),
    rec(4),
  ]},
  { n: 9, total: 55, label: 'PEAK WEEK', days: [
    rest({ strength: 'A' }),
    iv(8, '6 × 800m', { pm: PM(3), detail: 'Warm up 2 mi + 4 strides. 6 × 800m, and on the last two you may dip to 5:55–6:05 if everything feels easy. Equal jog throughout.' }),
    core(easy(6)),
    mp(9, 6, { pm: PM(3), detail: 'Warm up 2 mi, 6 continuous miles at goal marathon pace (7:15), 1 mi down. This is the confidence session — and note the pace: 7:15, not the 7:25 you built the autumn on.' }),
    sb(easy(5)),
    lng(16, 'Last 4 @ MP', { detail: '16 miles, last 4 at 7:15. Final long run of the block. Full race-day fuelling rehearsal — race breakfast, race gels, race kit.' }),
    rec(5),
  ]},
  { n: 10, total: '18 + RACE', label: 'HOUSTON — mini-taper', days: [
    rest({ strength: 'A-light', detail: 'Rest + light Strength A. Last session of the block.' }),
    iv(6, '4 × 800m', { detail: 'Warm up 2 mi. 4 × 800m at 6:10–6:20. Staying sharp. Should feel easy and leave you wanting more.' }),
    core(easy(5, { detail: '5 miles easy, light core (2 sets max).' })),
    strides(4, 4, { detail: '4 miles easy + 4 strides. Last real run before travel.' }),
    rest({ strength: null, yoga: Y[15], run: 'REST — travel', detail: 'Rest and travel to Houston. Only a 3–4 day mini-taper on purpose — you are not peaking for this, you are training through it.' }),
    easy(3, { yoga: Y[15], detail: '3 miles very easy shakeout. Expo, feet up, early night.' }),
    { run: 'HOUSTON MARATHON', sub: 'Sun Jan 17 · NOT a race — 90% effort', type: 'race', miles: 26.2, yoga: Y[20],
      detail: 'THIS IS NOT A RACE. It is the rehearsal for the thing that cost you Indianapolis. The rule, and there is only one: HEART RATE UNDER 160 FOR THE FIRST TEN MILES. Let the pace be whatever that produces — if it reads 7:50, run 7:50. On Nov 7 your HR hit 182 by mile 13 running a pace you had held at 158 three weeks earlier, and you paid 13 minutes for it over the last six. Today you prove you can do it the other way. Target 7:35–7:45 overall, finishing around 3:20 feeling like you could have kept going. A negative split here is worth more to the sub-3 project than any time you could force. If you feel brilliant at mile 20, you may pick it up — that is the reward for getting the first half right, and it is the only way you are allowed to go faster.' },
  ]},
]

export const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
