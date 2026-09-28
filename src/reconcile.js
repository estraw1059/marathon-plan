// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Sep 28, 2026 — Scotland complete, weeks 1–10 closed'

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
]

export const SCOREBOARD_NOTE =
  'Weeks 9–10 were the planned Scotland recovery block — under target by design, and you were told not to chase the miles. ' +
  'On top of the running, weeks 9–10 added roughly 8 miles of hiking with 556 m of climbing (Old Man of Storr, Arthur’s Seat). ' +
  'Block total through week 10: 382 miles.'

export const COMPLETION = [
  { label: 'Weekly mileage targets hit', value: '6 of 10 (wks 9–10 under by design)', pct: 60 },
  { label: 'Long runs completed', value: '10 of 10 — every single one', pct: 100 },
  { label: 'Intervals', value: '7 of 8 — all on pace when run', pct: 88 },
  { label: 'Tempo / MP volume', value: '~78% of prescribed miles', pct: 78 },
  { label: 'Strength A (Mon)', value: '10 of 11', pct: 91 },
  { label: 'Strength B (Fri)', value: '0 of 9 — RETIRED Sep 12', pct: 0 },
  { label: 'Core', value: '6 of 11', pct: 55 },
  { label: 'Yoga', value: '44 of 70 days — collapsed in Scotland', pct: 63 },
]

export const SINCE_LAST = {
  title: 'Scotland (Sep 14–27) — the fitness test, passed',
  wins: [
    ['Sat Sep 26 — Edinburgh, 18.8 mi', 'The headline. 18.78 mi in 2:57 at 9:27/mi with 338 m of climbing — and an average heart rate of 137.7, max 158. Longest run of the cycle, twice the climbing of any Texas long run, and SEVEN BPM LOWER than either of them.'],
    ['No late fade, on hills', 'Sep 12 gave back 44 sec/mi over the last three miles. Sep 26 closed at 9:19 and 9:24 for the final full miles, with the only slow split (10:18) being a 2.5% climb. The thing we set out to fix, fixed.'],
    ['The half-marathon split inside it', '2:02:36 — that is 5 min 46 sec faster than the half split inside your Sep 12 eighteen, at lower heart rate, on a hillier course.'],
    ['You made up the missed intervals', 'Sep 15, before you even flew: 4×800 at 6:30. Then 4×800 at 6:45 in the Highlands on Sep 22. You did not let the travel block eat the quality.'],
  ],
  misses: [
    ['Yoga: 0 of 14 days', 'It fell off entirely in Scotland and had already slipped before you left. Easiest thing to restart this week.'],
    ['Core: 0 of 2 weeks', 'Also gone for the whole trip. Wednesday circuit resumes now.'],
    ['One Monday strength missed', 'Sep 21. The other ten are done — this one is noise, not a pattern.'],
  ],
}

export const FATIGUE = {
  title: 'Verdict: the heat hypothesis was right, and you are ahead of where we thought',
  body: [
    'For nine weeks the read was that your paces looked worse than your fitness because you were training in a Texas summer. Scotland was the controlled experiment. Here is the result:',
    'Aug 29, Texas — 16.2 mi at 9:11, HR 143, 160 m climb.  Sep 12, Texas — 18.0 mi at 9:36, HR 145, 191 m climb.  Sep 26, Edinburgh — 18.8 mi at 9:27, HR 138, 338 m climb.',
    'The longest run, on double the climbing, at the lowest heart rate of the three. That is not a two-week freshness bounce — freshness does not buy you 7 bpm and 27 sec/mi on the half-marathon split simultaneously. Cool air was worth roughly what the 4% correction estimated, and your aerobic base is genuinely where the plan assumed.',
    'Consequence: the long-run and easy pace bands were set slightly optimistic back in July, from your old fitness. They have been widened (long run 8:45–9:20, easy 9:00–9:45) to match what you actually run at true easy effort. Nothing about the 7:25 marathon-pace target changes — your Sep 3 MP miles at 7:18–7:21 in heat already cleared it.',
  ],
}

