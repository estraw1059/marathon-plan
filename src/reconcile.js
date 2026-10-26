// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Oct 26, 2026 — week 14 lost to illness (sick Wed–Sun), 12 days to race'

export const SCOREBOARD = [
  { n: 1, dates: 'Jul 20–26', plan: 36, actual: '36.1', delta: '+0.1',
    long: '10 → 10.1 mi @ 8:44', quality: '6 + strides ✓ · tempo 2 mi @ 7:15 (plan 3)',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 2, dates: 'Jul 27–Aug 2', plan: 38, actual: '39.0', delta: '+1.0',
    long: '11 → 11.0 mi @ 8:30', quality: '8×400 ✓ splits ±1s · tempo 2 mi @ 7:15',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 3, dates: 'Aug 3–9', plan: 40, actual: '40.0', delta: '+0.0',
    long: '12 → 12.0 mi @ 9:00', quality: '6×800 ✓ · tempo 4 mi @ 8:15 (way off)',
    str: '1/1', core: '1/1', yoga: '5/7', status: 'warn' },
  { n: 4, dates: 'Aug 10–16', plan: 33, actual: '33.3', delta: '+0.3',
    long: '10 → 10.0 mi @ 8:37', quality: 'strides ✓ · tempo 2 mi @ 7:05 ON TARGET',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 5, dates: 'Aug 17–23', plan: 42, actual: '44.0', delta: '+2.0',
    long: '13 → 14.2 mi @ 8:38', quality: '5×1000 @ 6:40 ✓ · tempo 3 mi (plan 4)',
    str: '1/1', core: '0/1', yoga: '6/7', status: 'warn' },
  { n: 6, dates: 'Aug 24–30', plan: 44, actual: '46.1', delta: '+2.1',
    long: '14 → 16.2 mi @ 9:12', quality: '6×800 @ 6:40 ✓ · tempo ~5 mi',
    str: '1/1', core: '1/1', yoga: '6/7', status: 'good' },
  { n: 7, dates: 'Aug 31–Sep 6', plan: 49, actual: '44.3', delta: '−4.7',
    long: '18 → 12.1 mi @ 9:31 ✗', quality: '4×1200 @ 6:35 ✓ · MP 4 mi @ 7:19 (plan 5)',
    str: '1/1', core: '0/1', yoga: '6/7', status: 'bad' },
  { n: 8, dates: 'Sep 7–13', plan: 45, actual: '39.0', delta: '−6.0',
    long: '18 → 18.0 mi @ 9:36 ✓', quality: 'TEMPO 5 mi @ 7:12 ✓✓ · intervals missed ✗',
    str: '1/1', core: '1/1', yoga: '3/7', status: 'warn' },
  { n: 9, dates: 'Sep 14–20', plan: '~34', actual: '28.8', delta: '−5.2',
    long: "LONG 90′ → 88′ / 8.3 mi ✓", quality: '4×1200 @ 6:30 ✓ (made up W8) · 5 mi w/ pace @ 7:54 on hills',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'live' },
  { n: 10, dates: 'Sep 21–27', plan: '~38', actual: '29.6', delta: '−8.4',
    long: 'LONG 2 hr → 18.8 mi / 2:57 ✓✓', quality: '4×800 @ 6:45 ✓ · 2 big hikes (Storr, Arthur’s Seat)',
    str: '0/1', core: '0/1', yoga: '0/7', status: 'live' },
  { n: 11, dates: 'Sep 28–Oct 4', plan: 51, actual: '44.2', delta: '−6.9',
    long: '18 → 17.1 mi @ 9:00 ✓', quality: '6×800 @ 6:25 ✓✓ · MP 5 mi @ 7:25 ✓✓ · PM double 3.3 @ 9:58 ✓',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'good' },
  { n: 12, dates: 'Oct 5–11', plan: '~10', actual: '6.5', delta: 'REST',
    long: 'cancelled → 3 mi test Sun ✓', quality: 'Knee/quad reset week. Six days off, then 3 mi on Oct 11 — "I’m back"',
    str: '0/1', core: '0/1', yoga: '3/7', status: 'live' },
  { n: 13, dates: 'Oct 12–18', plan: '~33', actual: '42.1', delta: '+9.1',
    long: '13 easy → 21.1 mi @ 8:07, last 6 @ 7:25 ✓✓✓', quality: '3×1200 ✓ · Tue double 4.5 mi · the long run WAS the dress rehearsal',
    str: '0/1', core: '0/1', yoga: '2/7', status: 'good' },
  { n: 14, dates: 'Oct 19–25', plan: 38, actual: '19.0', delta: '−19.0',
    long: '12 easy → missed (ill)', quality: 'Tue 6 + strides ✓ · Thu 2×2 mi @ 6:50 ✓✓ then SICK Wed–Sun',
    str: '1/1', core: '0/1', yoga: '0/7', status: 'bad' },
]

