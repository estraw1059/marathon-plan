// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Oct 18, 2026 — knee resolved, 21.1 mi with 6 @ MP banked'

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
]

export const SCOREBOARD_NOTE =
  'Week 13 ran 9 miles OVER a plan that had deliberately been written down to ~33 — and the long run, prescribed as 13 easy with no ' +
  'marathon-pace work, became 21.1 miles with the last 6 at exactly 7:25. Great outcome, risky route; see the read below. ' +
  'Block total: 479 miles across 13 weeks.'

export const COMPLETION = [
  { label: 'Weekly mileage targets hit', value: '7 of 13', pct: 54 },
  { label: 'Long runs completed', value: '12 of 12 — every single one', pct: 100 },
  { label: 'Peak long run', value: '21.1 mi w/ 6 @ MP, 3 weeks out', pct: 100 },
  { label: 'Intervals', value: '8 of 9', pct: 89 },
  { label: 'Tempo / MP volume', value: '~82% of prescribed miles', pct: 82 },
  { label: 'Strength A (Mon)', value: '10 of 13 — none since Sep 28', pct: 77 },
  { label: 'Core', value: '6 of 13 — none since Sep 10', pct: 46 },
  { label: 'Yoga', value: '49 of 91 days', pct: 54 },
]

export const SINCE_LAST = {
  title: 'Since the last check (Oct 9–18) — the knee resolved and the big one landed',
  wins: [
    ['Sat Oct 17 — 21.1 mi, last 6 at exactly 7:25', 'The best run of the entire block and the one that matters most. 21.10 miles in 2:51:11 at 8:07/mi. First 13 averaged 8:30 easy, then miles 16–21 came in at 7:33, 7:20, 7:28, 7:23, 7:24, 7:23 — an average of 7:25, dead on goal marathon pace, at mile 21 of a long run.'],
    ['Heart rate FELL through the marathon-pace block', 'Entering the MP miles your HR hit 168, then settled: 165, 157, 158, 159, 158 — dropping while pace held at 7:2x. That is the signature of an athlete settling into a rhythm that is comfortably within their fitness, not hanging on. Max 178, but the work was done around 158.'],
    ['Half-marathon split of 1:58:25', 'A new best inside a long run — ahead of Oct 3 (1:59:32) and Edinburgh (2:02:36). And this one had 21 miles stacked on top of it.'],
    ['The knee held', 'Six days fully off, a 3 mi test on Oct 11, then a full week including the 21 — with no reported issue. That is the outcome you wanted from the rest week.'],
  ],
  misses: [
    ['Strength: zero since Sep 28', 'Three weeks with no Monday session, after a 10-of-11 streak. The split squat and side plank were folded into Monday specifically to support the knee.'],
    ['Core: zero since Sep 10', 'Five and a half weeks.'],
    ['Yoga: 2 of 7 in week 13', 'Better than Scotland, still well below the habit that held through August.'],
  ],
}

export const FATIGUE = {
  title: 'The read: you are ready — and you got there by a route worth naming',
  body: [
    'First the verdict, because it is unambiguous. Six miles at exactly 7:25 at the end of a 21-miler, with heart rate falling from 168 to 158 while the pace held, is the single strongest marathon-readiness signal available short of a race. Three weeks out is also exactly where a peak long run belongs. Sub-3:15 is no longer a stretch goal — on this evidence it is the realistic target, and the 7:35–7:40 plan B from Oct 8 can be retired.',
    'Now the part worth saying plainly. Week 13 was deliberately written down to ~33 miles with a 13-mile EASY long run and no marathon-pace work, because you were seven days off a knee problem. You ran 42.1 miles and a 21-miler with an MP block. That is the same pattern that produced the injury in the first place: a down period, a big jump, and legs that felt good enough to take it. It worked this time. It worked spectacularly. But the process was a gamble, not a plan, and you have one more chance to get the run-in wrong.',
    'The flip side is that strength has been absent since Sep 28 and core since Sep 10 — the exact work that was added to Monday to protect this knee. The leg is holding, but it is holding without its support structure.',
    'So the job for the next three weeks is simple and boring: absorb Oct 17, do not chase another big one, and arrive on Nov 7 fresh. The fitness question is answered. The only remaining question is whether you get to the start line intact.',
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
  { n: 5, title: 'The training is DONE — stop adding',
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