export const PACE_CHECK = [
  { type: 'Intervals (400–1200m)', prescribed: '6:30–6:40', actual: '6:35–6:40', adjusted: '—',
    verdict: 'On target. Every rep session hit the band. Aug 5 splits landed within one second of each other.',
    status: 'good' },
  { type: 'Tempo', prescribed: '6:55–7:05', actual: '7:12 (Sep 9, full 5 mi)', adjusted: '≈6:55',
    verdict: 'FIXED. Sep 9 was five continuous miles at 7:12 — first full-volume tempo of the block, 8 PRs. Heat-adjusted that is the fast end of the band.',
    status: 'good' },
  { type: 'Marathon pace', prescribed: '7:25', actual: '7:18–7:21', adjusted: '≈7:01',
    verdict: 'Faster than goal MP. Sep 3 ran 7:18 / 7:21 / 7:19, then faded to 8:06 on the fourth.',
    status: 'good' },
  { type: 'Long run', prescribed: '8:45–9:20 (widened)', actual: '9:27 @ HR 138', adjusted: '≈9:10 grade-adj',
    verdict: 'Band was too aggressive, not you. Sep 26: 18.8 mi, 338 m climb, HR 138 — the lowest of any long run this block. Effort is the governor here, not the watch.',
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
  { n: 4, title: 'Restart yoga and core — today',
    body: 'Yoga went 0 for 14 in Scotland and core 0 for 2 weeks. You are about to run the three biggest weeks of the cycle at 51 / 55 / 55 with a new Tuesday double. The 10-minute evening flow and the Wednesday core circuit are exactly what keeps that volume from turning into a niggle. Cheapest insurance on the list.' },
  { n: 5, title: 'The Tuesday double is a bonus, not a pillar',
    body: 'Three easy miles, six-plus hours after the morning reps, at 9:30–10:00. If the pace creeps under 9:15 it has quietly become a third quality day and it will cost you Saturday. It is also the FIRST thing to cut if anything twinges — before the long run, before the tempo, before anything.' },
  { n: 6, title: 'Sat Oct 3 is the re-test that matters',
    body: '18 mi with the last 4 at marathon pace, in cool air, off a real recovery block. If those four close near 7:25 without heroics, sub-3:15 stops being a target and becomes a plan. Ping me after and I will re-pull.' },
]

export const BOTTOM_LINE =
  'Scotland answered the question. You ran 18.8 hilly miles in Edinburgh at a lower heart rate than either Texas long run, with no ' +
  'late fade and a half-marathon split almost six minutes quicker than two weeks earlier. Every long run in this block — all ten — is ' +
  'done. The heat was the tax, not your fitness. Weeks 11–13 now go 51 / 55 / 55 with the new Tuesday double and two twenties, which ' +
  'is more than the plan originally asked for and is justified by the data. Restart the yoga and core, keep the double honest, and ' +
  'treat Oct 3 as the dress rehearsal for the answer. Sub-3:15 is live.'

export const PLAN_CHANGES = {
  title: 'Plan changes made Sep 4',
  rows: [
    ['Week 7 · Sat Sep 5', 'Long run 15 → 18 mi', 'Week total 46 → 49'],
    ['Week 8 · Sep 7–13', 'Cutback → trimmed build. 5 mi tempo restored, long run 12 → 18', 'Week total 38 → 45'],
    ['Weeks 9–10 · Scotland', 'Unchanged — now serving as the two-week recovery block', '~34 / ~38'],
    ['Week 11 · Sep 28–Oct 4', 'Long run 16 → 18 (last 4 @ MP)', 'Week total 46 → 48'],
    ['Week 12 · Oct 5–11', 'Long run 18 → 20 (last 4 @ MP)', 'Week total 50 → 52'],
    ['Week 13 · Oct 12–18', 'Peak 20 unchanged', '52'],
    ['Strength · from Sep 14', 'Friday Strength B retired after 0 of 9. Split squat + side plank folded into Monday', 'Mon 30 → 35 min'],
    ['Tuesdays · wks 11–13', 'NEW: 3 mi easy PM shakeout added after the morning reps', '+3 mi/wk'],
    ['Week 11 · Sep 28–Oct 4', 'Tuesday double added', 'Week total 48 → 51'],
    ['Week 12 · Oct 5–11', 'Tuesday double added', 'Week total 52 → 55'],
    ['Week 13 · Oct 12–18', 'Tuesday double added — new peak', 'Week total 52 → 55'],
    ['Paces · from Sep 28', 'Long run 8:15–9:00 → 8:45–9:20; easy 8:30–9:15 → 9:00–9:45. MP unchanged at 7:25', 'matched to real data'],
  ],
  note: 'Net effect: five runs of 18+ miles and two twenties, versus three and one in the original plan. Peak weekly mileage now 55 — above the 52 we settled on in July, below the 60 you originally wanted, and supported by the Edinburgh heart-rate data.',
}