export const SCOREBOARD_NOTE =
  'Week 14 was cut in half by illness (sick Wed–Sun, now ~80% and on medication) — 19 of 38 miles, long run missed. ' +
  'Before falling ill he ran 2 × 2 mi at 6:50 in 82°F, the fastest threshold work of the whole block. ' +
  'Block total: 498 miles across 14 weeks. Taper week 15 has been rewritten around recovery.'

export const COMPLETION = [
  { label: 'Weekly mileage targets hit', value: '7 of 14', pct: 50 },
  { label: 'Long runs completed', value: '13 of 14 — only the taper 12 missed', pct: 93 },
  { label: 'Peak long run', value: '21.1 mi w/ 6 @ MP, 3 weeks out', pct: 100 },
  { label: 'Intervals', value: '8 of 9', pct: 89 },
  { label: 'Tempo / MP volume', value: '~82% of prescribed miles', pct: 82 },
  { label: 'Strength A (Mon)', value: '10 of 13 — none since Sep 28', pct: 77 },
  { label: 'Core', value: '6 of 13 — none since Sep 10', pct: 46 },
  { label: 'Yoga', value: '49 of 91 days', pct: 54 },
]

export const SINCE_LAST = {
  title: 'Since the last check (Oct 19–26) — illness took the week',
  wins: [
    ['Thu Oct 22 — 2 × 2 mi at 6:50, in 82°F', 'The fastest threshold work of the entire block — 22 sec/mi quicker than the 7:12 five-miler in September — and you ran it in 82-degree heat on the day you were coming down with something. Heat-adjusted that is roughly 6:34.'],
    ['Tue Oct 20 — 6 easy + strides, exactly as written', 'In 53°F. Clean execution of the session we swapped in for reps.'],
    ['Mon Oct 19 — strength is back', 'First Monday session since Sep 28, after a three-week gap.'],
    ['You rested when ill instead of pushing', 'Walks on Wed and Thu, a gentle walk-run Sunday. A year ago that might have been four forced bad runs. This is the right instinct.'],
  ],
  misses: [
    ['Sick Wed–Sun', '19 of 38 miles. The 12-mile taper long run gone entirely.'],
    ['The Oct 22 tempo was run while getting sick', 'Great session, questionable timing — you had already woken up ill the day before. Something to notice, not to beat yourself up over.'],
    ['Yoga: 0 of 7 again', 'Fourth week out of five near zero.'],
  ],
}

export const FATIGUE = {
  title: 'You are not less fit than you were. You are less rested than you will be.',
  body: [
    'You said you feel lost about your fitness, so here is the arithmetic rather than reassurance. Measurable detraining takes roughly two weeks of doing nothing. You lost five days, and they landed in a TAPER week — the cheapest week in the entire sixteen, the one whose only job is to make you fresh. Losing it costs you almost nothing physically. What it cost you is the feeling of being ready, which is a different thing and not one the race cares about.',
    'What has actually happened in the last three weeks: Oct 17, 21.1 miles with the final six at exactly 7:25 and heart rate FALLING from 168 to 158 across them. Oct 22, two by two miles at 6:50 in 82-degree heat, your quickest threshold work of the cycle. Those are not the numbers of a man whose fitness has gone anywhere.',
    'The honest risk now is not that you are undertrained. It is that you arrive anxious and either run the first six miles too fast to prove something to yourself, or run them too slow because you have talked yourself out of it. Both cost more than the illness did.',
    'So the plan for the next twelve days is: get fully well, run the easy miles easy, touch marathon pace once on Thursday if you are clear of it, and go to the line with a pacing plan that does not require you to guess how fit you are. That last part is what the Race Day tab is for.',
  ],
}

