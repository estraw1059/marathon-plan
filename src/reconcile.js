// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Sep 12, 2026 — through this morning’s 18-miler'

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
  { n: 8, dates: 'Sep 7–13', plan: 45, actual: '35.0*', delta: '−6.0',
    long: '18 → 18.0 mi @ 9:36 ✓', quality: 'TEMPO 5 mi @ 7:12 ✓✓ · intervals missed ✗',
    str: '1/1', core: '1/1', yoga: '2/6', status: 'warn' },
]

export const SCOREBOARD_NOTE =
  '* Week 8 through Saturday Sep 12 — Sunday’s 4 mi recovery still to come, which brings it to ~39 of 45. ' +
  'Block total to date: 318 miles.'

export const COMPLETION = [
  { label: 'Weekly mileage targets hit', value: '6 of 8 weeks', pct: 75 },
  { label: 'Long runs as prescribed', value: '7 of 8 — only Sep 5 missed', pct: 88 },
  { label: 'Intervals', value: '5 of 6 — all on pace when run', pct: 83 },
  { label: 'Tempo / MP volume', value: 'was 65%, now ~75% after the 5-miler', pct: 75 },
  { label: 'Strength A (Mon)', value: '9 of 9 — the habit that stuck', pct: 100 },
  { label: 'Strength B (Fri)', value: '0 of 9 — RETIRED Sep 12', pct: 0 },
  { label: 'Core', value: '6 of 9', pct: 67 },
  { label: 'Yoga', value: '43 of 55 days', pct: 78 },
]

export const SINCE_LAST = {
  title: 'Since the last check (Sep 5–12)',
  wins: [
    ['Wed Sep 9 — the tempo, finally', 'Five continuous miles at 7:12, your first full-volume tempo of the entire block and eight PRs on the day. Heat-adjusted that is roughly 6:55 — the fast end of the prescribed band. This was action item #1 and you closed it.'],
    ['Sat Sep 12 — you got the 18', 'Longest run of the cycle at 18.00 mi, 9:36 average, heart rate 145 avg / 160 max. Miles 12–15 were your FASTEST of the day (9:09, 9:14, 9:00, 9:09) at mile 14 of an 18-miler. That is a real aerobic result.'],
    ['You salvaged the week', 'Tuesday went badly, so you moved the tempo up to Wednesday instead of letting the week collapse. That is the single most coachable thing in this whole log.'],
  ],
  misses: [
    ['Sat Sep 5 — 18 became 12.1', 'Overslept, started late, ran into the heat. Cost: 5.9 miles and the week’s headline session.'],
    ['Tue Sep 8 — intervals skipped', 'Felt unwell and cut it to 2.7 mi. First interval session missed all block.'],
    ['Strength B still 0 for 9', 'Nine Fridays, nine skips, while Mondays stay a perfect 9 for 9.'],
    ['Yoga dropped off', '2 of 6 days this week versus a 6-of-7 habit through August.'],
  ],
}

export const FATIGUE = {
  title: 'The honest read: you are tired, and the timing is lucky',
  body: [
    'Compare the two big long runs back to back. Aug 29 was 16.2 mi at 9:11 with an average heart rate of 143. Today was 18.0 mi at 9:36 with an average of 145 — 26 sec/mi slower for 1.8 more miles at the same effort. The late fade also widened: you gave back 44 sec/mi over the last three miles versus 40 on Aug 29.',
    'Add the oversleep, the "not feeling good" Tuesday, two straight weeks under target and yoga falling off, and the picture is consistent. This is not lost fitness — it is nine weeks of accumulated load in a Texas summer finally showing up.',
    'Which makes the calendar a gift: Scotland starts Monday. Two genuinely reduced weeks in cool air land exactly where your body needs them. Do not try to make up the missing miles over there. Run by time, keep the two long runs, let everything else go.',
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
  { type: 'Long run', prescribed: '8:15–9:00', actual: '8:30–9:36', adjusted: '≈9:13',
    verdict: 'Drifting slower as distance grows. Sep 12: 18 mi at 9:36, HR 145 — easy effort, but 26 sec/mi off Aug 29 for 1.8 more miles. Fatigue, not fitness.',
    status: 'warn' },
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
  { n: 1, title: 'Tempo volume — CLOSED, now keep it', done: true,
    body: 'Sep 9 was the fix: five continuous miles at 7:12. That was the single biggest gap in the block and you closed it. Week 11 onward, keep protecting it — if a session has to shrink, cut the warm-up, never the tempo miles.' },
  { n: 2, title: 'Scotland is recovery, not catch-up',
    body: 'You are nine weeks deep and it shows. Do NOT try to win back the 11 miles you are down. Run by time, protect the two long runs (90 min and 2 hr), skip anything that feels like a grind. Coming home fresh is worth more than any mile you could bank over there.' },
  { n: 3, title: 'Friday strength — CLOSED, retired Sep 12', done: true,
    body: 'Nine weeks, nine skips. Strength B is gone. Its two worthwhile movements moved to Monday: the split squat now rotates with the reverse lunge week to week, and a side plank joins the plank as a second finisher. Monday grows from 30 to 35 minutes; Fridays are easy run plus yoga, nothing else. The plan now matches what you actually do.' },
  { n: 4, title: 'Guard the sleep before long runs',
    body: 'Sep 5 was lost to an oversleep and a late start into the heat — that one decision cost 5.9 miles and the week. Lay kit out the night before and set two alarms on long-run eves. It is the cheapest fix on this list.' },
  { n: 5, title: 'Week 11 is the re-test',
    body: 'Sep 28–Oct 4, first long run back in cool air after two easy weeks: 18 mi with the last 4 at MP. If those close near 7:25 without heroics, sub-3:15 is confirmed and we lock paces for the final block. Ping me that week and I will re-pull Strava.' },
]

export const BOTTOM_LINE =
  'This fortnight looks worse on the scoreboard than it is in the legs. Yes — two weeks under target, a blown 18 on Sep 5, and a ' +
  'missed interval session. But the two things that actually move a marathon both happened: you ran five continuous tempo miles at ' +
  '7:12, closing the single biggest gap in the block, and you put an 18-miler in the bank this morning with your fastest miles ' +
  'coming at mile 14. Sub-3:15 is still on. You are carrying real fatigue into Scotland, and Scotland is a recovery block — use it ' +
  'as one, then we re-test paces in cool air on week 11.'

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
  ],
  note: 'Net effect: five runs of 18+ miles and two twenties, versus three and one in the original plan. Peak weekly mileage still tops out at 52.',
}
