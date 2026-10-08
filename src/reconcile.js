// ---- Plan vs. Actual reconciliation ----
// Snapshot pulled from Strava on Sep 4, 2026 (weeks 1-7).
// Paces are whole-run averages including warm-up / cool-down.

export const SNAPSHOT = 'Pulled from Strava · Oct 8, 2026 — week 11 closed, week 12 interrupted by left knee/quad tightness'

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
  { n: 12, dates: 'Oct 5–11', plan: 55, actual: '3.5*', delta: 'STOP',
    long: '20 → cancelled', quality: 'Tue reps abandoned halfway (congestion/pollen) · then knee/quad tightness',
    str: '0/1', core: '0/1', yoga: '2/4', status: 'bad' },
]

export const SCOREBOARD_NOTE =
  '* Week 12 stopped on Oct 6. Weeks 12–15 have been rewritten around the left knee/quad — see Plan changes below. ' +
  'Weeks 9–10 were the planned Scotland recovery block, under target by design. Block total to date: 430 miles across 11 completed weeks.'

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
  title: 'Since the last check (Sep 28 – Oct 8)',
  wins: [
    ['Thu Oct 1 — 5 miles at exactly 7:25', 'Marathon pace, held for five continuous miles in Encinitas, with 21 PRs on the day. This is the single most important workout in a marathon build and you executed it to the second. Whatever happens now, this is banked.'],
    ['Sat Oct 3 — 17.1 mi at 9:00, half split 1:59:32', 'Your fastest long run of the entire block. The half-marathon split inside it broke two hours — against 2:02:36 in Edinburgh and 2:08:22 on Sep 12. Mile 17 came home at 8:59.'],
    ['Tue Sep 29 — reps at 6:25 and a textbook double', '6×800 at 6:25, faster than the prescribed 6:30–6:40 band. Then the first Tuesday PM shakeout at 9:58/mi — dead centre of the 9:30–10:00 window you were given. Perfect execution.'],
  ],
  misses: [
    ['The left knee/quad', 'Gradual onset, no pain, but tight enough to change how you move. Week 12 stopped on Oct 6 and the 20-miler is gone.'],
    ['Yoga: 0 of 7 in week 11', 'Then two sessions on Oct 6, the day things went wrong. The flexibility work has been absent since Sep 13 — three and a half weeks.'],
    ['Core: 0 of 3 weeks', 'Last core session was Sep 10.'],
    ['Week 11 volume', '44.2 against a 51 target, mostly from a missed Sunday around your brother’s wedding. Entirely forgivable.'],
  ],
}

export const FATIGUE = {
  title: 'The knee: what the data suggests, and why the timing is survivable',
  body: [
    'Not a diagnosis — I am not a clinician and cannot examine a leg. But the training log tells a consistent story. Week 11 stacked three new things at once, one week after a two-week down block: your first-ever Tuesday double, intervals at 6:25 (faster than the 6:30–6:40 you were given), and the fastest long run of the entire cycle at 9:00/mi. Running cadence also jumped from roughly 76 to 78.7. That is a lot of novel load landing on legs that had just spent a fortnight running easy — the classic "feeling great after a taper" trap.',
    'Meanwhile the counterweight disappeared. Yoga has been absent since Sep 13 and core since Sep 10 — three and a half weeks without the flexibility and hip work that was in the plan specifically to keep this from happening. Tightness in the quad with a knee that feels wrong is exactly the shape of problem that mobility work is there to prevent. Those two facts sitting next to each other in the log are hard to ignore.',
    'The good news in your own description: tight, not painful, full pain-free walking and stairs. That is a far better starting point than pain, and it is usually the more responsive kind of problem.',
    'On the calendar: it is 30 days to the start line. Fitness gains from any single run take about 10–14 days to express, so your effective training window closed around Oct 24 regardless — roughly two more useful weeks. You would have been tapering from Oct 26 anyway. A week off NOW costs you very little measurable fitness. Running through it for four more weeks could cost you the race.',
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
  { n: 4, title: 'Rest this week — and it is genuinely cheap',
    body: 'You are not throwing away fitness. The two 20-milers were always a bonus on top of 18.8, 18.0 and 17.1 already in the bank, and a marathon build does not need them. Take the week. Walking is fine and probably better than lying still; tightness usually responds to gentle movement rather than total immobility.' },
  { n: 5, title: 'Yoga and core are now the actual workout',
    body: 'Daily. Quads, hip flexors, IT band, glutes. This is not filler — it is the single thing in the plan aimed directly at what you are feeling, and it has been missing for three and a half weeks. If you do one thing this week, do this.' },
  { n: 6, title: 'Saturday Oct 10 is a test, not a workout',
    body: 'Three miles at 10:00+/mi, flat, ONLY if the tightness is clearly better. If it eases as you warm up, finish and call it a win. If it becomes pain, or you catch yourself altering your stride to protect it, stop and walk home. No negotiating with yourself mid-run.' },
  { n: 7, title: 'Get it looked at if it is not clearly better by Monday',
    body: 'Not because it sounds serious — it does not. Because you have 30 days and a physio can often resolve a tightness problem in one or two sessions, while guessing costs you a week you do not have. The downside of going is an hour and a copay. The downside of not going is the race.' },
  { n: 8, title: 'Build a plan B for race day now, while calm',
    body: 'If the return goes cleanly, 3:15 is still live — your Oct 1 five miles at 7:25 says the engine is there. If week 13 is rocky, start at 7:35–7:40 and decide at halfway. Going out at 7:25 on an underdone final block is how a 3:15 attempt becomes a 3:40 death march. Decide this in advance, not at mile 1.' },
]

export const BOTTOM_LINE =
  'This is a worse week than you wanted and a better position than it feels like. On Oct 1 you ran five miles at exactly 7:25 — goal ' +
  'marathon pace — and two days later covered 17.1 miles with a sub-two-hour half split inside it. That fitness is already banked; it ' +
  'does not evaporate in a week off. What you are missing are two 20-milers that were a bonus on top of an 18.8, an 18.0 and a 17.1 you ' +
  'have already run. The real risk now is not losing fitness, it is arriving at Nov 7 with a leg that will not hold up. So: rest this ' +
  'week, do the mobility work that has been missing since Sep 13, treat Saturday as a three-mile test rather than a workout, and see ' +
  'someone if it is not clearly better by Monday. Sub-3:15 is still live — but a sensible plan B decided in advance is worth more right ' +
  'now than any mile you could force this week.'

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
    ['Week 12 · Oct 5–11', 'REWRITTEN Oct 8: reset week. 20-miler cancelled, no strength, daily mobility, 3 mi test run Sat', '55 → ~10'],
    ['Week 13 · Oct 12–18', 'Was PEAK. Now conditional return: intervals dropped, long run 20 → 13 easy, no MP', '55 → ~33'],
    ['Week 14 · Oct 19–25', 'Becomes the last real week. Dress rehearsal trimmed 16 w/ 8 @ MP → 15 w/ 6 @ MP', '44 → ~41'],
    ['Week 15 · Oct 26–Nov 1', 'Taper trimmed slightly', '34 → 32'],
    ['Tuesday doubles', 'Removed from weeks 12–13 — the extra load is the wrong bet right now', '−3 mi/wk'],
  ],
  note: 'Everything from week 13 onward is conditional on the leg. The guiding principle for the last four weeks: you cannot gain meaningful fitness now, you can only preserve it or lose it. Every decision from here should be the cautious one.',
}