export const PACE_CHECK = [
  { type: 'Intervals (400–1200m)', prescribed: '6:30–6:40', actual: '6:35–6:40', adjusted: '—',
    verdict: 'On target. Every rep session hit the band. Aug 5 splits landed within one second of each other.',
    status: 'good' },
  { type: 'Tempo', prescribed: '6:55–7:05', actual: '7:12 (Sep 9, full 5 mi)', adjusted: '≈6:55',
    verdict: 'FIXED. Sep 9 was five continuous miles at 7:12 — first full-volume tempo of the block, 8 PRs. Heat-adjusted that is the fast end of the band.',
    status: 'good' },
  { type: 'Marathon pace', prescribed: '7:25', actual: '7:25 for 6 mi at mile 21', adjusted: '—',
    verdict: 'CONFIRMED Oct 17. Six miles averaging exactly 7:25 at the END of a 21-miler, heart rate falling 168 → 158 across the block. This is the number the whole plan was built around and you hit it under race-like fatigue.',
    status: 'good' },
  { type: 'Long run', prescribed: '8:45–9:20', actual: '8:30 easy portion', adjusted: '—',
    verdict: 'Oct 17 ran the first 13 at 8:30 average with HR in the 138–145 range, then had six MP miles left in the tank. Comfortably inside the band and comfortably aerobic.',
    status: 'good' },
  { type: 'Easy / recovery', prescribed: '9:00–9:45 (widened)', actual: '9:00–10:14', adjusted: '—',
    verdict: 'Band moved to match reality. These were never too slow — 9:00–9:45 is exactly right for a 3:15 marathoner. Do not speed them up.',
    status: 'good' },
]

export const HEAT = {
  title: 'The heat factor — the hypothesis, now confirmed',
  body: [
    'You trained through a North Texas July and August. Every run happened in 80°F+ air with high dew points. The standard correction for those conditions is a 4–6% pace penalty at aerobic effort. Applying a conservative 4%:',
  ],
  rows: [
    ['Your 7:19 MP miles', '≈7:01 in cool air'],
    ['Your 9:12 long run', '≈8:49 in cool air'],
    ['Your 9:47 easy days', '≈9:23 in cool air'],
  ],
  after: [
    'CONFIRMED Sep 26. Edinburgh delivered 18.8 hilly miles at 9:27 with HR 138 versus 18.0 flat-ish Texas miles at 9:36 with HR 145. Cool air was worth roughly what this correction predicted.',
    'Supporting evidence, not just a formula: on Sep 3 you held 7:18 / 7:21 / 7:19 while heart rate climbed 157 → 165 → 168 at constant pace. Upward drift at a fixed speed is the classic heat signature — cardiac drift, not lost fitness. The mile-4 fade to 8:06 is what happens when that drift finally caps you.',
  ],
}

export const ACTIONS = [
  { n: 1, title: 'Tempo volume — CLOSED, now keep it', done: true,
    body: 'Sep 9 was the fix: five continuous miles at 7:12. That was the single biggest gap in the block and you closed it. Week 11 onward, keep protecting it — if a session has to shrink, cut the warm-up, never the tempo miles.' },
  { n: 2, title: 'Scotland recovery — CLOSED, and it worked', done: true,
    body: 'You ran it exactly right: under target on volume, both long runs protected, quality kept alive, two big hikes. You came home with the lowest long-run heart rate of the entire block. This is the reason weeks 11–13 can now be pushed.' },
  { n: 3, title: 'Friday strength — CLOSED, retired Sep 12', done: true,
    body: 'Nine weeks, nine skips. Strength B is gone. Its two worthwhile movements moved to Monday: the split squat now rotates with the reverse lunge week to week, and a side plank joins the plank as a second finisher. Monday grows from 30 to 35 minutes; Fridays are easy run plus yoga, nothing else. The plan now matches what you actually do.' },
  { n: 4, title: 'Knee + rest week — CLOSED, it worked', done: true,
    body: 'Six days off, a 3 mi test, then a full week capped by 21.1 miles with no reported issue. Exactly the outcome the reset was for.' },
  { n: 5, title: 'The training is DONE — stop adding', done: true,
    body: 'You have 21.1 with 6 at MP banked three weeks out. There is no run between now and Nov 7 that makes you fitter; gains take 10–14 days to express and that window is shut. Every remaining session exists to keep you sharp and get you to the line healthy. Week 14 is deliberately 38 miles with a 12-mile easy long run — do not upgrade it.' },
  { n: 6, title: 'Put strength and core back, this week',
    body: 'Zero strength since Sep 28, zero core since Sep 10. The split squat and side plank went into Monday specifically to protect this knee, and the knee has just been through something. Two sessions a week for three weeks is cheap insurance on a race you have already earned.' },
  { n: 7, title: 'Race plan: 7:25 from the gun is now the call',
    body: 'The Oct 8 fallback of 7:35–7:40 can be retired. Start at 7:28–7:30 for the first two miles to let the crowd thin, settle to 7:25, and hold. Halfway target 1:37:0x–1:37:30. You have now run that pace for six miles at mile 21 of a long run, at a heart rate you could hold a conversation near.' },
  { n: 8, title: 'The only way to lose this now is between here and the line',
    body: 'Not fitness — fatigue, a niggle chased too hard, or a hero session in week 14 or 15. Boring is the strategy. If something feels off, take the day. You have a 479-mile block behind you; nothing you do in the next 20 days adds to it.' },
]

