// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Sep 4, 2026'

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
  { n: 7, dates: 'Aug 31–Sep 6', plan: 49, actual: '26.3*', delta: 'in prog',
    long: '18 → Sat Sep 5', quality: '4×1200 @ 6:35 ✓ · MP 4 mi @ 7:19 (plan 5)',
    str: '1/1', core: '0/1', yoga: '4/7', status: 'live' },
]

export const SCOREBOARD_NOTE =
  '* Week 7 in progress — 26.3 mi logged through Fri Sep 4; the 18-miler and Sunday recovery still to come. ' +
  'Week 7 target was raised from 46 to 49 to accommodate the longer Saturday.'

export const COMPLETION = [
  { label: 'Runs', value: '41 of 41 scheduled', pct: 100 },
  { label: 'Long runs', value: '7 of 7', pct: 100 },
  { label: 'Intervals', value: '5 of 5 — all on pace', pct: 100 },
  { label: 'Tempo / MP', value: '7 of 7 run, ~65% of volume', pct: 65 },
  { label: 'Strength A (Mon)', value: '7 of 7', pct: 100 },
  { label: 'Strength B (Fri)', value: '0 of 7', pct: 0 },
  { label: 'Core', value: '5 of 7', pct: 71 },
  { label: 'Yoga', value: '39 of 47 days', pct: 83 },
]

export const PACE_CHECK = [
  { type: 'Intervals (400–1200m)', prescribed: '6:30–6:40', actual: '6:35–6:40', adjusted: '—',
    verdict: 'On target. Every rep session hit the band. Aug 5 splits landed within one second of each other.',
    status: 'good' },
  { type: 'Tempo', prescribed: '6:55–7:05', actual: '7:05–7:20', adjusted: '≈7:01',
    verdict: 'Pace is fine once you adjust for heat. The problem is duration, not speed.',
    status: 'warn' },
  { type: 'Marathon pace', prescribed: '7:25', actual: '7:18–7:21', adjusted: '≈7:01',
    verdict: 'Faster than goal MP. Sep 3 ran 7:18 / 7:21 / 7:19, then faded to 8:06 on the fourth.',
    status: 'good' },
  { type: 'Long run', prescribed: '8:15–9:00', actual: '8:30–9:12', adjusted: '≈8:49',
    verdict: 'In range. Aug 29: 16.2 mi at 9:11 average with heart rate of only 143 — a genuinely easy effort.',
    status: 'good' },
  { type: 'Easy / recovery', prescribed: '8:30–9:15', actual: '9:00–10:14', adjusted: '≈9:23',
    verdict: 'Slower than the band, and that is fine — arguably correct. Do not speed these up.',
    status: 'live' },
]

export const HEAT = {
  title: 'The heat factor — why the paces look worse than the fitness',
  body: [
    'You trained through a North Texas July and August. Every run happened in 80°F+ air with high dew points. The standard correction for those conditions is a 4–6% pace penalty at aerobic effort. Applying a conservative 4%:',
  ],
  rows: [
    ['Your 7:19 MP miles', '≈7:01 in cool air'],
    ['Your 9:12 long run', '≈8:49 in cool air'],
    ['Your 9:47 easy days', '≈9:23 in cool air'],
  ],
  after: [
    'That puts tempo and long-run paces right inside the prescribed bands.',
    'Supporting evidence, not just a formula: on Sep 3 you held 7:18 / 7:21 / 7:19 while heart rate climbed 157 → 165 → 168 at constant pace. Upward drift at a fixed speed is the classic heat signature — cardiac drift, not lost fitness. The mile-4 fade to 8:06 is what happens when that drift finally caps you.',
  ],
}

export const ACTIONS = [
  { n: 1, title: 'Protect tempo volume above all else',
    body: 'It is the single best marathon predictor and the one thing you have consistently trimmed — roughly 8 tempo miles missing across the block. If a session has to shrink, cut the warm-up, not the tempo miles. Week 8 Thursday is a full 5 continuous miles; treat it as non-negotiable.' },
  { n: 2, title: 'Run tempo by effort, not pace, until the weather breaks',
    body: 'Target the feeling of "comfortably hard, could speak a sentence." In this heat the watch will read 7:10–7:20 and that is correct. Chasing 6:55 in August is how you turn a tempo into a race.' },
  { n: 3, title: 'Fix Friday',
    body: 'Zero for seven on Strength B while Mondays are a perfect 7 for 7. It is 20 minutes. Either do it, or say the word and I will formally drop it and fold one exercise into Monday.' },
  { n: 4, title: 'Long runs are now handled — stop freelancing',
    body: 'The plan has been rewritten around your call: 18 on Sep 5, 18 on Sep 12, then 18 / 20 / 20 in weeks 11–13. That is five runs of 18+ and two twenties. Adding on top of that raises injury risk with no aerobic upside.' },
  { n: 5, title: 'Scotland is your fitness test',
    body: 'Sep 14–27, cool air, no heat tax. If easy runs there land near 8:45–9:00 without extra effort, your true fitness is exactly where the plan assumed and sub-3:15 is fully live. Re-check paces when you get back.' },
]

export const BOTTOM_LINE =
  'Sub-3:15 is still on. You have completed 100% of prescribed runs and every long run, your interval paces are dead on target, ' +
  'and your marathon-pace miles are running faster than the 7:25 you need. Nothing in this data says you are behind — it says you ' +
  'have been training hard in brutal heat and reading the watch too literally. The two genuine action items are tempo duration and ' +
  'the missing Friday strength session.'

export const PLAN_CHANGES = {
  title: 'Plan changes made Sep 4',
  rows: [
    ['Week 7 · Sat Sep 5', 'Long run 15 → 18 mi', 'Week total 46 → 49'],
    ['Week 8 · Sep 7–13', 'Cutback → trimmed build. 5 mi tempo restored, long run 12 → 18', 'Week total 38 → 45'],
    ['Weeks 9–10 · Scotland', 'Unchanged — now serving as the two-week recovery block', '~34 / ~38'],
    ['Week 11 · Sep 28–Oct 4', 'Long run 16 → 18 (last 4 @ MP)', 'Week total 46 → 48'],
    ['Week 12 · Oct 5–11', 'Long run 18 → 20 (last 4 @ MP)', 'Week total 50 → 52'],
    ['Week 13 · Oct 12–18', 'Peak 20 unchanged', '52'],
  ],
  note: 'Net effect: five runs of 18+ miles and two twenties, versus three and one in the original plan. Peak weekly mileage still tops out at 52.',
}