export const BOTTOM_LINE =
  'On Oct 17 you ran 21.1 miles and closed the last six at exactly 7:25 — goal marathon pace — with your heart rate FALLING from 168 ' +
  'to 158 across those miles. Three weeks out, that is as clean a readiness signal as this sport offers, and it retires the cautious ' +
  'race plan written when your knee was sore. Target 7:25 from the gun. The build is finished: 479 miles, twelve long runs, every ' +
  'single one completed. Two caveats carry forward. You got here by running 9 miles over a plan deliberately written down after an ' +
  'injury, which is the same shape of decision that caused the injury — and strength has been absent since Sep 28, core since Sep 10, ' +
  'the exact work added to protect that knee. So the last three weeks are deliberately boring: 38, then 27, then race week. Absorb ' +
  'Oct 17, put the strength back, and get to the line intact. The hard part is already done.'

export const PLAN_CHANGES = {
  title: 'Plan changes log',
  rows: [
    ['Week 7 · Sat Sep 5', 'Long run 15 → 18 mi', 'Week total 46 → 49'],
    ['Week 8 · Sep 7–13', 'Cutback → trimmed build. 5 mi tempo restored, long run 12 → 18', 'Week total 38 → 45'],
    ['Weeks 9–10 · Scotland', 'Unchanged — served as the two-week recovery block', '~34 / ~38'],
    ['Week 11 · Sep 28–Oct 4', 'Long run 16 → 18 (last 4 @ MP)', 'Week total 46 → 48'],
    ['Week 12 · Oct 5–11', 'Long run 18 → 20 (last 4 @ MP)', 'Week total 50 → 52'],
    ['Week 13 · Oct 12–18', 'Peak 20 unchanged at the time', '52'],
    ['Strength · from Sep 14', 'Friday Strength B retired after 0 of 9. Split squat + side plank folded into Monday', 'Mon 30 → 35 min'],
    ['Tuesdays · wks 11–13', 'NEW: 3 mi easy PM shakeout added after the morning reps', '+3 mi/wk'],
    ['Paces · from Sep 28', 'Long run 8:15–9:00 → 8:45–9:20; easy 8:30–9:15 → 9:00–9:45. MP unchanged at 7:25', 'matched to real data'],
    ['Week 12 · Oct 8', 'REWRITTEN: reset week for left knee/quad. 20-miler cancelled, daily mobility, 3 mi test run', '55 → ~10'],
    ['Week 13 · Oct 8', 'Was PEAK. Rewritten as conditional return: intervals dropped, long run 20 → 13 easy, no MP', '55 → ~33'],
    ['Tuesday doubles · Oct 8', 'Removed from weeks 12–13 — the extra load was the wrong bet mid-injury', '−3 mi/wk'],
    ['Week 14 · Oct 18', 'REWRITTEN: dress rehearsal dropped (run early on Oct 17). Long run 15 w/ 6 @ MP → 12 easy, intervals removed', '~41 → 38'],
    ['Week 15 · Oct 18', 'Taper trimmed further; long run 12 → 9', '32 → 27'],
    ['Race plan · Oct 18', 'Plan B retired. Target 7:25 from the start, not 7:35–7:40', 'goal 3:14:xx'],
  ],
  note: 'The peak long run is done and the fitness question is answered. The guiding principle for the last three weeks is unchanged and now matters more than ever: you cannot gain meaningful fitness from here, only preserve it or lose it. Every remaining decision should be the cautious one.',
}
